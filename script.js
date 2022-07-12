new Vue({
    el: '#app',
    data: {
        botoes: false,
        vidaJogador: 100,
        vidaMonstro: 100,
        ganhou: true,
        finalizou: true,
        green: '#008a00',
        red: '#ff0000'
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
            curaJ = Math.ceil(Math.random() * 9)
            danoM = Math.ceil(Math.random() * 8)
            this.vidaJogador =  this.vidaJogador + (curaJ - danoM)
        }
    }
})