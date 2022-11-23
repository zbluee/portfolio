import mongoose from "mongoose";

const testimonySchema = mongoose.Schema(
  {
    imageUrl: {
      type: String,
      default:
        "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Profile+Picture",
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
      minLength: 10,
    },
    position : {
      type : String,
      required: [true, "position is required"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "user is required"],
    },
  },
  { timestamps: true }
);

const Testimony = mongoose.model("Testimony", testimonySchema);

export default Testimony;
