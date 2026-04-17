<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="props.isOpen"
        class="modal-animation fixed left-0 top-0 z-popup flex h-full w-full items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
        @click.stop="emits('close')"
      >
        <div
          class="max-h-popup w-popup max-w-popup overflow-hidden rounded-3xl shadow-2xl shadow-black/50"
          @click.stop=""
        >
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
  const emits = defineEmits<{ (e: 'close'): void }>();

  const props = defineProps<{ isOpen: boolean }>();
</script>
