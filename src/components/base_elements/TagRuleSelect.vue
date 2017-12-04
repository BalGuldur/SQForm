<template>
  <div>
    <span class="tagTitle">{{ title }}</span>
    <span
      class="tagCondition"
      style="color: blue; text-decoration: underline;"
      @click="changeCondition">
      {{ value.condition }}
    </span>
    <MyBaseSelect
      :items="items"
      :value="value.values"
      @input="changeValues"
      multi-select/>
  </div>
</template>

<script>
import MyBaseSelect from '@/components/base_elements/MyBaseSelect'

export default {
  components: { MyBaseSelect },
  props: {
    // значени в виде {condition: String, values: Array}
    // при изменении происходит emit('input'), в parent использовать v-model или @input
    value: {
      type: Object,
      required: true
    },
    // Возможные опции для выбора
    items: {
      type: [Object, Array],
      required: true
    },
    // Название тэга
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    // Эмит изменения value в виде {condition: String, values: Array}
    emitNewValue ({condition, values}) {
      // Если параметр передан то используем его, если нет, то значение из value (исходное)
      condition = condition || this.value.condition
      // Если параметр передан то используем его, если нет, то значение из value (исходное)
      values = values || this.value.values
      this.$emit('input', { condition, values })
    },
    // Переключаем значение condition, вызывая emitNewValue с новым condition
    changeCondition () {
      switch (this.value.condition) {
        case '=':
          this.emitNewValue({condition: '!='})
          break
        case '!=':
          this.emitNewValue({condition: '='})
      }
    },
    // Вызываем emitNewValue при изменении выбора в multiSelect
    changeValues (newValues) {
      this.emitNewValue({values: newValues})
    }
  }
}
</script>
