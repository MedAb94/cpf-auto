import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import auth from "@/store/modules/auth";
import parts from "@/store/modules/parts";
export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        parts
    }
})
