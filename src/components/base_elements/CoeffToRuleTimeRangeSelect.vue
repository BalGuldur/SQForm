<template>
  <div>
    <MyBaseSelect
      :items="coeffTables"
      :value="''"
      placeholder="test"
      @input="changeCoeffTable"/>
    <TimeRangeSelect
      :value="''"
      @input="changeTimeRange"/>
  </div>
</template>

<script>
import MyBaseSelect from '@/components/base_elements/MyBaseSelect'
import TimeRangeSelect from '@/components/base_elements/TimeRangeSelect'

import { mapGetters } from 'vuex'

export default {
  components: { MyBaseSelect, TimeRangeSelect },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({coeffTables: 'coefficientTables/data'})
  },
  methods: {
    emitChangeValue ({coefficientTableId, timeRange}) {
      const newValue = this.value
      coefficientTableId && (newValue['coefficient_table_id'] = coefficientTableId)
      timeRange && (newValue['timeRange'] = timeRange)
      console.log(newValue)
      this.$emit('input', newValue)
    },
    changeCoeffTable (id) {
      this.emitChangeValue({coefficientTableId: parseInt(id)})
    },
    changeTimeRange (timeRange) {
      this.emitChangeValue({timeRange})
    }
  }
}
</script>
