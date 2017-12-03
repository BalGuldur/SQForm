<template>
  <select
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
    changeValue (e) {
      if (this.multiSelect) {
        const optionsKeys = Object.keys(e.target.options)
          .filter(key => key !== 'length' || key !== 'selectedIndex')
        const options = optionsKeys.map(key => e.target.options[key])
        const choosedOptions = options.filter(option => option.selected)
        const value = choosedOptions.map(option => option.value)
        this.$emit('input', value)
      } else {
        this.$emit('input', e.target.value)
      }
    }
  }
}
</script>
