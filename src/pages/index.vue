<template>
  <div>
    <div>Index</div>
    <RouterLink m-3 text-sm btn to="/Foo">
      goToFoo
    </RouterLink>
    <button m-3 text-sm btn @click="toggle">
      toggle
    </button>
    <!-- <FloatProxy :class="mode ? 'w-30 h-30' : 'w-60 h-30'" rounded-xl /> -->
    <TheImageProxy :class="mode ? 'w-30 h-30' : 'w-60 h-30'" rounded-xl />
  </div>
</template>

<script setup lang="ts">
  import type { Ref } from 'vue'
  import { TheImageProxy } from '~/utils/image'
  const mode: Ref<boolean> = useStorage('mode', true)
  const toggle: any = useToggle(mode)
</script>
