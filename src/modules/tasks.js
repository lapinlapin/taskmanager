import axios from 'axios'
import { URL } from '@/confApi'
import ls from 'local-storage';

const sortData = (sortType, sortDirection, prev, next) => {
  if (sortType.key === 'completed') {
    return sortDirection ? next[sortType.key] - prev[sortType.key] : prev[sortType.key] - next[sortType.key]
  } else {
    return sortDirection ? next[sortType.key] - prev[sortType.key] || next[sortType.key].localeCompare(prev[sortType.key]) : prev[sortType.key] - next[sortType.key] || prev[sortType.key].localeCompare(next[sortType.key])
  }
}

const types = {
  UPDATE_TASKS_DATA: 'UPDATE_TASKS_DATA',
  UPDATE_TASKS_COUNT_TO_SHOW: 'UPDATE_TASKS_COUNT_TO_SHOW',
  UPDATE_LAST_UPDATE: 'UPDATE_LAST_UPDATE',
}

const state = {
  tasksCountToShowDefault: 5,
  tasksCountToShow: 5,
  tasksCountStepToShow: 6,

  tasks: [],
  lastUpdate: '...',
}

const getters = {
  getActiveProgress(state) {
    return state.activeProgress
  },
  getSuccessFlag(state) {
    return state.successFlag
  },
  getAllTasks(state, getters, rootState, rootGetters) {
    const sortType = rootGetters['sorting/getSortType']
    const sortDirection = rootGetters['sorting/getSortDirection']

    if (sortType.key === 'off') {
      return state.tasks
    }
    return state.tasks.sort((prev, next) => sortData(sortType, sortDirection, prev, next))
  },
  getFilteredTasks(state, getters, rootState, rootGetters) {
    const activeUserId = rootGetters['users/getActiveUserId']
    const sortType = rootGetters['sorting/getSortType']
    const sortDirection = rootGetters['sorting/getSortDirection']

    if (!activeUserId) {
      return state.tasks.slice(0, state.tasksCountToShow)
    } else {
      if (sortType.key === 'off') {
        return state.tasks.filter(task => task.userId === activeUserId).slice(0, state.tasksCountToShow)
      }

      return state.tasks
        .filter(task => task.userId === activeUserId)
        .slice(0, state.tasksCountToShow)
        .sort((prev, next) => sortData(sortType, sortDirection, prev, next))
    }
  },
  getTasksCountToShow(state) {
    return state.tasksCountToShow
  },
  getLastUpdate(state) {
    return state.lastUpdate
  },
}

const mutations = {
  [types.UPDATE_TASKS_DATA](state, { newItems }) {
    state.tasks = newItems
  },
  [types.UPDATE_TASKS_COUNT_TO_SHOW](state, { count }) {
    state.tasksCountToShow = count
  },
  [types.UPDATE_LAST_UPDATE](state) {
    const now = new Date()

    return state.lastUpdate = `${now.toLocaleDateString()}, ${now.toLocaleTimeString()}`
  }
}

const actions = {
  async loadTasks({ commit }, params) {
    await axios.get(`${URL}todos`).then(res => {
      if (res) {
        if (res.data) {
          commit(types.UPDATE_TASKS_DATA, { newItems: res.data })
          commit(types.UPDATE_LAST_UPDATE)
          ls.set('manager:tasks', res.data)
        }
      }
    }, err => {
    })
  },
  updateTaskCoutToShow({ commit, state }, isReset) {
    if (isReset) {
      commit(types.UPDATE_TASKS_COUNT_TO_SHOW, { count: state.tasksCountToShowDefault })
      return
    }
    commit(types.UPDATE_TASKS_COUNT_TO_SHOW, { count: state.tasksCountToShow + state.tasksCountStepToShow })
  },
  updateTasksData({ state, commit }, { newItems }) {
    commit(types.UPDATE_TASKS_DATA, { newItems } )
  },
  setLastTasksUpdate({ commit }) {
    commit(types.UPDATE_LAST_UPDATE)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
