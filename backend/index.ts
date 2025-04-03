import express from "express";
import cors from "cors";
import startBotRoutes from "./routes/startBot";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/start-bot", startBotRoutes);

app.listen(PORT, () => {
  console.log(`🔥 Backend running at http://localhost:${PORT}`);
});
