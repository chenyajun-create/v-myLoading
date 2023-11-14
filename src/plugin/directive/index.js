import loadingDirective from '@/plugin/directive/loading/index.js'
import testDirective from '@/plugin/directive/test/index.js'

const directiveList = [loadingDirective, testDirective]
export default {
  install: (app) => {
    directiveList.forEach((component) => {
      app.directive(component.name, component)
    })
  },
}
