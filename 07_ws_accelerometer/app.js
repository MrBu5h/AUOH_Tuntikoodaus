const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 8081;

let connections = [];

io.on("connection", (socket)=>{
    connections[socket.io] = socket;
    console.log("connected");

    socket.on("disconnect", (socket)=>{
        delete connections[socket.id];
        console.log("disconnected");
    });

    socket.on("sensor_data", (data)=>{
        console.log(data);
    });
});

// localhost:8081/abc.txt

app.use(express.static("public"));
//app.use(express.static("files/data"));

server.listen(PORT);
