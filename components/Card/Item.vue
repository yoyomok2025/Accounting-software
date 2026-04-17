<template>
  <div>
    <CardContent :data="props.data" @click="isPopUpOpen = true" />
    <ThePopUp :is-open="isPopUpOpen" @close="isPopUpOpen = false">
      <div class="bg-slate-900 text-slate-100">
        <!-- Header with gradient background -->
        <div class="relative bg-gradient-primary p-6 pb-12">
          <!-- Action buttons -->
          <div class="mb-4 flex justify-end gap-2">
            <button
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 transition-all duration-200 hover:bg-white/30 before:font-material before:content-['\e3c9'] before:text-lg"
              title="Edit"
              @click="handleEdit"
            />
            <button
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 transition-all duration-200 hover:bg-danger-500/80 before:font-material before:content-['\e872'] before:text-lg"
              title="Delete"
              @click="isConfirmOpen = true"
            />
            <button
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 transition-all duration-200 hover:bg-white/30 before:font-material before:content-['\e5cd'] before:text-lg"
              title="Close"
              @click="isPopUpOpen = false"
            />
          </div>
          <!-- Category icon -->
          <TheIcon
            :category-id="props.data.category"
            class="m-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 text-white before:text-5xl shadow-xl"
          />
        </div>
        <!-- Content with negative margin to overlap header -->
        <div class="-mt-6 rounded-t-3xl bg-slate-900 p-6">
          <CardPopUpDetail :data="props.data" />
        </div>
      </div>
    </ThePopUp>
    <ThePopConfirm
      :is-open="isConfirmOpen"
      title="Are you sure to delete this record?"
      left-text="Delete"
      right-text="Cancel"
      @click-left-button="handleDelete"
      @click-right-button="isConfirmOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
  import { useRecordStore } from '@/stores/recordStore';
  import type { IRecordForm } from '@/assets/types/record';

  const props = defineProps<{ data: IRecordForm }>();

  const recordStore = useRecordStore();

  const isPopUpOpen = ref<boolean>(false);
  const isConfirmOpen = ref<boolean>(false);

  const handleEdit = (): void => {
    recordStore.HANDLE_MODE_EDITOR(props.data.id);
    isPopUpOpen.value = false;
  };

  const handleDelete = (): void => {
    recordStore.DELETE_RECORD(props.data.id);
  };
</script>
