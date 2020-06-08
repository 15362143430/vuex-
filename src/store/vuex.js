let Vue;

const install = (v) => {
    console.log(v)
    Vue = v;
    Vue.mixin({
        beforeCreate() {
            if (this.$options && this.$options.store) {
                // root
                this.$store = this.$options.store;
            } else {
                this.$store = this.$parent && this.$parent.$store;
            }
            console.log(this.$store);
        },
    })
}

class Store {
    constructor(options) {
        this.vm = new Vue({
            data: {
                state: options.state
            }
        });

        let getters = options.getters || {};
        this.getters = {};
        console.log(Object.keys(this.getters))
        Object.keys(getters).forEach(getterName => {
            Object.defineProperty(this.getters, getterName, {
                get: () => {
                    return getters[getterName](this.state);
                }
            })
        })

        let mutations = options.mutations || {};
        this.mutations = {};
        Object.keys(mutations).forEach(mutationName => {
            this.mutations[mutationName] = payload => {
                mutations[mutationName](this.state, payload);
            }
        })

        let actions = options.actions || {};
        this.actions = {};
        Object.keys(actions).forEach(actionName => {
            this.actions[actionName] = payload => {
                actions[actionName](this.state, payload);
            }
        })
    }
    get state() {
        return this.vm.state;
    }
    commit(name, payload) {
        this.mutations[name](payload);
    }
    dispatch(name, payload) {
        this.actions[name](payload);
    }
}

export default {
    install,
    Store
}