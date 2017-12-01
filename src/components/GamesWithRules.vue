<template>
  <div>
    <div>Правила применения коэффициэнтов</div>
    <button @click="showCreateRule">Создать правило</button>
    <GameWithRules
      v-for="game in games"
      :game="game"
      :key="game.id"/>
    <RuleForm v-model="ruleFormIsOpen"/>
  </div>
</template>

<script>
import RuleForm from './RuleForm'
import GameWithRules from './GameWithRules'

import { mapGetters } from 'vuex'

export default {
  components: { RuleForm, GameWithRules },
  data () {
    return {
      ruleFormIsOpen: false // отображение формы создания/редактирования правил
    }
  },
  computed: {
    ...mapGetters({games: 'games/data'})
  },
  methods: {
    // открытие формы создания правила
    showCreateRule () {
      this.ruleFormIsOpen = true
    }
  }
}
</script>
