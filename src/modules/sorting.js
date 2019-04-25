const types = {
  SET_ACTIVE_SORT_TYPE: 'SET_ACTIVE_SORT_TYPE',
}

const state = {
  sortType: { id: 0, title: 'Off', key: 'off' },
  sortDirection: false,
  sortItems: [
    { id: 0, title: 'Off', key: 'off', },
    { id: 1, title: 'Title', key: 'title' },
    { id: 2, title: 'Status', key: 'completed' },
  ],
}

const getters = {
  getSortType(state) {
    return state.sortType
  },
  getSortItems(state) {
    return state.sortItems
  },
  getSortDirection(state) {
    return state.sortDirection
  },
}

const mutations = {
  [types.SET_ACTIVE_SORT_TYPE](state, { type } ) {
    if (state.sortType === type) {
      state.sortDirection = !state.sortDirection
    }
    state.sortType = type
  },
}

const actions = {
  setActiveSortType({ commit }, { type }) {
    commit(types.SET_ACTIVE_SORT_TYPE, { type })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
