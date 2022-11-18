import express from "express"
import { login } from "../controller/auth.js"

const router = express.Router()

router.route("/login").post(login)

export {router as authRoute}