<template>
  <div :style="style">
    <!-- 这里的 v-bind 绑定attrs 将外部传入的属性绑定到 slot 对应的组件上 -->
    <slot v-bind="metdata.attrs" />
  </div>
</template>

<script setup lang="ts">
  import type { StyleValue } from 'vue'
  import { metdata, proyxEl } from '~/utils/Float'

  // 方法一
  // vueuse 提供的方法去监听 proxyEl 的变化，然后更新 rect
  let rect = ref(useElementBounding(proyxEl))

  const style = computed((): StyleValue => ({
    transition: 'all .2s ease-in-out',
    position: 'fixed',
    top: `${rect.value?.top || 0}px`,
    left: `${rect.value?.left || 0}px`
  }))

  // 方法二：
  // let rect = ref<DOMRect | undefined>()

  // const update = () => {
  //   rect.value = proyxEl.value?.getBoundingClientRect()
  // }
  // update()

  // // 在 document 上绑定监听事件
  // useMutationObserver(proyxEl, update, {
  //   childList: true,
  //   subtree: true,
  //   attributes: true,
  //   characterData: true
  // })

  // // 监听 resize 事件
  // useEventListener('resize', update)

  // const style = computed((): StyleValue => ({
  //   transition: 'all .2s ease-in-out',
  //   position: 'fixed',
  //   top: `${rect.value?.top || 0}px`,
  //   left: `${rect.value?.left || 0}px`
  // }))
</script>
