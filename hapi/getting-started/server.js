'use strict'

const Hapi = require('hapi');

// Create s server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 8000
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
async function start(){
    try {
        await server.start();
    } catch (error) {
        console.log(err);
        process.exit(1);
    }
    console.log("Server running at:", server.info.uri);
};

start();
