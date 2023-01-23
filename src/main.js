import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from "axios";

Vue.config.productionTip = false

axios.get(`https://ivm108.informatik.htw-dresden.de/ewa/g17/php-backend/read.php`)
    .then(response => {
        store.commit('products/setProducts', response.data)
        new Vue({
            store,
            vuetify,
            router,
            render: h => h(App)
        }).$mount('#app')

    })


