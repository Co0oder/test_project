const express = require('express');
const config = require('./config/config');

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(config.port || 3000, () => 'Up and running');

module.exports = {
    server
};