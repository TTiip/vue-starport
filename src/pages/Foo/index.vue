<template>
  <div flex="~ col" items-center>
    <div>Foo</div>
    <div flex="~">
      <RouterLink to="/" m-3 text-sm btn>
        Back
      </RouterLink>
      <button m-3 text-sm btn @click="lagerHandler">
        large
      </button>
      <button m-3 text-sm btn @click="resetHandler">
        reset
      </button>
    </div>
    <div m-20 flex="~ col sm:row gap-4" items-center>
      <!-- <FloatProxy :style="{width: `${size}px`, height: `${size}px`}" w-100 h-100 rounded="1/2" /> -->
      <TheImageProxy :style="{width: `${size}px`, height: `${size}px`}" w-100 h-100 rounded="1/2" />
      <p flex-1>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Ref } from 'vue'
  import { TheImageProxy } from '~/utils/image'
  let size: Ref<number> = ref(useStorage('size', 200))
  const lagerHandler = () => {
    size.value += 20
  }
  const resetHandler = () => {
    size.value = 100
  }

</script>
