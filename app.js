//EXPRESS
const express = require("express");

const app = express();

//PATH
const path = require("path");



//PUBLIC
const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));



//SERVER
app.listen(3001, () => console.log("Servidor 3001 en funcionamiento"));




//HTML
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
})