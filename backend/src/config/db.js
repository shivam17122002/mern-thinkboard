import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const uri =
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mern-thinkboard";

    if (!process.env.MONGO_URI) {
      console.warn(
        "[MongoDB] MONGO_URI not set — falling back to local MongoDB at",
        uri
      );
    }

    await mongoose.connect(uri);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDb;
