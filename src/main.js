import { createApp } from 'vue'
import { createStore, storeSymbol } from './store'
import App from './components/App.vue'

createApp(App)
    .provide(storeSymbol, createStore())
    .mount('.whole-document')
