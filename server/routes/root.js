import express from 'express'
import { getRoot } from '../controller/root.js'

const router = express.Router()

router.get("/",getRoot)

export {router as rootRoute}