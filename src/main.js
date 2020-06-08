import Vue from 'vue';
import App from './App.vue'

import store from './store/index';


new Vue({
    store,
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
})
let linsanxin = 1;
console.log(linsanxin)