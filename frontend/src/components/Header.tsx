import { useState } from "react";
import ConnectWallet from "./ConnectWallet";
import WalletPanel from "./WalletPanel";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Header() {
  const { publicKey } = useWallet();
  const [showPanel, setShowPanel] = useState(false);
  const shortAddress = publicKey?.toBase58();

  return (
    <>
      <header className="w-full px-6 py-4 bg-[#1a1d23]/80 border-b border-gray-800 shadow-sm flex items-center justify-between backdrop-blur-sm z-10">
        <div className="flex items-center space-x-6">
          <div className="text-green-400 font-bold text-lg tracking-wide">Triggr</div>
          <nav className="hidden md:flex items-center space-x-4 text-sm text-gray-400">
            <button className="hover:text-white">Spot</button>
            <button className="hover:text-white">Trigger</button>
            <button className="hover:text-white">Recurring</button>
          </nav>
          <button onClick={() => setShowPanel(!showPanel)}>DEBUG TOGGLE</button>
        </div>

        <div className="flex items-center space-x-4">
          <button
            title="Wallet Panel"
            onClick={() => setShowPanel(true)}
            className="flex items-center justify-center p-2 rounded-full hover:bg-[#2a2d36] transition"
          >
            <Cog8ToothIcon className="w-[30px] h-[30px] text-white opacity-70 hover:opacity-100 transition" />
          </button>
          
          <ConnectWallet />
        </div>
      </header>

      {/* Render WalletPanel only when needed */}
      {showPanel && (
        <WalletPanel
          onClose={() => setShowPanel(false)}
          walletAddress={shortAddress}
        />
      )}

      {showPanel && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-[90]"
          onClick={() => setShowPanel(false)}
        />
      )}
    </>
  );
}
