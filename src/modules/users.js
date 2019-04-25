const types = {
  SET_ACTIVE_USER_ID: 'SET_ACTIVE_USER_ID',
}

const state = {
  prefixUser: 'Collection',
  activeUserId: 0,
}

const getters = {
  getActiveUserId(state) {
    return state.activeUserId
  },
  getUsers(state, getters, rootState, rootGetters) {
    const tasks = rootGetters['tasks/getAllTasks']
    const uniqTreeIds = {
      0: {
        userId: 0,
        title: 'All',
      },
    }

    tasks.forEach((task) => {
      if (!uniqTreeIds[task.userId]) {
        uniqTreeIds[task.userId] = {
          userId: task.userId,
          title: `${state.prefixUser} - ${task.userId}`
        }
      }
    })

    return uniqTreeIds
  },
}

const mutations = {
  [types.SET_ACTIVE_USER_ID](state, { id } ) {
    state.activeUserId = id
  },
}

const actions = {
  setActiveUserId({ commit }, { id }) {
    commit(types.SET_ACTIVE_USER_ID, { id })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
