import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){return next()};
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};






export const User = mongoose.models.User || mongoose.model("User", userSchema);

