// TODO: Add test actions
const state = {
  data: {}
}

const getters = {
  data: state => state.data
}

const actions = {
  fetchGames ({dispatch}) {
    dispatch('api/fetchModel', { link: '/games' }, { root: true })
  }
}

const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
