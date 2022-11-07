import app from './app.js'
//import { sequelize } from './database/database.js'
import { PORT } from './config.js'

//import './models/Usuario.js'

async function main(){
    try {
        /*
        await sequelize.sync({force: false});
        console.log("Connection has been established succesfully");
        */
        app.listen(PORT)
        console.log('Server is listening on port', PORT);

    } catch (error) {

        console.error('Unable to connect to the database:', error);

    }
}

main();




/*const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')


function EventoConectar(){
    client.subscribe('Pastillero/#', function (err) {
        if (!err) {
        client.publish('Compartimento', '3')
        }
    })
}

function EventoMensaje(topic, message){
    if(topic == "Pastillero/retirarPastilla"){
        console.log('Debe retirar una pastilla del compartimento ' + message.toString());
    }
    console.log(topic + " - " + message.toString());
    // client.end()
}


client.on('connect', EventoConectar)
client.on('message', EventoMensaje)
*/

/*
client.on('connect', function () {
    client.subscribe('Mensaje', function (err) {
        if (!err) {
        client.publish('Mensaje', 'Hello mqtt')
        }
    })
})
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})*/