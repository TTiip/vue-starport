import { creatFloating } from './Float'
import TheImageVue from '~/components/TheImage.vue'

const {
  container: TheImageContainer,
  proxy: TheImageProxy
} = creatFloating(TheImageVue)

export {
  TheImageContainer,
  TheImageProxy
}
