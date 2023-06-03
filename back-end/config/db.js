import mongoose, { connect } from "mongoose";

const MONGO_URL =
  "mongodb+srv://veldojsaiteja:sai02122002dec@cluster0.rhm3u0p.mongodb.net/sampleDB";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log("connected successfully !!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
