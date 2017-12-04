<template>
  <span>
    <input
      type="date"
      :value="fromDate"
      @input="changeFromDate">
    </input>
    <span>-</span>
    <input
      type="date"
      :value="toDate"
      @input="changeToDate">
    </input>
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    // левая часть timeRange(передается в виде строки)
    fromDate () {
      // Возвращаем пустую строку если value не задан или пустая строка
      return (this.value && this.value === '') ? '' : this.value.split('...')[0]
    },
    // правая часть timeRange(передается в виде строки)
    toDate () {
      // Возвращаем пустую строку если value не задан или пустая строка
      return (this.value && this.value === '') ? '' : this.value.split('...')[1]
    }
  },
  methods: {
    // Возврат в parent измененного значения
    emitChangeValue ({ fromDate, toDate }) {
      // TODO: Добавить проверку fromDate < toDate
      // Если параметр передан то используем его, если нет, то значение из value (исходное)
      fromDate = fromDate || this.fromDate
      // Если параметр передан то используем его, если нет, то значение из value (исходное)
      toDate = toDate || this.toDate
      this.$emit('input', fromDate + '...' + toDate)
    },
    // Изменение fromDate (вызываем emit с параметром fromDate)
    changeFromDate (e) {
      this.emitChangeValue({ fromDate: e.target.value })
    },
    // Изменение toDate (вызываем emit с параметром toDate)
    changeToDate (e) {
      this.emitChangeValue({ toDate: e.target.value })
    }
  }
}
</script>
