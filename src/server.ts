import mongoose from "mongoose";
import app from "./app"
import Config from "./app/config"
import { MongoServerError } from "mongodb";

async function main() {
  try {
    await mongoose.connect(Config.db_url as string);
    app.listen(Config.port, () => {
      console.log(`Server running on port ${Config.port} and was successfully connected to MongoDB.`)
    })
  } catch (err: MongoServerError | any) {
    console.log("Error trying to connect to MongoDB: ", err)
  }
}

main()
