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
    value: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters({games: 'games/data'})
  },
  methods: {
    changeValue (newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>
