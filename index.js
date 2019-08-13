const express = require('express');
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}
function handleHome(rep, res){
    res.send("Hello from Home!");
}

function handleProfile(rep, res){
    res.send("You are on my Profile");
}

app.get("/",handleHome);
app.get("/profile",handleProfile);

app.listen(PORT, handleListening);