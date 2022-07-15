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
        dano(min, max, especial){
            const plus = especial ? 5 : 0
            const dano = this.numAleatorio(min + plus, max + plus)
            this.vidaJogador = Math.max(this.vidaJogador - dano, 0) // Garantindo que não será negativo
        },
        ataqueTeste(especial){
            this.dano(7, 12, false)
        },
        ataque(){
            danoJ = Math.ceil(Math.random() * 10)
            danoM = Math.ceil(Math.random() * 7)
            this.vidaJogador =  this.vidaJogador - danoJ
            this.vidaMonstro = this.vidaMonstro - danoM
        },
        ataqueEspecial(){
            danoJ = Math.ceil(Math.random() * 9)
            danoM = Math.ceil(Math.random() * 10)
            this.vidaJogador =  this.vidaJogador - danoJ
            this.vidaMonstro = this.vidaMonstro - danoM
        },
        curar(){
            curaJ = Math.ceil(Math.random() * 9)
            danoM = Math.ceil(Math.random() * 8)
            this.vidaJogador =  this.vidaJogador + (curaJ - danoM)
        }
    },
    computed: {
        finalizou: function(){
            return this.vidaJogador <= 0 || this.vidaMonstro <= 0
        }
    },
    watch: {
        vidaJogador: function(novo, antigo){
            console.log(`Novo valor ${novo}`)
            console.log(`Antigo: ${antigo}`)
        }
    }
})