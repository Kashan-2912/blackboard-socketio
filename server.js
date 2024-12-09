const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(3000, () => {
    console.log("Server started on port 3000");
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log("A user connected", socket.id);

    socket.on('draw', (data) => {
        socket.broadcast.emit('draw', data);
    })
})