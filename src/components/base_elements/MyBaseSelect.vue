<template>
  <select
    ref="select"
    @input="changeValue"
    :value="value"
    :multiple="multiSelect">
    <template v-if="arrayOfSimpleValues">
      <option
        v-for="item in items"
        :key="item"
        :value="item"
        :selected="value.includes(item)">
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
      type: [Object, Array],
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
    // Выбранное значение
    value: {
      type: [Number, String, Array],
      required: true
    },
    // Возможность мультиселекта
    multiSelect: {
      type: Boolean,
      default: false
    },
    // TODO: Реализовать вывод placeholder
    placeholder: {
      type: String,
      default: ''
    }
  },
  computed: {
    // Определение типа переданных item, для генерации option из объектов или просто значений
    arrayOfSimpleValues () {
      const firstItem = this.items[Object.keys(this.items || {})[0]]
      if (typeof firstItem === 'object') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    // Изменение значения
    changeValue (e) {
      if (this.multiSelect) {
        // Если используется multiSelect
        // Выбираем все id options из HTMLOptions
        const optionsKeys = Object.keys(e.target.options)
          .filter(key => key !== 'length' || key !== 'selectedIndex')
        // Выбираем все options по id
        const options = optionsKeys.map(key => e.target.options[key])
        // Фильтруем только выбранные опции
        const choosedOptions = options.filter(option => option.selected)
        // Выбираем значения выбранных опций
        const values = choosedOptions.map(option => option.value)
        // Эмитим значения выбранных опций
        this.$emit('input', values)
      } else {
        // Если не используется multiSelect
        // Эмитим новое значение
        this.$emit('input', e.target.value)
      }
    }
  }
}
</script>
