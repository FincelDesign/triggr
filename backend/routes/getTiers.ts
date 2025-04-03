import express from "express";
import supabase from "../supabaseClient";

const router = express.Router();

router.get("/:wallet", async (req, res) => {
  const { wallet } = req.params;

  const { data, error } = await supabase
    .from("tiers")
    .select("data")
    .eq("wallet", wallet)
    .single();

  if (error) {
    return res.status(404).json({ error: "No tiers found for wallet" });
  }

  return res.status(200).json(data);
});

export default router;
