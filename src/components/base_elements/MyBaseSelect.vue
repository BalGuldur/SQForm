<template>
  <select v-model="internalValue">
    <template v-if="simpleStrings">
      <option
        v-for="item in items"
        :key="item"
        :value="item">
        {{ item }}
      </option>
    </template>
    <template v-else>
      <option
        v-for="item in items"
        :key="item[fieldOptionValue]"
        :value="item[fieldOptionValue]">
        {{ item[fieldOptionTitle] }}
      </option>
    </template>
  </select>
</template>

<script>
export default {
  props: {
    // Объекты для отображения в опциях
    // TODO: Добавить возможность работы с Array of Objects
    items: {
      type: Object,
      required: true
    },
    // Название ключа в item для подстановки в value options
    fieldOptionValue: {
      type: String,
      default: 'id'
    },
    // Название ключа в item для подстановки в наименование опции
    fieldOptionTitle: {
      type: String,
      default: 'title'
    },
    simpleStrings: {
      type: Boolean,
      default: false
    },
    // Выбранное значение
    value: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    internalValue: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>
