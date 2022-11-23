import mongoose from "mongoose";

const skillSchema = mongoose.Schema({
  skillName: {
    type: String,
    required: [true, "skill name is required"],
  },
  skillLevel: {
    type: String,
    required: [true, "skill level is required"],
  },
});

const skillBoxSchema = mongoose.Schema(
  {
    skillTitle: {
      type: String,
      required: [true, "Title is required"],
    },
    skills: {
      type: [skillSchema],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      red: "User",
      required: [true, "user is required"],
    },
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", skillBoxSchema);

export default Skill;
