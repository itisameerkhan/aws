import express from "express";
import { addData } from "../controllers/dynamo.js";

const router = express.Router();

router.route("/dynamo/add").post(addData);

export default router;