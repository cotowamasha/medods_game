import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: [],
    user: [],
    level: {
      time: 1500
    },
    /**
     * 4 возможных статуса:
     * before - начальный default статус
     * cycle - тот период пока игра показывает порядок ходов
     * waiting - ходы игрока
     * lose - вы проиграли
     */
    status: 'before',
    field: [
      {
        color: 'blue',
        active: false
      },
      {
        color: 'red',
        active: false
      },
      {
        color: 'yellow',
        active: false
      },
      {
        color: 'green',
        active: false
      }
    ]
  },
  mutations: {
    CLEAR (state, payload) {
      state[payload.type].splice(0)
    },

    PUSH_VALUE (state, payload) {
      state[payload.type].push(payload.number)
    },

    CHANGE_GAME_LEVEL (state, payload) {
      state.level.time = payload.time
    },

    SET_BUTTON_STATUS (state, index) {
      state.field[index].active = !state.field[index].active
    },

    SET_GAME_STATUS (state, string) {
      state.status = string
    }
  },
  actions: {},
  modules: {}
})
