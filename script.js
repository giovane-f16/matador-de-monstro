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