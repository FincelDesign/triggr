import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import startBotRoutes from "./routes/startBot";
import saveTiersRoutes from "./routes/saveTiers";
import getTiersRoutes from "./routes/getTiers";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/start-bot", startBotRoutes);
app.use("/api/tiers", saveTiersRoutes);
app.use("/api/tiers", getTiersRoutes); // Must come *after* POST route

app.listen(PORT, () => {
  console.log(`🔥 Backend running at http://localhost:${PORT}`);
});
