import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      "mongodb+srv://subhamoyghosh94:Subhamoy_25@cluster0.698sk.mongodb.net/BookmyShow?retryWrites=true&w=majority&appName=Cluster0"
    );
    if (connection) {
      console.log(`Connected to DB ${connection.host}`);
    }
  } catch (e) {
    console.log(`DB Connection error`, e);
  }
};
export default connectDB;
