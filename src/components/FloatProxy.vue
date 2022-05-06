<template>
  <div ref="el" />
</template>

<script setup lang="ts">
  import { metadata, proyxEl } from '~/utils/Float'
  const props = defineProps<{
    modelValue?: boolean
    testValue?: string
  }>()

  const attrs = useAttrs()
  const el = ref<HTMLElement | null>()

  metadata.props = props
  metadata.attrs = attrs

  // 组件挂载的时候，设置 proxyEl
  onMounted(() => {
    proyxEl.value = el.value
  })
</script>

<!-- <script lang="ts">
  // 将上层传递下来的 attrs 在本组件不继承 避免样式影响这个代理组件。
  export default {
    inheritAttrs: false
  }
</script> -->
