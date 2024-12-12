import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

//Routes
app.use("/api", router);

//Enable cors
app.use(cors());

app.listen(PORT, () => console.log(`Serve running on port ${PORT}`));
