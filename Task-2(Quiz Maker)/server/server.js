import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import quizRoutes from "./routes/quiz.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.use("/api", quizRoutes);

app.listen(PORT, () => {
    console.log(`Server listening to PORT ${PORT}`);
});