import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salt: { type: String },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

UserSchema.methods.setPassword = function (password) {
    const salt = bcrypt.genSaltSync(10);
    const hasedPassword =  bcrypt.hashSync(password, salt);
    this.password = hasedPassword;
    return this.password;
};

// validating hashed password
UserSchema.methods.validPassword = function (password, hash) {
    return bcrypt.compareSync(password, hash);
};

export const UserModel = mongoose.model("users", UserSchema);
