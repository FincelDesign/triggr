import express from "express";
import { PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";
import supabase from "../supabaseClient";

const router = express.Router();

router.post("/", async (req, res) => {
  const { wallet, tiers, message, signature } = req.body;

  console.log("🔐 Incoming Save Request:");
  console.log("🧾 Wallet:", wallet);
  console.log("📩 Message:", message);
  console.log("🖊 Signature:", signature?.slice(0, 20) + "...");

  if (!wallet || !tiers || !message || !signature || !Array.isArray(tiers)) {
    return res.status(400).json({ error: "Missing or invalid fields" });
  }

  try {
    const pubkey = new PublicKey(wallet);
    const msgBytes = new TextEncoder().encode(message);
    const sigBytes = Buffer.from(signature, "base64");

    const verified = nacl.sign.detached.verify(msgBytes, sigBytes, pubkey.toBytes());

    if (!verified) {
      console.warn("❌ Signature verification failed");
      return res.status(401).json({ error: "Invalid signature" });
    }
  } catch (err) {
    console.error("❌ Signature check error:", err);
    return res.status(500).json({ error: "Verification error" });
  }

  const { error } = await supabase
    .from("tiers")
    .upsert({ wallet, data: tiers });

  if (error) {
    console.error("❌ Supabase insert error:", error);
    return res.status(500).json({ error: "Failed to save tiers" });
  }

  return res.status(200).json({ message: "Tiers saved to Supabase (verified)" });
});

export default router;
