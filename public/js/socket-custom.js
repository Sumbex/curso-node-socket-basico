var socket = io();

socket.on('connect', function() {
    console.log('conectado al server');
});

socket.on('disconnect', function() {
    console.log('desconectado al server');
});

socket.emit('enviarMensaje', {
    usuario: 'Bryan',
    mensaje: 'Que tal'
}, function(res) {
    console.log(res);
});

socket.on('enviarMensaje', function(message) {
    console.log(message);
});