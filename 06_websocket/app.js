const express = require("express");
const app = express();
const server = require("http").createServer(express);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 8081;

let connections = [];
let number_of_connections = 0;

io.on("connections", (socket)=>{
    connections[socket.id] = socket;
    number_of_connections++;
    console.log("client connected, number of connections: ", number_of_connections);
    socket.on("disconnect", (socket)=>{
        delete connections[socket.id];
        number_of_connections--;
        console.log("client disconnected. Number of connections: ", number_of_connections);
        //
    });

});

server.listen(PORT);
