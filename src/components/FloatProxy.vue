<template>
  <div>Proxy</div>
</template>

<script setup lang="ts">
  import { metdata } from '~/utils/Float'
  const props = defineProps<{
    modelValue?: boolean
    testValue?: string
  }>()

  const attrs = useAttrs()

  metdata.props = props
  metdata.attrs = attrs
</script>

<script lang="ts">
  // 重要将上层传递下来的 attrs 在本组件不继承 避免样式影响这个代理组件。
  export default {
    inheritAttrs: false
  }
</script>
