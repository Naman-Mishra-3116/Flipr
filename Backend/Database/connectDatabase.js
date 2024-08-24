import mongoose from "mongoose";
import chalk from "chalk";

export const connectToMongoDatabase = async () => {
  try {
    const client = await mongoose.connect(process.env.MONGO_URL);
    console.log(chalk.green("Database connection successful"));

  } catch (err) {
    console.log(chalk.red("Error in connecting database"))
    console.error(err.message);
  }
};
