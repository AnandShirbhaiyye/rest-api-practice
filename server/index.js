import express from 'express';
const app = express();
app.use(express.json());
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;


try {
  await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error(error);
}




app.listen(PORT, () => {
    console.log(`The server is Running on Port ${PORT} 🚀`);
  });