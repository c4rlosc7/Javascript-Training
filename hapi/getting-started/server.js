"use strict";

/**
 * Hapi js change callbacks to async/await
 */
const Hapi = require("hapi");

// Create s server with a host and port
const server = Hapi.server({
  host: "localhost",
  port: 8000
});

// hapi-pino
/*server.register({
    plugin: register('hapi-pino'),
    options: {
        prettyPrint: true
    }
});*/

// Add the route, endPoint
server.route({
  method: "GET",
  path: "/hello/{name}/{surname}",
  handler: function(request, h) {
    const { name, surname } = request.params;
    return "<h1>hello <u>" + name + " </u><i> " + surname + "</i></h1>";
  }
});

// Start the server
async function start() {
  try {
    await server.start();
  } catch (error) {
    console.log(err);
    process.exit(1);
  }
  // Uniform Resource Identifier
  console.log("Server running at:", server.info.uri);
}

start();
