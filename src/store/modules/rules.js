// TODO: Add test action
const state = {
  data: {}
}

const getters = {
  data: state => state.data
}

const actions = {
  fetchRules ({dispatch}) {
    dispatch('api/fetchModel', { link: '/rules' }, { root: true })
  },
  addRule ({dispatch}, item) {
    dispatch('api/addModelItem', { link: '/rules', item }, { root: true })
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
