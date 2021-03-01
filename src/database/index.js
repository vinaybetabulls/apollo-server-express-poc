import mongoose from "mongoose";
import { dbconfig } from "./config";

export const MongodbConnection = () => {
  const mongdbURL = `mongodb://localhost:27017/${dbconfig.dbName}`;
  mongoose.connect(mongdbURL, { ...dbconfig });

  mongoose.connection.on("connected", function () {
    console.log("Mongoose default connection is open to ", mongdbURL);
  });

  mongoose.connection.on("error", function (err) {
    console.log("Mongoose default connection has occured " + err + " error");
  });

  mongoose.connection.on("disconnected", function () {
    console.log("Mongoose default connection is disconnected");
  });

  process.on("SIGINT", function () {
    mongoose.connection.close(function () {
      console.log("Mongoose default connection is disconnected due to application termination");
      process.exit(0);
    });
  });
};
