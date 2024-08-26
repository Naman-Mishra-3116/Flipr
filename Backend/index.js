import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import cors from "cors";
import { connectToMongoDatabase } from "./Database/connectDatabase.js";
import { ContactRouter } from "./Routes/contactRouter.js";
import { AdminRouter } from "./Routes/adminRouter.js";
import { SubscriberRouter } from "./Routes/subscriberRouter.js";

config();

// const test = {
//   origin: "*",
//   methods: "GET, POST, PUT, DELETE, OPTIONS",
//   allowedHeaders: "Content-Type, Authorization",
// };

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});
// app.use(cors(test));

app.get("/", (_, res) => {
  res.send("Hello world");
});

app.use(AdminRouter);
app.use(ContactRouter);
app.use(SubscriberRouter);

app.listen(PORT, () => {
  console.log(`The server has started on the port ${PORT}`);
  connectToMongoDatabase();
});
