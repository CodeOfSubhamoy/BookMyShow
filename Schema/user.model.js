import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password must be min 8 chars"],
    maxLength: [16, "Password must be max 16 chars"],
    select: false,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});
userSchema.pre("save", async function (next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  next();
});
const User = model("users", userSchema);
export default User;
