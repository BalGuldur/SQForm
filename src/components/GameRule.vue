<template>
  <div>
    <span
      v-for="geo in rule.geo"
      :key="geo">
      {{ geo }}
    </span>
    <br>
    <span
      v-for="device in rule.devices"
      :key="device">
      {{ device }}
    </span>
    <br>
    <span
      v-for="channel in rule.channels"
      :key="channel">
      {{ channel }}
    </span>
    <br>
    <CoefficientTimeRange
      v-for="coefficientTimeRange in ownCoefficientsTimeRanges"
      :key="coefficientTimeRange.id"
      :coefficient-time-range="coefficientTimeRange"/>
    <br>
  </div>
</template>

<script>
import CoefficientTimeRange from './CoefficientTimeRange'

import { mapGetters } from 'vuex'

export default {
  components: { CoefficientTimeRange },
  props: {
    rule: {
      type: Object,
      required: true
    }
  },
  computed: {
    ownCoefficientsTimeRanges () {
      return this.rule.rule_to_coefficient_time_range_ids.map(itemId => this.ruleToCoefficients[itemId])
    },
    ...mapGetters({ruleToCoefficients: 'ruleToCoefficientTimeRanges/data'})
  }
}
</script>
