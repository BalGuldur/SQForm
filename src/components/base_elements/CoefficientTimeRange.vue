<template>
  <div>
    <span>{{ ownCoefficientTable.title }}</span>
    <span>{{ coefficientTimeRange.timeRange }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    coefficientTimeRange: {
      type: Object,
      required: true
    }
  },
  computed: {
    // Возвращает таблицу коэффициентов данного coefficient_time_range
    ownCoefficientTable () {
      return this.coefficientTables[this.coefficientTimeRange.coefficient_table_id]
    },
    ...mapGetters({coefficientTables: 'coefficientTables/data'})
  }
}
</script>
