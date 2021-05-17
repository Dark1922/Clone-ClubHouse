import { constants } from "../../_shared/constant.js"
import SocketBuilder from "../../_shared/socketBuilder.js"

const socketBuilder = new SocketBuilder({//sala individual
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespace.room
})
const socket = socketBuilder
   .setOnUserConnected((user) => console.log('user conencted!', user))
   .setOnUserDisconnected((user) => console.log('user disconencted!', user))
   .build()
//vai construir a instancia do socket

const room = {
  id: Date.now(),
  topic: 'JS E expert éh noix'
}

const user =  {
  img: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png', //img do usuario
  username: 'João Victor'
}
socket.emit(constants.events.JOIN_ROOM, {user , room})