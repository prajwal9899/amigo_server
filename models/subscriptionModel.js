import mongoose from "mongoose";
var Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
  _Id: {
    type: String,
    required: true,
  },
  registrationNo: {
    type: Number,
    required: true,
  },
  isSubscribed: {
    type: Boolean,
    required: true,
  },
  subscribedTill: {
    type: String,
  },
});

const subscriptionModel = mongoose.model("subscription", subscriptionSchema);
export default subscriptionModel;
