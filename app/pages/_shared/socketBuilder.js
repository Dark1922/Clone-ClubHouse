import { constants } from "./constant.js"

//design patters build

export default class SocketBuilder {
  constructor({ socketUrl , namespace }) {  //que for usar essa clase vai te que passar o sockerURL
   this.socketURL = `${socketUrl}/${namespace}`//url e nosso nome das rota lul
   this.onUserConnected = () => { }//funções que n serão ultilizadas se niguem chamaren ekas
   this.onUserDisconnected = () => {}
  }
   
  setOnUserConnected(fn) {
    this.onUserConnected = fn

    return this
  }
  setOnUserDisconnected(fn) {
    this.onUserDisconnected = fn

    return this
  }


  build() { //retorna instancia do objetos
  const socket = globalThis.io.connect(this.socketURL, {//script do html chamando o io conecta a ela
         withCredentials: false //pq n vai ter autenticação pra n ficar grande
     })

     //configurar eventos
     socket.on('connection', () => console.log('conectei!'))//socket io afins de testes
     socket.on(constants.events.USER_CONNECTED,  this.onUserConnected)
     socket.on(constants.events.USER_DISCONNECT, this.onUserDisconnected)//qnd ele desconectar
     
     return socket 
  } 
}