import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0,
        games:[]
      }
    },
    mutations: {
    pushGames (state,game){
        state.games.push(game);
    },
      increment (state) {
        state.count++
      }
    }
  })


app.use(router)
app.use(store)

app.mount('#app')

