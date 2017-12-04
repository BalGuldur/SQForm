<template>
  <div
    v-if="value">
    <div class="ruleForm">Форма создания/редактирования правил</div>
    <GameSelect v-model.number="rule.game_id"/>
    <br>
    <TagRuleSelect
      v-for="tag in stubs['tags']"
      :key="tag"
      :title="tag"
      :items="stubs[tag]"
      v-model="rule[tag]"/>
    <CoefficientTimeRangeSelect
      v-for="ruleToCoeff in ownCoefficientTimeRanges"
      :key="ruleToCoeff.id"
      v-model="ownCoefficientTimeRanges[ruleToCoeff.id]"/>
    <button
      class="addCoeffTimeRange"
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
import CoefficientTimeRangeSelect from '@/components/base_elements/CoefficientTimeRangeSelect'

import { geoValues, deviceTypeValues, channelValues, tags } from '@/stubs'

import { mapActions } from 'vuex'

export default {
  components: { GameSelect, TagRuleSelect, CoefficientTimeRangeSelect },

  props: {
    // Открыта или нет форма, в parent элементе использовать v-model или @input
    value: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      // Правило с пустыми значениями
      rule: this.defaultRule(),
      // Таблицы коэффициентов и data ranges, создан один пустой объект
      // В качестве id используются отрицательные значения, для определения в backend,
      // как новых значений
      ownCoefficientTimeRanges: this.defaultOwnCoefficientTimeRanges(),
      // TODO: Хардкод значений, заменить
      stubs: {
        geo: geoValues,
        devices: deviceTypeValues,
        channels: channelValues,
        tags
      }
    }
  },

  computed: {
    // Проверка занчения всех полей
    allFieldsIsOk () {
      // TODO: Добавить проверку заполненности всех полей, с отключением кнопки создания правила
      // Проверку сделать с помощью второстепенных computed
      return true
    }
  },

  methods: {
    // Пустое правило
    defaultRule () {
      return {
        game_id: '',
        geo: { condition: '=', values: [] },
        devices: { condition: '=', values: [] },
        channels: { condition: '=', values: [] }
      }
    },
    // Таблицы коэфф. с data range, с одной пустой таблицей
    defaultOwnCoefficientTimeRanges () {
      return {
        [-1]: {
          id: -1,
          coefficient_table_id: '',
          timeRange: ''
        }
      }
    },
    // Очистка формы в первоначальное состояние
    eraseForm () {
      this.$set(this, 'rule', this.defaultRule())
      this.$set(this, 'ownCoefficientTimeRanges', this.defaultOwnCoefficientTimeRanges())
    },
    // Закрытие формы (должно обрабатывается в parent component)
    // TODO: Можно пересмотреть логику закрытия form, с использованием внутреннего значения и watch
    // Что позволит закрывать форму, даже без обработки в parent component
    closeForm () {
      this.eraseForm()
      this.$emit('input', false)
    },
    // Добавление новой таблицы коэффициентов с data range
    addCoeffToRule () {
      // Новый ид = отрицательное значение длинны + 1
      // TODO: При удалении элементов из ownCoefficientTimeRanges, переделать логику генерации id из random
      const newId = -(Object.keys(this.ownCoefficientTimeRanges).length + 1)
      // Добавление элемента с пустыми значениями
      this.$set(this.ownCoefficientTimeRanges, newId, {
        id: newId,
        coefficient_table_id: '',
        timeRange: ''
      })
    },
    // Подтверждение формы, отправка запроса в backend
    submit () {
      // Формируем правильный формат параметров для передачи в backend
      const item = {
        rule: this.rule,
        coefficientTimeRanges: this.ownCoefficientTimeRanges
      }
      this.addRule(item) // Добавляем правило, обращаемся к vuex module rules
        .then(response => { this.closeForm() }) // Закрываем и очищаем форму, если запрос успешен
    },
    cancel () {
      this.closeForm() // Закрываем и очищаем форму
    },
    ...mapActions('rules', ['addRule'])
  }
}
</script>
