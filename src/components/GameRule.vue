<template>
  <div>
    <TagRule
      v-for="tag in ['geo', 'devices', 'channels']"
      v-if="Object.keys(rule[tag] || {}).length"
      :key="tag"
      :title="tag"
      :condition="rule[tag].condition"
      :values="rule[tag].values"/>
    <CoefficientTimeRange
      v-for="coefficientTimeRange in ownCoefficientsTimeRanges"
      :key="coefficientTimeRange.id"
      :coefficient-time-range="coefficientTimeRange"/>
    <br>
  </div>
</template>

<script>
import CoefficientTimeRange from '@/components/base_elements/CoefficientTimeRange'
import TagRule from '@/components/base_elements/TagRule'

import { mapGetters } from 'vuex'

export default {
  components: { CoefficientTimeRange, TagRule },
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
