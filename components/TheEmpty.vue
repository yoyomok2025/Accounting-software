<template>
  <div class="flex flex-col items-center justify-center py-16 text-center">
    <!-- Empty state icon -->
    <div class="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-800/50">
      <span class="before:font-material before:content-['\e887'] before:text-4xl text-slate-600" />
    </div>
    <!-- Description -->
    <p class="text-lg font-semibold text-slate-500">
      {{ props.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(defineProps<{ description?: string }>(), {
    description: 'No data yet',
  });
</script>
