const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
    console.log('new connection');
    socket.on('eventname', (data) => {
        socket.broadcast.emit('new message', data);
    });
});