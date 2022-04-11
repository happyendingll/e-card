import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import axios from 'axios'
import 'normalize.css'


createApp(App).use(store).use(router).use(Avue, {axios}).mount('#app')
