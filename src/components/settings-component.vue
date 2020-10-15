<template>
  <div class="game-settings">
    <h3 class="game-settings__round">
      Round: {{ game.length }}
    </h3>
    <p
      v-if="status === 'lose'"
      class="game-settings__lose"
    >
      Вы проиграли. Нажмите "START", чтобы начать заново
    </p>
    <v-btn
      @click="startGame"
      class-el="btn--start"
    >
      Start
    </v-btn>
    <h3 class="game-settings__round">
      Game Options:
    </h3>
    <v-radio
      v-for="lvl of levels"
      :key="lvl.id"
      :id="lvl.id"
      :value="lvl.value"
      :checked="lvl.checked"
      @changeRadio="changeLevel(lvl)"
      radio-name="level"
    >
      {{ lvl.value }}
    </v-radio>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SettingsComponent',
  data () {
    return {
      levels: [
        {
          id: '1',
          value: 'easy',
          time: 1500,
          checked: true
        },
        {
          id: '2',
          value: 'medium',
          time: 1000,
          checked: false
        },
        {
          id: '3',
          value: 'hard',
          time: 400,
          checked: false
        }
      ],
      time: 0
    }
  },
  computed: {
    ...mapState([
      'game',
      'level',
      'status'
    ]),
  },
  methods: {
    ...mapMutations([
      'CLEAR',
      'PUSH_VALUE',
      'SET_BUTTON_STATUS',
      'CHANGE_GAME_LEVEL',
      'SET_GAME_STATUS'
    ]),

    getRandomNumber () {
      const min = 1
      const max = 4
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    changeLevel (lvl) {
      this.CHANGE_GAME_LEVEL(lvl)
    },

    startGame () {
      this.CLEAR({
        type: 'game'
      })
      this.CLEAR({
        type: 'user'
      })

      this.startCycle()
    },

    playAudio (fileName) {
      let audio = new Audio()
      audio.src =  `sounds/${fileName}.mp3`
      audio.play()
    },

    startCycle () {
      this.PUSH_VALUE({
        type: 'game',
        number: this.getRandomNumber()
      })

      this.SET_GAME_STATUS('cycle')

      this.time = 0

      for ( let i = 0; i < this.game.length; i++) {
        setTimeout(this.setActiveStatus, this.time, this.game[i] - 1)
        this.time += this.level.time - 100
        setTimeout(this.setPassiveStatus, this.time, this.game[i] - 1, i)
        this.time += this.level.time + 100
      }
    },

    setActiveStatus (num) {
      this.SET_BUTTON_STATUS(num)
      this.playAudio(+num + 1)
    },

    setPassiveStatus (num, index) {
      this.SET_BUTTON_STATUS(num)
      if (index === this.game.length - 1) {
        this.SET_GAME_STATUS('waiting')
      }
    },
  }
}
</script>
