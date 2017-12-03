<template>
  <div
    class="ruleFrom"
    v-if="isOpen">
    <div class="ruleFrom">Форма создания/редактирования правил</div>
    <GameSelect v-model.number="rule.game_id"/>
    <br>
    <TagRuleSelect
      v-for="tag in ['geo', 'device_type', 'channel']"
      :key="tag"
      :title="tag"
      :tag="tag"
      :items="stubs[tag]"
      v-model="rule[tag]"/>
    <CoeffToRuleTimeRangeSelect
      v-for="ruleToCoeff in ruleToCoefficientTimeRanges"
      :key="ruleToCoeff.id"
      v-model="ruleToCoefficientTimeRanges[ruleToCoeff.id]"/>
    <button
      class="addCoeffToRuleTimeRange"
      @click="addCoeffToRule">
      Добавить период
    </button>
    <br>
    <button @click="submit">Сохранить</button>
    <button @click="cancel">Отмена</button>
  </div>
</template>

<script>
import GameSelect from '@/components/base_elements/GameSelect'
import TagRuleSelect from '@/components/base_elements/TagRuleSelect'
import CoeffToRuleTimeRangeSelect from '@/components/base_elements/CoeffToRuleTimeRangeSelect'

import { geoValues, deviceTypeValues, channelValues } from '@/stubs'

import { mapGetters } from 'vuex'

export default {
  components: { GameSelect, TagRuleSelect, CoeffToRuleTimeRangeSelect },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      rule: {
        game_id: '',
        geo: { condition: '=', values: [] },
        device_type: { condition: '=', values: [] },
        channel: { condition: '=', values: [] }
      },
      ruleToCoefficientTimeRanges: {},
      // TODO: Хардкод значений, заменить
      stubs: {
        geo: geoValues,
        device_type: deviceTypeValues,
        channel: channelValues
      }
    }
  },
  computed: {
    isOpen () {
      return this.value
    },
    ...mapGetters({ruleToCoeffTR: 'ruleToCoefficientTimeRanges/data'})
  },
  methods: {
    closeForm () {
      this.$emit('input', false)
    },
    changeCoeffToRuleTimeRange (a, b) {
      console.log('change Coeff to rule TR', a, b)
    },
    addCoeffToRule () {
      const newId = -(Object.keys(this.ruleToCoefficientTimeRanges).length + 1)
      const newValue = { id: newId, coefficient_table_id: '', timeRange: '' }
      // this.ruleToCoefficientTimeRanges.push(newValue)
      // this.ruleToCoefficientTimeRanges.push(newId)
      this.$set(this.ruleToCoefficientTimeRanges, newId, {
        id: newId,
        coefficient_table_id: '',
        timeRange: ''
      })
      console.log('addCoeffToRule', newId, newValue)
    },
    submit () {
      console.log('submit')
    },
    cancel () {
      console.log('cancel')
      this.closeForm()
    }
  }
}
</script>
