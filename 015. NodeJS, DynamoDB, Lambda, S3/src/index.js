import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "../controllers/error.js";
import dynamoRouter from "../routers/dynamo.js";

dotenv.config();

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("server is listening to PORT: ", process.env.PORT);
});

app.use("/", dynamoRouter);
app.use(errorHandler);
