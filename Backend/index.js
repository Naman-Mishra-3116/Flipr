import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import cors from "cors";
import { connectToMongoDatabase } from "./Database/connectDatabase.js";
config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/test", (_, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`The server has started on the port ${PORT}`);
  connectToMongoDatabase();
});
