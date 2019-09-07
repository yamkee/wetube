import "./models/Comment";
import "./models/Video";
import "./models/User";
import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`✅  Listening on : http://localhost:${PORT}`)
);
