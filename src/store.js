import Vue from 'vue'
import Vuex from 'vuex'
import tasks from '@/modules/tasks'
import users from '@/modules/users'
import sorting from '@/modules/sorting'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tasks,
    users,
    sorting,
  },
})
