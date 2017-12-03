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
      rulesIsOpen: false
    }
  },
  computed: {
    ownRules () {
      return this.game.rule_ids.map(ruleId => this.rules[ruleId])
    },
    ...mapGetters({rules: 'rules/data'})
  },
  methods: {
    toggleRules () {
      this.rulesIsOpen = !this.rulesIsOpen
    }
  }
}
</script>
