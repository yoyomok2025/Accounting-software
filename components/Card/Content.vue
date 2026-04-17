<template>
  <button
    class="group relative flex w-full overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/50 p-3 text-left shadow-md transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
    :title="provideCategoryName(props.data.category, false)"
    @click="emits('click')"
  >
    <div class="h-icon-size w-icon-size basis-icon-size rounded-xl bg-gradient-primary p-0.5 shadow-md transition-transform duration-200 group-hover:scale-105">
      <div class="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-900">
        <TheIcon
          :category-id="props.data.category"
          class="text-primary before:text-4xl"
        />
      </div>
    </div>
    <div class="w-card-content pl-3">
      <div class="flex items-center justify-between">
        <span class="block truncate text-sm font-semibold text-slate-100">
          {{ provideCategoryName(props.data.category, false) }}
        </span>
        <span class="block truncate text-sm font-bold" :class="providePriceClass">
          {{ provideCategoryName(`${props.data.price}`) }}
        </span>
      </div>
      <div class="mt-0.5 truncate text-xs text-slate-400">{{ props.data.store || 'No store' }}</div>
      <div v-if="props.data.tags.length > 0" class="mt-1 flex flex-wrap gap-1">
        <span
          v-for="tag in props.data.tags"
          :key="tag"
          class="inline-block rounded-md bg-slate-800 px-1.5 py-0.5 text-xs text-slate-400"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
  import { EnumRecordType } from '@/assets/types/record';
  import type { IRecordForm } from '@/assets/types/record';

  const props = defineProps<{ data: IRecordForm }>();

  const emits = defineEmits<{ (e: 'click'): void }>();

  const providePriceClass = computed((): string => {
    switch (useCategoryValidator(props.data.category)) {
      case EnumRecordType.EXPENSE:
        return 'text-danger-500';
      case EnumRecordType.INCOME:
        return 'text-success-500';
      default:
        return 'text-slate-400';
    }
  });

  const provideCategoryName = (
    categoryID: string,
    isMainCategoryName?: boolean
  ): string => useCategoryName(categoryID, isMainCategoryName || false);
</script>
