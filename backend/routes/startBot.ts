import express from "express";

const router = express.Router();

router.post("/", function (req, res) {
  const { wallet, tiers } = req.body;

  console.log("📬 Received bot start request:");
  console.log("🧾 Wallet:", wallet);
  console.log("📊 Tiers:", tiers);

  return res.status(200).json({ message: "Bot started!" });
});

export default router;
