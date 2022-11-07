//import {Router} from 'express'
import mqtt from 'mqtt'

/*import {getUsuariosDatabase ,createUsuarioDatabase, updateUsuarioDatabase, deleteUsuarioDatabase, getUsuarioByID, getUsuarioByEmail, 
    obtenerUsuarioGithub, obtenerRepositorioGithub, obtenerTodosLosRepositoriosGithub} from '../controllers/usuario.controller.js'
*/
//const router = Router()
const client  = mqtt.connect('https://nodejsapimqtt-production.up.railway.app/')


function main(){
    client.subscribe('pastillero/abrirCompartimento', function(){client.publish(topic, "Abrir compartimento")}),
    client.subscribe('pastillero/cerrarCompartimento', function(){client.publish(topic, "Cerrar compartimento")}),
    client.subscribe('pastillero/guardarCompartimento', function(){client.publish(topic, "Guardar compartimento")})
}

export default main;

/*function EventoConectar(){
    client.subscribe('Pastillero/compartimento', function (err) {
        if (!err) {
        client.publish('compartimento', '3')
        }
    })
}

function EventoMensaje(topic, message){
    if(topic == "Pastillero/retirarPastilla"){
        client.publish('Pastillero/retirarPastilla', 'Debe retirar una pastilla del compartimento ' + message.toString());
    }
    console.log(topic + " - " + message.toString());
    // client.end()
}*/


//export default EventoConectar;