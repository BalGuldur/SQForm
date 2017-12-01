const state = {
  data: {
    // Stub data, need fetch Action for fetch data from api
    1: {
      id: 1,
      rule_id: 1,
      coefficient_table_id: 1,
      timeRange: 'stub'
    },
    2: {
      id: 2,
      rule_id: 1,
      coefficient_table_id: 1,
      timeRange: 'stub2'
    },
    3: {
      id: 3,
      rule_id: 2,
      coefficient_table_id: 2,
      timeRange: 'stub3'
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
