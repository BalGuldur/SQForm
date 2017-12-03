export const coefficientTables = {
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

export const games = {
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

export const rules = {
  1: {
    id: 1,
    game_id: 1,
    geo: { condition: '!=', values: ['US', 'RU'] },
    devices: { condition: '=', values: ['phone'] },
    channels: { condition: '!=', values: ['AppleSource'] },
    rule_to_coefficient_time_range_ids: [1, 2]
  },
  2: {
    id: 2,
    game_id: 1,
    geo: { condition: '=', values: ['US'] },
    devices: { condition: '=', values: ['tablet'] },
    channels: {},
    rule_to_coefficient_time_range_ids: [3]
  }
}

export const ruleToCoefficientTimeRanges = {
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

export const geoValues = ['US', 'RU', 'AU']

export const deviceTypeValues = ['phone', 'tablet', 'desktop']

export const channelValues = ['AppleSource', 'TopLift']
