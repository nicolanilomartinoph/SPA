require('./bootstrap');
import Vue from 'vue'
import router from './router'
import Vuelidate from "vuelidate";

window.Vue = require('vue');

// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('passport-clients', require('./components/passport/Clients.vue').default);
Vue.component('passport-authorized-clients', require('./components/passport/AuthorizedClients.vue').default);
Vue.component('passport-personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue').default);

Vue.use(Vuelidate);

const app = new Vue({
    el: '#app',
    router,
    template:
        `<div class="container">
            <router-view></router-view>
        </div>`
});

// Encryption keys generated successfully.
// Personal access client created successfully.
// Client ID: 1
// Client secret: shHSZr8W0ONXWGxl1QnUvOEOXtK0qyH3c9Wqc1z8
// Password grant client created successfully.
// Client ID: 2
// Client secret: AScL1RHyLLebHzQp8LAC7DoD7bkv6gvMefWdjelV