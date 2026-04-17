<template>
  <div>
    <!-- Header with category and price -->
    <div class="mb-4">
      <div class="mb-2 flex items-center justify-between">
        <span class="text-lg font-bold text-slate-100">
          {{ provideName }}
        </span>
        <span class="text-xl font-bold" :class="providePriceClass">
          {{ providePrice }}
        </span>
      </div>
      <div class="text-xs text-slate-400">{{ provideTime }}</div>
    </div>

    <!-- Details section -->
    <div v-if="hasDetail" class="space-y-3">
      <!-- Store -->
      <div v-if="props.data.store.trim()" class="flex items-start gap-3 rounded-xl bg-slate-800/50 p-3">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20">
          <span class="before:font-material before:content-['\e8d0'] before:text-lg text-primary" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-xs font-medium text-slate-400">Store</div>
          <div class="truncate text-sm font-medium text-slate-100">{{ props.data.store }}</div>
        </div>
      </div>

      <!-- Note -->
      <div v-if="props.data.note.trim()" class="flex items-start gap-3 rounded-xl bg-slate-800/50 p-3">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/20">
          <span class="before:font-material before:content-['\e8b9'] before:text-lg text-accent" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-xs font-medium text-slate-400">Note</div>
          <div class="text-sm font-medium text-slate-100">{{ props.data.note }}</div>
        </div>
      </div>

      <!-- Tags -->
      <div v-if="props.data.tags.length" class="flex flex-wrap gap-2">
        <div
          v-for="tag in props.data.tags"
          :key="tag"
          class="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 px-3 py-1.5"
        >
          <span class="text-xs font-bold text-primary">#</span>
          <span class="text-xs font-semibold text-slate-100">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { EnumRecordType } from '@/assets/types/record';
  import type { IRecordForm } from '@/assets/types/record';

  const props = defineProps<{ data: IRecordForm }>();

  const hasDetail = computed((): boolean => {
    const { store, note, tags } = props.data;
    if (!store.trim() && !note.trim() && !tags.length) {
      return false;
    }
    return true;
  });

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

  const providePrice = computed((): string => {
    const price: string = useFinanceNumber(props.data.price);

    switch (useCategoryValidator(props.data.category)) {
      case EnumRecordType.EXPENSE:
        return `-${price}`;
      case EnumRecordType.INCOME:
        return `+${price}`;
      default:
        return price;
    }
  });

  const provideTime = computed((): string => {
    const { year, month, date, hour, minute } = useTimeValue(props.data.time);
    const _date = `${year}/${useFormatNumber(month)}/${useFormatNumber(date)}`;
    const _time = `${useFormatNumber(hour)}:${useFormatNumber(minute)}`;
    return `${_date} ${_time}`;
  });

  const provideName = computed((): string => {
    const mainName = useCategoryName(props.data.category, true);
    const subName = useCategoryName(props.data.category, false);
    return `${mainName} - ${subName}`;
  });
</script>
