<template>
  <div>
    <TagRule
      v-for="tag in tags"
      :key="tag"
      :title="tag"
      :condition="rule[tag].condition"
      :values="rule[tag].values"/>
    <CoefficientTimeRange
      v-for="coefficientTimeRange in ownCoefficientTimeRanges"
      :key="coefficientTimeRange.id"
      :coefficient-time-range="coefficientTimeRange"/>
    <br>
  </div>
</template>

<script>
import CoefficientTimeRange from '@/components/base_elements/CoefficientTimeRange'
import TagRule from '@/components/base_elements/TagRule'

import { tags } from '@/stubs'

import { mapGetters } from 'vuex'

export default {
  components: { CoefficientTimeRange, TagRule },
  props: {
    rule: {
      type: Object,
      required: true
    }
  },
  computed: {
    // Массив связей таблица коэфф. -> data range, принадлежащих данному rule
    ownCoefficientTimeRanges () {
      // на каждый id возвращаем из store элемент с этим id
      return this.rule.coefficient_time_range_ids
        .map(itemId => this.coefficientTimeRanges[itemId])
    },
    // Возвращает только те имена тэгов, которые имеют в rule хотя бы одно значение
    // Использутся для отображения тэгов rule
    tags () {
      // Фильтруем все возможные tags (из stubs), оставляя только нужные (rule[tag].values.length > 0)
      return tags.filter(tag => {
        // values тэга в данном правиле если они есть, иначе пустой массив
        let values = (this.rule[tag] && this.rule[tag].values) || []
        // условие фильтрации тэгов
        return values.length > 0
      })
    },
    ...mapGetters({coefficientTimeRanges: 'coefficientTimeRanges/data'})
  }
}
</script>
