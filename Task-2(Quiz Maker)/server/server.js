import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
connectDB();

app.listen(PORT, () => {
    console.log(`Server listening to PORT ${PORT}`);
});