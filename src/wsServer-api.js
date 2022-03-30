const WebSocket = require('ws').Server;
// const ws = new WebSocket({ port: 8080 });
module.exports = (stepService) => {
  const WEBSOCKET_PORT = 8081;

  // * TODO: Write the WebSocket API for receiving `update`s,
  //         using `stepService` for data persistence.
  //         Make sure to return an instance of a WebSocketServer.

  const wsServer = new WebSocket({ port: WEBSOCKET_PORT });

  return wsServer;
};
