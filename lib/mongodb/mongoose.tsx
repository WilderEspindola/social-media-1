import mongoose from "mongoose";

let isConnected = false; // Track connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  const mongoDBUrl = process.env.MONGODB_URL;

  if (!mongoDBUrl) {
    throw new Error("MONGODB_URL environment variable is not defined");
  }

  try {
    await mongoose.connect(mongoDBUrl, {
      dbName: "social-media-1",
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
