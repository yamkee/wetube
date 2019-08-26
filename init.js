import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>console.log(`✅  Listening on : http://localhost:${PORT}`));