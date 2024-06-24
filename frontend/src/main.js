import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@/assets/css/admin_style.css'
import '@/assets/css/carousel.css'
import '@/assets/css/style.css'
import '@/assets/css/base.css'

const app = createApp(App)
const title = 'SICNU CMS'
app.use(router)

app.mount('#app')
