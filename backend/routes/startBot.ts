import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  console.log("🔥 /api/start-bot route was hit!");
  const { wallet, tiers } = req.body;

  if (!wallet || !Array.isArray(tiers)) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  console.log("🧾 Wallet:", wallet);
  console.log("📊 Tiers:", tiers);
  return res.status(200).json({ message: "Bot started!" });
});

export default router;
