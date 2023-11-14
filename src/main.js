import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import directive from './plugin/directive/index.js'

createApp(App).use(directive).mount('#app')
