<template>
  <div>
    <div>Правила применения коэффициэнтов</div>
    <button
      class="toggleCreateRule"
      @click="showCreateRule">
      Создать правило
    </button>
    <GameWithRules
      v-for="game in games"
      :game="game"
      :key="game.id"/>
    <br>
    <RuleForm v-model="ruleFormIsOpen"/>
  </div>
</template>

<script>
import RuleForm from './RuleForm'
import GameWithRules from './GameWithRules'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: { RuleForm, GameWithRules },
  data () {
    return {
      // Управлет отображение формы создания правил
      ruleFormIsOpen: false
    }
  },
  computed: {
    ...mapGetters({games: 'games/data'})
  },
  beforeMount () {
    // Перед mount, получаем от backend игры и правила с дочерними элементами, записываем в state
    this.fetchGames()
    this.fetchRules()
  },
  methods: {
    // открытие формы создания правила
    showCreateRule () {
      this.ruleFormIsOpen = true
    },
    ...mapActions('games', ['fetchGames']),
    ...mapActions('rules', ['fetchRules'])
  }
}
</script>
