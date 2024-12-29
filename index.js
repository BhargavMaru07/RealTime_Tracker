const express = require("express");
const { createServer } = require("http");
const path = require("path");
const socket = require("socket.io");
const app = express();
let PORT = process.env.PORT || 4000

const server = createServer(app);
const io = socket(server);

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(PORT,()=>console.log("Server is listening on Port : ",PORT))
