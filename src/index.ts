import mongoose, { Schema, mongo } from "mongoose";
import { app } from "./app";
import { Device } from "./databases/mongodb/models/device";

const start = async () => {
  try {
    let DB_URI = "mongodb://localhost:27017/test";

    await mongoose.connect(DB_URI);
    mongoose.connection.on("connected", () => {
      console.log("connected to MongoDB");
    });
    mongoose.connection.on("error", () => {
      console.log("Error while connecting to MongoDB");
    });
    mongoose.connection.on("close", () => {
        console.log("Error while connecting to MongoDB");
      });

  } catch (error) {
    console.log(error);
  }
  app.listen(3000, async () => {
    console.log("server listen on 3000");
  });
};

start();
