const state = {
  data: {
    // Stub data, need fetch Action for fetch data from api
    1: {
      id: 1,
      game_id: 1,
      geo: ['US', 'RU'],
      devices: ['phone'],
      channels: ['AppleSource'],
      rule_to_coefficient_time_range_ids: [1, 2]
    },
    2: {
      id: 2,
      game_id: 1,
      geo: ['US'],
      devices: ['tablet'],
      channels: ['TopLift'],
      rule_to_coefficient_time_range_ids: [3]
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
