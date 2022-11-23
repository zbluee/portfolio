import mongoose from "mongoose";

const workSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    addressLink: {
      type: String,
      required: true,
    },
    createdBy : {
      type : mongoose.Types.ObjectId,
      ref : "User",
      required : [true, "user is required to create this schema"]
    }
  },
  { timestamps: true }
);

const Work = mongoose.model("Work", workSchema);

export default Work;
