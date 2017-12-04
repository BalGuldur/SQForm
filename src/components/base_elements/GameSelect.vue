<template>
  <MyBaseSelect
    :value="value"
    :items="games"
    @input="changeValue"/>
</template>

<script>
import MyBaseSelect from '@/components/base_elements/MyBaseSelect'

import { mapGetters } from 'vuex'

export default {
  components: { MyBaseSelect },
  props: {
    // Выбранный id игры, в parent использовать v-model или @input
    value: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters({games: 'games/data'})
  },
  methods: {
    // Вызывается при выборе в select, эмитит новое значение в parent
    changeValue (newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>
