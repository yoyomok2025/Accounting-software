<template>
  <header
    class="sticky top-0 z-50 h-header-height basis-header-height border-b border-slate-800/50 backdrop-blur-md transition-all duration-300"
    :class="scrollValue > 0 ? 'bg-slate-950/80 shadow-lg' : 'bg-slate-950/50'"
  >
    <div
      class="flex h-header-height items-center justify-center px-header-height text-center"
    >
      <h1 class="block truncate text-lg font-bold text-slate-100">{{ provideHeaderName }}</h1>
    </div>
    <button
      class="before-font-material absolute right-0 top-0 flex h-header-height w-header-height items-center justify-center text-slate-400 transition-colors duration-200 hover:text-primary before:content-['\e8b6'] hover:bg-slate-800/50"
      title="Search"
      @click="handleOpenSearch"
    />
  </header>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useCommonStore } from '@/stores/commonStore';
  import { EnumHeaderName, EnumRouteName } from '~/assets/types/index';

  const route = useRoute();
  const commonStore = useCommonStore();
  const { scrollValue } = storeToRefs(commonStore);

  const provideHeaderName = computed((): string => {
    switch (route.path) {
      case EnumRouteName.CALENDAR:
        return EnumHeaderName.CALENDAR;
      case EnumRouteName.OVERVIEW:
        return EnumHeaderName.OVERVIEW;
      case EnumRouteName.ANALYSIS:
        return EnumHeaderName.ANALYSIS;
      default:
        return '';
    }
  });

  const handleOpenSearch = (): void => {
    commonStore.isShowSearch = true;
  };
</script>
