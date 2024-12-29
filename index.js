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
app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("Home")
});

server.listen(PORT, () => console.log("Server is listening on Port : ", PORT));

//https://real-time-tracker-gamma-sage.vercel.app/
