import "dotenv/config"
import express from "express";
import cors from "cors";
import { studentReport } from "./data.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());

app.get("/api/report", (req, res) => {
    res.json({
        success: true,
        data: studentReport
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server listening on port  ${PORT}`);
});
