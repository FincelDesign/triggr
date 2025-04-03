import express from "express";
import supabase from "../supabaseClient";

const router = express.Router();

router.post("/", async (req, res) => {
  const { wallet, tiers } = req.body;

  if (!wallet || !tiers || !Array.isArray(tiers)) {
    return res.status(400).json({ error: "Missing or invalid fields" });
  }

  const { error } = await supabase
    .from("tiers")
    .upsert({ wallet, data: tiers });

  if (error) {
    console.error("❌ Supabase insert error:", error);
    return res.status(500).json({ error: "Failed to save tiers" });
  }

  return res.status(200).json({ message: "Tiers saved to Supabase" });
});

export default router;
