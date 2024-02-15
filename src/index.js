'use strict';
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

module.exports = {
  register({ strapi }) {
    require("./socket.js")(io);

    httpServer.listen(4000, '192.168.88.155', () => console.log('Listening on port 4000')); 
  },

  bootstrap(/*{ strapi }*/) {},
};