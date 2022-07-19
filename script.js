new Vue({
    el: '#app',
    data: {
        iniciar: false,
        vidaJogador: 100,
        vidaMonstro: 100,
        green: '#008a00',
        red: '#ff0000',
        logs: []
    }, 
    methods: {
        comecarJogo(){
            this.iniciar = true
            this.vidaJogador = 100
            this.vidaMonstro = 100
        },
        numAleatorio(min, max){
            const valor = Math.random() * (max - min) + min
            return Math.ceil(valor)
        },
        dano(player, min, max, especial, origem, alvo, classe){
            const plus = especial ? 5 : 0
            const dano = this.numAleatorio(min + plus, max + plus)
            this[player] = Math.max(this[player] - dano, 0)
            this.registrarLog(`${origem} atingiu ${alvo} com ${dano}.`, classe)
        },
        ataque(especial){
            this.dano('vidaMonstro', 5, 10, especial, 'jogador', 'monstro', 'player')
            if(this.vidaMonstro > 0){
                this.dano('vidaJogador', 7, 12, false, 'monstro', 'jogador', 'monster')
            }
        },
        curar(){
            this.cura(9, 13)
            this.dano('vidaJogador', 7, 12, false)
        },
        cura(min, max){
            const heal = this.numAleatorio(min, max)
            this.vidaJogador = Math.min(this.vidaJogador + heal, 100)
        },
        registrarLog(texto, classe){
            this.logs.unshift( { texto, classe })
        }
    },
    computed: {
        finalizou(){
            return this.vidaJogador == 0 || this.vidaMonstro == 0
        }
    },
    watch: {
        finalizou(value){
            if (value) this.iniciar = false
        }
    }
})