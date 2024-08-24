import mongoose from "mongoose";

const schema = mongoose.Schema;

const projectSchema = new schema({
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
});

export const Project = new mongoose.model("project", projectSchema);
