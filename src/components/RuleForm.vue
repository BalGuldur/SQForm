<template>
  <div v-if="isOpen">
    <div>Форма создания/редактирования правил</div>
    <GameSelect v-model.number="game_id"/>
    <br>
    <TagRuleSelect
      title="geo"
      :items="stub.geo"
      simple-strings/>
    <TagRuleSelect
      title="device_type"
      :items="stub.device_type"
      simple-strings/>
    <TagRuleSelect
      title="channel"
      :items="stub.channel"
      simple-strings/>
    <button @click="submit">Сохранить</button>
    <button @click="cancel">Отмена</button>
  </div>
</template>

<script>
import TagRuleSelect from '@/components/base_elements/TagRuleSelect'

export default {
  components: { TagRuleSelect },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      game_id: '',
      // TODO: Хардкод значений, заменить
      stub: {
        geo: ['RU', 'US', 'AU'],
        device_type: ['phone', 'tablet', 'desktop'],
        channel: ['AppleSource', 'TopLift']
      }
    }
  },
  computed: {
    isOpen: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  },
  methods: {
    submit () {
      console.log('submit')
    },
    cancel () {
      console.log('cancel')
      this.isOpen = false
    }
  }
}
</script>
