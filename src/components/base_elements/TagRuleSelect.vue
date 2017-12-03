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
    value: {
      type: Object,
      required: true
    },
    items: {
      type: [Object, Array],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    }
  },
  methods: {
    emitNewValue ({condition, values}) {
      condition = condition || this.value.condition
      values = values || this.value.values
      const rule = { condition, values }
      this.$emit('input', rule)
    },
    changeCondition () {
      switch (this.value.condition) {
        case '=':
          this.emitNewValue({condition: '!='})
          break
        case '!=':
          this.emitNewValue({condition: '='})
      }
    },
    changeValues (newValues) {
      this.emitNewValue({values: newValues})
    }
  }
}
</script>
