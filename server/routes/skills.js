import exress from "express";
import {
  createskill,
  deleteSkill,
  getskill,
  getSkills,
  updateSkill,
} from "../controller/skills.js";
import { authMiddleware } from "../middleware/auth.js";

const router = exress.Router();

router.route("/").get(getSkills).post(authMiddleware, createskill);
router
  .route("/:id")
  .get(authMiddleware, getskill)
  .patch(authMiddleware, updateSkill)
  .delete(authMiddleware, deleteSkill);

export { router as skillsRoute };
