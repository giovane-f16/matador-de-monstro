new Vue({
    el: '#app',
    data: {
        botoes: false,
        vidaJogador: 100,
        vidaMonstro: 100
    }, 
    methods: {
        ataque(){
            numAleatorio = Math.ceil(Math.random() * 10)
            numAleatorio2 = Math.ceil(Math.random() * 7)
            this.vidaJogador =  this.vidaJogador - numAleatorio
            this.vidaMonstro = this.vidaMonstro - numAleatorio2
        }
    }
})