<template>
    <h1>Listagem de Jogos</h1>
    <button v-on:click="jogar">Novo Jogo</button>
    
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Jogo</th>
                <th>Bolas</th>
                <th>Valor</th>
                <th>Pontos</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(game,idx) in games" :key="idx">
                <td>{{game.idx}}</td>
                <td>{{game.name}}</td>
                <td>{{game.bet}}</td>
                <td>{{game.points}}</td>
                <td>{{game.gain}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { Game } from '../models/Game.js';

export default {
    setup() {
        
    },
    mounted(){
        // alert("teste");

    },
    computed:{
        games(){
            return this.$store.state.games
        }
    },
    methods:{
        jogar(){
            let game = new Game("Lotofacil",15);
            game.randomGame();
            console.log(game.bet);
            this.$store.commit('pushGames',game);
        }
    }
}
</script>
