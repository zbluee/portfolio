import mongoose from "mongoose";

const ContentSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "section content title is required"],
    },
    subtitle: {
      type: String,
      required: [true, "section content subtitle is required"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "user is required"],
    },
  },
  { timestamps: true }
);

const Content = mongoose.model("Content", ContentSchema);

export default Content;
