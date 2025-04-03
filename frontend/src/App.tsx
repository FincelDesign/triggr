import ConnectWallet from "./components/ConnectWallet";
import TierBuilder from "./components/TierBuilder";
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">🚀 Triggr</h1>
      <p className="text-sm text-gray-400 mb-10">
        Solana limit order automation for SPL & tax tokens
      </p>

      <ConnectWallet />
      <TierBuilder />

      <div className="border border-gray-700 rounded-lg p-4">
        <p className="text-gray-300">🚧 Tier Builder UI coming soon...</p>
      </div>
    </div>
  );
}
