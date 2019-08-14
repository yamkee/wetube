import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (rep, res) =>res.send("Hello from Home!");

const handleProfile = (rep, res) => res.send("You are on my Profile");

const betweenHome = (rep,res,next) => {
    console.log("between");
    next();
}

app.use(betweenHome);

app.get("/",handleHome);
app.get("/profile",handleProfile);

app.listen(PORT, handleListening);