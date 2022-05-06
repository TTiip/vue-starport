// 公用组件状态存储对应的组件的状态
const metdata = reactive({
  props: {},
  attrs: {}
})

const proyxEl = ref<HTMLElement | null>()

export {
  metdata,
  proyxEl
}
