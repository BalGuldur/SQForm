<template>
  <div>
    <span>{{ title }}</span>
    <span @click="changeCondition">{{ condition }}</span>
    <MyBaseSelect
      :items="items"
      :field-option-title="fieldOptionTitle"
      :field-option-value="fieldOptionValue"
      v-model="value"
      :simple-strings="simpleStrings"/>
  </div>
</template>

<script>
import MyBaseSelect from '@/components/base_elements/MyBaseSelect'

export default {
  components: { MyBaseSelect },
  props: {
    items: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    condition: {
      type: String,
      default: '='
    },
    fieldOptionTitle: {
      type: String,
      default: 'title'
    },
    fieldOptionValue: {
      type: String,
      default: 'id'
    },
    simpleStrings: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeCondition () {
      switch (this.condition) {
        case '=':
          this.condition = '!='
          break
        case '!=':
          this.condition = '='
      }
    }
  }
}
</script>
