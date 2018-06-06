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

let lastMessageList = [];

io.on('connection', socket => {

    socket.join(roomName);

    for (const message of lastMessageList) {
        socket.emit('message', message);
    }

    socket.on('message', message => {

        console.log(message);

        lastMessageList = [...lastMessageList, message];

        if (lastMessageList.length > 10) {
            [, ...lastMessageList] = lastMessageList;
        }

        io.in(roomName).emit('message', message);

    });

});

server.listen(3000);
