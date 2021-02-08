import Vuex from 'vuex'
import Vue from 'vue'
import post from './modules/post.js'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        post
    }
})