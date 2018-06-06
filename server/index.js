/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

'use strict';

const http = require('http');

const server = http.createServer();

const socketIo = require('socket.io');

const io = socketIo(server);

const roomName = 'wishtack';

io.on('connection', socket => {

    socket.join(roomName);

    socket.on('message', data => {
        console.log(data);
        io.in(roomName).emit('message', data);
    });

});

server.listen(3000);
