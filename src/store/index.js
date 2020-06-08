import Vue from 'vue';
import vuex from './vuex';
Vue.use(vuex);


export default new vuex.Store({
    state: {
        num: 1
    },
    getters: {
        getNum(state) {
            return state.num * 2;
        }
    },
    mutations: { in (state, payload) {
            state.num += payload;
        },
        de(state, payload) {
            state.num -= payload;
        }
    },
    actions: { in (state, payload) {
            setTimeout(() => {
                state.num += payload;
            }, 2000)
        }
    }
})