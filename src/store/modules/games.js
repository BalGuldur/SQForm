import { games } from '@/stubs'

const state = {
  // Stub data, need fetch Action for fetch data from api
  data: games
}

const getters = {
  data: state => state.data
}

const actions = {
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
