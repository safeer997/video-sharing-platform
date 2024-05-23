import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path:"./env"
})

connectDB();





























/*import express from "express";
const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("not able to talk to db: ", error);
      throw error;
    });

    app.listen(process.env.PORT,()=>{
      console.log("safeer server is on port : ",process.env.PORT);
    })
  } catch (error) {
    console.error("CONNECT TO DATABASE FAILED: ", error);
    throw error;
  }
})();*/
