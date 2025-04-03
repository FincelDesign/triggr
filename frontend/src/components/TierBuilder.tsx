import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

interface Tier {
  price: number;
  amount: number;
}

export default function TierBuilder() {
  const { publicKey } = useWallet();
  const [tiers, setTiers] = useState<Tier[]>([]);

  const walletKey = publicKey?.toBase58();
  const localKey = walletKey ? `tiers-${walletKey}` : "";
  console.log("📡 walletKey:", walletKey);
  console.log("💾 localKey:", localKey);

  // Load saved tiers when wallet connects
  useEffect(() => {
    if (walletKey) {
      const saved = localStorage.getItem(localKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setTiers(parsed);
        } catch {
          console.warn("⚠️ Failed to parse saved tiers");
        }
      } else {
        setTiers([{ price: 0.01, amount: 10000 }]); // default tier
      }
    }
  }, [walletKey]);

  const handleChange = (index: number, field: keyof Tier, value: string) => {
    const updated = [...tiers];
    updated[index][field] = parseFloat(value);
    setTiers(updated);
  };

  const addTier = () => {
    setTiers([...tiers, { price: 0, amount: 0 }]);
  };

  const removeTier = (index: number) => {
    const filtered = tiers.filter((_, i) => i !== index);
    setTiers(filtered);
  };

  const handleSave = () => {
    if (!walletKey) {
      alert("⚠️ Connect your wallet to save tiers.");
      return;
    }
  
    try {
      localStorage.setItem(localKey, JSON.stringify(tiers));
      alert("✅ Tiers saved!");
    } catch (err) {
      console.error("Failed to save tiers:", err);
      alert("❌ Failed to save tiers.");
    }
  };

  return (
    <div className="mt-10 bg-gray-900 rounded-lg p-6 border border-gray-700">
      <h2 className="text-xl font-semibold mb-4">🎯 Build Your Limit Tiers</h2>

      <table className="w-full mb-4 text-sm">
        <thead>
          <tr className="text-gray-400 border-b border-gray-700">
            <th className="text-left py-2">Price (USDC)</th>
            <th className="text-left py-2">Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tiers.map((tier, index) => (
            <tr key={index} className="border-b border-gray-800">
              <td className="py-2 pr-4">
                <input
                  type="number"
                  step="0.00001"
                  value={tier.price}
                  onChange={(e) => handleChange(index, "price", e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white"
                />
              </td>
              <td className="py-2 pr-4">
                <input
                  type="number"
                  value={tier.amount}
                  onChange={(e) => handleChange(index, "amount", e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white"
                />
              </td>
              <td>
                <button
                  onClick={() => removeTier(index)}
                  className="text-red-400 hover:text-red-600"
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between">
        <button
          onClick={addTier}
          className="text-sm text-blue-400 hover:text-blue-600"
        >
          ➕ Add Tier
        </button>

        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Save Tiers
        </button>
      </div>
      {tiers.length > 0 && (
        <div className="mt-8">
          <h3 className="text-md font-semibold mb-2 text-gray-200">📊 Tier Summary</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            {tiers.map((tier, i) => (
              <li key={i}>
                Price: ${tier.price.toFixed(5)}, Amount: {tier.amount}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={async () => {
          if (!walletKey) {
            alert("⚠️ Connect your wallet first.");
            return;
          }

          try {
            const res = await fetch("http://localhost:5000/api/start-bot", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ wallet: walletKey, tiers }),
            });

            if (res.ok) {
              alert("✅ Bot started successfully!");
            } else {
              alert("❌ Failed to start bot.");
            }
          } catch (err) {
            console.error("🔥 Bot start error:", err);
            alert("❌ Network error while starting bot.");
          }
        }}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition mt-6"
      >
        ▶️ Start Bot
      </button>

    </div>
    
  );
}
