new Vue({
    el: '#app',
    data: {
        iniciar: false,
        vidaJogador: 100,
        vidaMonstro: 100,
        green: '#008a00',
        red: '#ff0000'
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
        dano(player, min, max, especial){
            const plus = especial ? 5 : 0
            const dano = this.numAleatorio(min + plus, max + plus)
            this[player] = Math.max(this[player] - dano, 0)
        },
        ataque(especial){
            this.dano('vidaJogador', 7, 12, false)
            this.dano('vidaMonstro', 5, 10, especial)
        },
        curar(){
            this.cura(9, 13)
            this.dano('vidaJogador', 7, 12, false)
        },
        cura(min, max){
            const heal = this.numAleatorio(min, max)
            this.vidaJogador = Math.min(this.vidaJogador + heal, 100)
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