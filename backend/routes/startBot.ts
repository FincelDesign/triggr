import express from "express";
import { PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";

const router = express.Router();

router.post("/", (req, res) => {
  const { wallet, tiers, message, signature } = req.body;

  console.log("🔥 /api/start-bot route was hit!");

  if (!wallet || !tiers || !message || !signature || !Array.isArray(tiers)) {
    return res.status(400).json({ error: "Missing or invalid fields" });
  }

  try {
    // Timestamp check
    const match = message.match(/\((\d+)\)/);
    const timestamp = match ? parseInt(match[1], 10) : null;
    const now = Date.now();

    if (!timestamp || now - timestamp > 60_000) {
      return res.status(401).json({ error: "Signature expired" });
    }

    const pubkey = new PublicKey(wallet);
    const msgBytes = new TextEncoder().encode(message);
    const sigBytes = Buffer.from(signature, "base64");

    const verified = nacl.sign.detached.verify(msgBytes, sigBytes, pubkey.toBytes());

    if (!verified) {
      console.warn("❌ Invalid signature");
      return res.status(401).json({ error: "Invalid signature" });
    }

    console.log("🧾 Wallet:", wallet);
    console.log("📊 Tiers:", tiers);
    return res.status(200).json({ message: "Bot started!" });

  } catch (err) {
    console.error("❌ Verification error:", err);
    return res.status(500).json({ error: "Verification error" });
  }
});

export default router;
