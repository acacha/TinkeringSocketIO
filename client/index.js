var socket = require('socket.io-client')('http://localhost:3000');
socket.on('connect', function(){
    console.log('Client connected ok to localhost port 3000')
});
socket.on('pepita', function(data){
    console.log('Event pepita receive')
});
socket.on('disconnect', function(){
    console.log('Client disconnected ok from localhost port 3000')
});
