import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    //console.log(DB_NAME)
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Connected to MongoDB at ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Rethrow the error to exit the process
    // Exit the process with failure
  }
};
export default connectDB;
