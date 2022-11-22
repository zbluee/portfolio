import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    minLength: [4, "too short username"],
    unique : true
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [6, "password must container atleast 6 character"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, {timestamps : true});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, username: this.username, isAdmin : this.isAdmin },
    process.env.SECRET,
    { expiresIn: process.env.EXP }
  );
};

userSchema.methods.isPasswordMatch = async function(password) {
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", userSchema);

export default User;
