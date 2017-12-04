<template>
  <div>
    <MyBaseSelect
      :items="coeffTables"
      :value="value.coefficient_table_id"
      placeholder="test"
      @input="changeCoeffTable"/>
    <TimeRangeSelect
      :value="value.timeRange"
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
    // Эмит изменения value в виде {coefficientTableId: Number, timeRange: String}
    emitChangeValue ({coefficientTableId, timeRange}) {
      const newValue = this.value
      // Если параметр передан то используем его, если нет, то значение из value (исходное)
      coefficientTableId && (newValue['coefficient_table_id'] = coefficientTableId)
      // Если параметр передан то используем его, если нет, то значение из value (исходное)
      timeRange && (newValue['timeRange'] = timeRange)
      this.$emit('input', newValue)
    },
    // При изменении таблицы коэффициентов вызываем эмит нового значения с параметром таблицы коэфф.
    changeCoeffTable (id) {
      this.emitChangeValue({coefficientTableId: parseInt(id)})
    },
    // При изменении dataRange вызываем эмит нового значения с параметром нового timeRange
    changeTimeRange (timeRange) {
      this.emitChangeValue({timeRange})
    }
  }
}
</script>
