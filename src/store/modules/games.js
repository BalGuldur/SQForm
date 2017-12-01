const state = {
  data: {
    // Stub data, need fetch Action for fetch data from api
    1: {
      id: 1,
      rule_ids: [1, 2],
      title: 'IceAge'
    },
    2: {
      id: 2,
      rule_ids: [],
      title: 'AppJoy'
    }
  }
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
