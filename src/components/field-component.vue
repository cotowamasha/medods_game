<template>
  <div class="game-field">
    <div class="game-field--flex">
      <v-btn
        v-for="(el, index) of field"
        :key="index"
        :class-el="['game-field--btn', 'btn', `btn--${el.color}`, { 'active': el.active }]"
        :disabled="status !== 'waiting'"
        @click="clickButton(index + 1)"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'FieldComponent',
  computed: {
    ...mapState([
      'game',
      'user',
      'field',
      'status'
    ])
  },
  methods: {
    ...mapMutations([
      'PUSH_VALUE',
      'SET_GAME_STATUS',
      'CLEAR'
    ]),

    clickButton (num) {
      this.$parent.$refs.settings.playAudio(num)

      this.PUSH_VALUE({
        type: 'user',
        number: num
      })

      /**
       * сценарий, где user проиграл
       */
      if (this.user[this.user.length - 1] !== this.game[this.user.length - 1]) {
        this.SET_GAME_STATUS('lose')
        this.CLEAR({
          type: 'game'
        })
        this.CLEAR({
          type: 'user'
        })
        return false
      }
      /**
       * сценарий, где игра продолжается
       */
      if (this.user.length === this.game.length) {
        this.CLEAR({
          type: 'user'
        })
        setTimeout(this.$parent.$refs.settings.startCycle, 200)
        return false
      }
    }
  }
}
</script>
