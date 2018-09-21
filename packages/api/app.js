/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const userList = [];

app.use(bodyParser.json());

class User {

    constructor(args) {
        this.id = args.id;
        this.firstName = args.firstName;
        this.lastName = args.lastName;
    }

}

/* Routing. */
app.get('/', (request, response) => {
    response.send('Hello!');
});

app.post('/users', (request, response) => {

    const user = new User({
        ...request.body,
        id: userList.length.toString()
    });

    userList.push(user);

    response.send(user);

});

app.get('/users', (request, response) => {
    response.send({
        meta: {
            offset: 0,
            limit: userList.length,
            totalCount: 1000
        },
        data: userList
    });
});

/* Run server and listen on port 3000. */
const server = app.listen(3000, () => {

    const host = server.address().address;
    const port = server.address().port;

    console.log(`App listening on http://${host}:${port}`);

});
