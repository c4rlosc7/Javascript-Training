# hapi js

A rich framework for building applications and services

> npm init
> npm install hapi --save

Create a server.js file with the following contents:

```javascript
'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

// Add the route
server.route({
    method:'GET',
    path:'/hello',
    handler:function(request,h) {

        return'hello world';
    }
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

> Launch the application by running npm start and open localhost:8000/hello in your browser.

start();
```

[Source](https://hapijs.com/)
