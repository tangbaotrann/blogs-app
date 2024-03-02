import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("--> MongoDB is already connected ...");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "blogtutorial",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB connected.");
  } catch (err) {
    console.log({ err });
  }
};

export default connectToDB;
