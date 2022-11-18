import exress from "express"
import { createskill, deleteSkill, getskill, getSkills, updateSkill } from "../controller/skills.js"

const router = exress.Router()

router.route("/").get(getSkills).post(createskill)
router.route("/:id").get(getskill).patch(updateSkill).delete(deleteSkill)

export {router as skillsRoute}