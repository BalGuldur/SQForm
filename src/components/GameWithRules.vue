<template>
  <div>
    <div>Действует для {{ game.title }}</div>
    <button
      class="toggleRules"
      @click="toggleRules">
      <div
        class="closeRulesTitle"
        v-if="rulesIsOpen">
        Закрыть правила
      </div>
      <div
        class="openRulesTitle"
        v-else>
        Открыть правила
      </div>
    </button>
    <template v-if="rulesIsOpen">
      <GameRule
        v-for="rule in ownRules"
        :key="rule.id"
        :rule="rule"/>
    </template>
  </div>
</template>

<script>
import GameRule from './GameRule'

import { mapGetters } from 'vuex'

export default {
  components: { GameRule },
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      // Управляет отображением правил коэфф для игры
      rulesIsOpen: false
    }
  },
  computed: {
    // Возвращает правила, принадлежащие только этой игре - Array
    ownRules () {
      // Для каждого id возвращаем из state правило с этим id
      return this.game.rule_ids.map(ruleId => this.rules[ruleId])
    },
    ...mapGetters({rules: 'rules/data'})
  },
  methods: {
    toggleRules () {
      // Переключаем отображение правил коэфф для игры
      this.rulesIsOpen = !this.rulesIsOpen
    }
  }
}
</script>
