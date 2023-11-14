import { createApp } from 'vue'
import Loading from '@/loading/index.vue'

const relativeClsss = 'g-relative'

export default {
  name: 'myLoading',
  mounted(el, binding) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    console.log('instance: ', instance.$el)
    const name = Loading.name
    if (!el[name]) {
      el[name] = {}
    }
    el[name].instance = instance
    if (binding.value) {
      append(el)
    }
  },
  updated(el, binding) {
    const name = Loading.name
    if (!el[name]) {
      el[name] = {}
    }
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  },
}
function append(el) {
  const style = getComputedStyle(el)
  const name = Loading.name
  if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
    if (!el.classList.contains(relativeClsss)) {
      el.classList.add(relativeClsss)
    }
  }
  el.appendChild(el[name].instance.$el)
}
function remove(el) {
  const name = Loading.name
  el.classList.remove(relativeClsss)
  el.removeChild(el[name].instance.$el)
}
