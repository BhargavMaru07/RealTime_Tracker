require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const path = require("path");
const socket = require("socket.io");
const app = express();
let PORT = process.env.PORT || 4000;

const server = createServer(app);
const io = socket(server);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("Home.ejs");
});

io.on("connection",function(socket){
  console.log("connected");

  socket.on("send-location",function(data){
    io.emit("receive-location",{id:socket.id,...data})
  });
})

server.listen(PORT, () => console.log("Server is listening on Port : ", PORT));

