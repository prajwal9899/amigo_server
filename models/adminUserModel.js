import mongoose from "mongoose";
var Schema = mongoose.Schema;
const adminUserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const adminUserModel = mongoose.model("AdminUser", adminUserSchema);
export default adminUserModel;
