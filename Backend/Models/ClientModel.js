import mongoose from "mongoose";

const schema = mongoose.Schema;

const clientSchema = new schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  designation: {
    type: String,
    enum: [
      "CEO",
      "Web Devloper",
      "Designer",
      "Human Resource",
      "Project Manager",
      "Programmer",
    ],
    required: true,
  },
});

export const Client = new mongoose.model("client", clientSchema);
