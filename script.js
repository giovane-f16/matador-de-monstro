new Vue({
    el: '#app',
    data: {
        iniciar: false,
        vidaJogador: 100,
        vidaMonstro: 100,
        ganhou: true,
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
            const valor = Math.ceil(Math.random() * (max - min) + min)
            return valor
        },
        dano(player, min, max, especial){
            const plus = especial ? 5 : 0
            const dano = this.numAleatorio(min + plus, max + plus)
            this[player] = Math.max(this.vidaJogador - dano, 0)
        },
        ataque(especial){
            this.dano('vidaJogador', 7, 12, false)
            this.dano('vidaMonstro', 5, 10, true)
        },
        curar(){
            curaJ = Math.ceil(Math.random() * 9)
            danoM = Math.ceil(Math.random() * 8)
            this.vidaJogador =  this.vidaJogador + (curaJ - danoM)
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