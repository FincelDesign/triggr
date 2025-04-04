import express from "express";
import supabase from "../supabaseClient";

const router = express.Router();

router.get("/:wallet", async (req, res) => {
  const { wallet } = req.params;
  console.log("📥 GET request for wallet:", wallet);

  const { data, error } = await supabase
    .from("tiers")
    .select("data")
    .eq("wallet", wallet)
    .order("created_at", { ascending: false }) // newest first
    .limit(1)
    .maybeSingle(); // ✅ doesn't fail if more than one row

  if (error || !data) {
    console.warn("⚠️ No recent tier data found for:", wallet);
    return res.status(404).json({ error: "No tiers found" });
  }

  return res.status(200).json(data);
});

export default router;
