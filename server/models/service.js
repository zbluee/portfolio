import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  info: {
    type: String,
    required: [true, "service info is required"],
  },
});

const serviceBoxSchema = mongoose.Schema(
  {
    titleSvg: {
      type: String,
      default: "empty",
    },
    title: {
      type: String,
      required: [true, "service title is required"],
    },
    description: {
      type: String,
      required: [true, "service description is required"],
    },
    infos: [serviceSchema],
    createdBy : {
        type : mongoose.Types.ObjectId,
        ref : "User",
        required : [true, "user is required"]
    }
  },

  { timestamps: true }
);

const Service = mongoose.model("Service", serviceBoxSchema);

export default Service;
