new Vue({
    el: '#app',
    data: {
        botoes: false,
        vidaJogador: 100,
        vidaMonstro: 100,
        width: '50%'
    }, 
    methods: {
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
            curaJ = Math.ceil(Math.random() * 10)
            danoM = Math.ceil(Math.random() * 9)
            this.vidaJogador =  this.vidaJogador + (curaJ - danoM)
        }
    }
})