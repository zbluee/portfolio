import express from "express";
import { getComments, sendComments } from "../controller/comments.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(sendComments).get(authMiddleware, getComments);

export { router as commentsRoute };
