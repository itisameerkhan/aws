import express from "express";
import { addData, deleteData, getData, updateData } from "../controllers/dynamo.js";

const router = express.Router();

router.route("/dynamo/add").post(addData);
router.route("/dynamo/get").get(getData);
router.route("/dynamo/update").put(updateData);
router.route("/dynamo/delete").delete(deleteData);

export default router;
