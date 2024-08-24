import mongoose from "mongoose";

const schema = mongoose.Schema;

const contactSchema = new schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

export const Contact = new mongoose.model("contact", contactSchema);
