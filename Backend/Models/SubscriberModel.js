import mongoose from "mongoose";

const schema = mongoose.Schema;

const subsriberSchema = new schema({
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Subscriber = new mongoose.model("subscriber", subsriberSchema);
