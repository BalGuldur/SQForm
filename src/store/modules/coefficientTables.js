const state = {
  data: {
    // Stub data, need fetch Action for fetch data from api
    1: {
      id: 1,
      rule_to_coefficient_time_range_ids: [1, 2],
      title: 'Таблица-1'
    },
    2: {
      id: 2,
      rule_to_coefficient_time_range_ids: [3],
      title: 'Таблица-2'
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
