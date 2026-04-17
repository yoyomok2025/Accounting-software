<template>
  <nav class="h-24 w-full basis-24 border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
    <div class="flex">
      <button
        v-for="item in menuButtons"
        :key="item.name"
        :title="item.name"
        class="group relative flex h-menu-height w-1/4 flex-col items-center justify-center gap-1 transition-all duration-200"
        :class="
          item.path === route.path || (item.name === EnumMenuName.RECORD && recordStore.isShowRecord)
            ? 'text-primary'
            : 'text-slate-400 hover:text-slate-200'
        "
        @click="handleClick(item)"
      >
        <!-- Active indicator -->
        <span
          v-if="item.path === route.path || (item.name === EnumMenuName.RECORD && recordStore.isShowRecord)"
          class="absolute -top-0.5 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-gradient-primary shadow-glow"
        />
        <!-- Icon -->
        <div
          class="before-font-material text-center transition-transform duration-200 before:m-auto before:block before:h-8 before:w-10 before:text-center before:text-3xl group-hover:scale-110"
          :class="`${item.className}`"
        />
        <!-- Label -->
        <span
          class="block truncate text-xs font-medium leading-5 transition-all duration-200"
          :class="
            item.path === route.path || (item.name === EnumMenuName.RECORD && recordStore.isShowRecord)
              ? 'font-semibold'
              : 'group-hover:font-medium'
          "
        >
          {{ item.name }}
        </span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { useRecordStore } from '@/stores/recordStore';
  import { EnumMenuName, EnumRouteName } from '~/assets/types/index';

  const route = useRoute();
  const router = useRouter();
  const recordStore = useRecordStore();

  interface IMenuButtonItem {
    name: string;
    path: string;
    className: string;
  }

  const menuButtons = ref<IMenuButtonItem[]>([
    {
      name: EnumMenuName.CALENDAR,
      path: EnumRouteName.CALENDAR,
      className: 'icon-home',
    },
    {
      name: EnumMenuName.OVERVIEW,
      path: EnumRouteName.OVERVIEW,
      className: 'icon-overview',
    },
    {
      name: EnumMenuName.RECORD,
      path: '',
      className: 'icon-record',
    },
    {
      name: EnumMenuName.ANALYSIS,
      path: EnumRouteName.ANALYSIS,
      className: 'icon-analysis',
    },
  ]);

  const handleClick = (payload: IMenuButtonItem): void => {
    if (payload.name === EnumMenuName.RECORD) {
      recordStore.HANDLE_MODE_CREATOR();
    } else {
      router.push(payload.path);
    }
  };
</script>

<style lang="scss" scoped>
  .icon-home::before {
    content: '\ebcc';
  }

  .icon-overview::before {
    content: '\e7fd';
  }

  .icon-record::before {
    content: '\e145';
  }

  .icon-analysis::before {
    content: '\e26b';
  }
</style>
