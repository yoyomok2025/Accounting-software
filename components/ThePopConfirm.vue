<template>
  <ThePopUp :is-open="props.isOpen">
    <div
      class="m-auto w-4/5 max-w-sm overflow-hidden rounded-2xl bg-slate-900 text-slate-100 shadow-2xl"
    >
      <!-- Title -->
      <div
        class="flex items-center justify-center border-b border-slate-700/50 p-6 text-center"
      >
        <p class="text-base font-semibold">{{ props.title }}</p>
      </div>
      <!-- Buttons -->
      <div class="flex">
        <button
          class="w-1/2 border-r border-slate-700/50 p-4 text-base font-semibold text-danger-500 transition-colors duration-200 hover:bg-danger-500/10"
          :title="props.leftText"
          @click="emits('clickLeftButton')"
        >
          {{ props.leftText }}
        </button>
        <button
          class="w-1/2 p-4 text-base font-semibold text-slate-400 transition-colors duration-200 hover:bg-slate-800/50 hover:text-slate-100"
          :title="props.rightText"
          @click="emits('clickRightButton')"
        >
          {{ props.rightText }}
        </button>
      </div>
    </div>
  </ThePopUp>
</template>

<script setup lang="ts">
  const emits = defineEmits<{
    (e: 'clickLeftButton'): void;
    (e: 'clickRightButton'): void;
  }>();

  const props = withDefaults(
    defineProps<{
      title: string;
      leftText: string;
      rightText: string;
      isOpen: boolean;
    }>(),
    {
      title: '',
      leftText: '',
      rightText: '',
      isOpen: false,
    }
  );
</script>
