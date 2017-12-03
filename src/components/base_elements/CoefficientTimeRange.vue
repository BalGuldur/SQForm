<template>
  <div>
    <span>{{ coefficientTable.title }}</span>
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
    coefficientTable () {
      return this.coefficientTables[this.coefficientTimeRange.coefficient_table_id]
    },
    ...mapGetters({coefficientTables: 'coefficientTables/data'})
  }
}
</script>
