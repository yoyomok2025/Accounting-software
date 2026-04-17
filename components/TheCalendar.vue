<template>
  <div class="rounded-2xl border border-slate-800/50 bg-slate-900/50 p-4">
    <!-- Month navigation -->
    <div class="flex items-center justify-between mb-4">
      <button
        class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 text-xl transition-all duration-200 hover:bg-slate-800 hover:text-slate-100"
        title="Previous"
        @click="handleChangeMonth(false)"
      >
        &lt;
      </button>
      <Component :is="props.tagName" class="flex justify-center">
        <button class="text-lg font-bold text-slate-100 transition-colors duration-200 hover:text-primary" title="Today" @click="handleMoveToday">
          {{ dayjs(`${selectedDate.year}-${selectedDate.month}`).format('MMMM YYYY') }}
        </button>
      </Component>
      <button
        class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 text-xl transition-all duration-200 hover:bg-slate-800 hover:text-slate-100"
        title="Next"
        @click="handleChangeMonth(true)"
      >
        &gt;
      </button>
    </div>
    <!-- Days of week -->
    <div>
      <ul class="flex items-center py-2">
        <li
          v-for="item in captionDays"
          :key="item"
          class="w-[14.285%] text-center text-sm font-medium text-slate-500"
        >
          <span>{{ item }}</span>
        </li>
      </ul>
      <!-- Calendar days -->
      <ul class="flex flex-wrap items-center">
        <li
          v-for="(item, index) in contextCalendar"
          :key="index"
          class="w-[14.285%] text-center"
        >
          <button
            class="mx-auto my-1 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 hover:bg-slate-800"
            :class="provideClassName(item)"
            :title="useFormatNumber(item.date)"
            @click="handleClick(item)"
          >
            {{ useFormatNumber(item.date) }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import calendarData from '@/assets/data/calendar.json';
  import { useCommonStore } from '@/stores/commonStore';
  import type { ICalendarValue } from '@/assets/types/record';
  import { useFormatNumber } from '@/utils/useFormatNumber';

  const props = withDefaults(
    defineProps<{ tagName?: string; default?: ICalendarValue }>(),
    {
      tagName: 'div',
      default() {
        return useTimeTodayValue();
      },
    }
  );

  const emits = defineEmits<{
    (e: 'update', value: ICalendarValue): void;
  }>();

  const dayjs = useDayjs();
  const commonStore = useCommonStore();
  const { utcOffset } = storeToRefs(commonStore);
  const captionDays = ref<string[]>([...calendarData.locale.daysShort]);

  const selectedDate = ref<ICalendarValue>({
    year: props.default.year,
    month: props.default.month,
    date: props.default.date,
  });

  // Calendar Cells

  const contextCalendar = computed((): ICalendarValue[] => {
    const result: ICalendarValue[] = [];
    const offset: number = utcOffset.value;

    const totalDates: number = dayjs(
      `${selectedDate.value.year}-${selectedDate.value.month}`
    )
      .utcOffset(offset)
      .daysInMonth();

    for (let i = 0; i < totalDates; i++) {
      const dateCell = {
        year: selectedDate.value.year,
        month: selectedDate.value.month,
        date: i + 1,
      };
      result.push(dateCell);
    }

    // 補上前面的日期
    const frontPart = Number(
      dayjs(`${selectedDate.value.year}-${selectedDate.value.month}`)
        .utcOffset(offset)
        .format('d')
    );

    const prevMonth = provideMonthValue(
      selectedDate.value.year,
      selectedDate.value.month,
      false
    );

    const prevMonthDates: number = dayjs(`${prevMonth.year}-${prevMonth.month}`)
      .utcOffset(offset)
      .daysInMonth();

    for (let i = 0; i < frontPart; i++) {
      const dateCell = {
        year: prevMonth.year,
        month: prevMonth.month,
        date: prevMonthDates - frontPart + (i + 1),
      };
      result.splice(i, 0, dateCell);
    }

    // 補上後面的日期
    const backPart = result.length % 7 === 0 ? 0 : 7 - (result.length % 7);

    const nextMonth = provideMonthValue(
      selectedDate.value.year,
      selectedDate.value.month,
      true
    );

    for (let i = 0; i < backPart; i++) {
      const dateCell = {
        year: nextMonth.year,
        month: nextMonth.month,
        date: i + 1,
      };
      result.push(dateCell);
    }

    return result;
  });

  // Get Previous or Next Month (Getting Value of Year & Month)

  const provideMonthValue = (
    originalYear: number,
    originalMonth: number,
    isNext: boolean
  ): { year: number; month: number } => {
    const result = {
      year: originalYear,
      month: isNext ? originalMonth + 1 : originalMonth - 1,
    };

    if (result.month <= 0) {
      result.month = 12;
      result.year -= 1;
    } else if (result.month > 12) {
      result.month = 1;
      result.year += 1;
    }
    return result;
  };

  const provideClassName = (payload: ICalendarValue): string => {
    const today = useTimeTodayValue();
    const formatPayload = `${payload.year}-${payload.month}-${payload.date}`;
    const formatToday = `${today.year}-${today.month}-${today.date}`;
    const formatSelected = `${selectedDate.value.year}-${selectedDate.value.month}-${selectedDate.value.date}`;

    // Is Selected
    if (formatSelected === formatPayload) {
      return 'bg-gradient-primary text-white shadow-md shadow-primary/30 hover:bg-gradient-primary hover:shadow-glow';
    }

    // Is Today
    if (formatToday === formatPayload) {
      return 'text-primary font-semibold bg-primary/10';
    }

    // Is Others Month
    if (
      payload.year !== selectedDate.value.year ||
      payload.month !== selectedDate.value.month
    ) {
      return 'text-slate-600';
    }

    return 'text-slate-300';
  };

  // Set SelectedDate

  const handleSetSelectedDate = (payload: ICalendarValue): void => {
    const { year, month, date } = payload;
    selectedDate.value.year = year;
    selectedDate.value.month = month;
    selectedDate.value.date = date;
  };

  // Change Month

  const handleChangeMonth = (isNext: boolean): void => {
    const { year, month } = provideMonthValue(
      selectedDate.value.year,
      selectedDate.value.month,
      isNext
    );
    handleSetSelectedDate({ year, month, date: 1 });
  };

  // Move to Today

  const handleMoveToday = (): void => {
    const today = useTimeTodayValue();
    handleSetSelectedDate(today);
  };

  // Pick Calendar Cell

  const handleClick = (payload: ICalendarValue): void => {
    handleSetSelectedDate(payload);
  };

  watch(
    () => selectedDate.value,
    (value) => {
      emits('update', value);
    },
    { immediate: true, deep: true }
  );
</script>
