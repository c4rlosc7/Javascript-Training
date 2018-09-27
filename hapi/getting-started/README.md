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

## anonymous functions
```javascript
function() {}     function(a) {}      function(a,b) {}
```

## arrow functions
```javascript
() => {}          a => {}            (a,b) => {}
```

### Launch project
> npm install

### Nodemon
> npm install nodemon --save-dev

```javascript
  "scripts": {
    "start": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### Run server
> npm start

### hapi-pino
> npm install happi

[Source](https://hapijs.com/)
