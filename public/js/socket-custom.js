var socket = io();

socket.on('connect', function(){

    console.log('Conectado al servidor');

});

// escuchar
socket.on('disconnect', function(){

    console.log('Se ha perdido la conexión con el servidor');

});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario:' Christian',
    mensaje: 'Hola mundo'

}, function( resp ) {

    console.log('Respuesta Server: ', resp);

});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ', mensaje);
});
