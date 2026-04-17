<template>
  <button
    class="block min-w-[120px] max-w-full truncate rounded-xl bg-gradient-primary px-4 py-2.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
  >
    <slot />
  </button>
</template>

<script setup lang="ts"></script>
