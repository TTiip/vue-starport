import type { Component, StyleValue } from 'vue'
import { h } from 'vue'

// 第一种使用 .vue 文件 生成实例的方法。
// 公用组件状态存储对应的组件的状态
const metadata = reactive({
  props: {},
  attrs: {}
})

const proyxEl = ref<HTMLElement | null>()

// 第二种使用 Hooks 生成实例的方法。
// 封装统一的 Hooks
function creatFloating<T extends Component> (component: T) {
  const metadata = reactive({
    props: {},
    attrs: {}
  })

  const proyxEl = ref<HTMLElement | null>()

  const container = defineComponent({
    setup (props, { slots }) {
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

      // 参数分别为 h(元素 或 组件， props 或 attrs， children 或 slots)
      // 直接传入 component 就报错，使用 component as any 解决
      return () => h('div', { style: style.value }, [h(component as any, { ...metadata.props, ...metadata.attrs }, slots.default)])
    }
  })

  const proxy = defineComponent({
    setup (props, { slots }) {
      const attrs = useAttrs()
      const el = ref<HTMLElement | null>()

      metadata.props = props
      metadata.attrs = attrs

      // 组件挂载的时候，设置 proxyEl
      onMounted(() => {
        proyxEl.value = el.value
      })

      return () => h('div', { ref: el }, slots.default)
      // [
      //   slots.default
      //     ? h(slots.default)
      //     : null
      // ]
      // [slots.default ? h(slots.default) : null]
    }
  })

  return {
    container,
    proxy
  }
}

export {
  metadata,
  proyxEl,
  creatFloating
}
