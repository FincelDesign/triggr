import { useState } from "react";
import Header from "./components/Header";
import SwapPanel from "./components/SwapPanel";
import WalletWindow from "./components/WalletWindow";

export default function App() {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="min-h-screen bg-[#12141a] text-white flex flex-col relative">
      {/* App Header */}
      <Header onCogClick={() => setShowPanel(true)} />

      {/* Main Content */}
      <main className="flex flex-1 w-full justify-center items-center px-4 z-0">
        <SwapPanel />
      </main>

      {/* Backdrop Overlay (conditionally shown) */}
      {showPanel && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[40]"
          onClick={() => setShowPanel(false)}
        />
      )}

      {/* Slide-in Wallet Panel */}
      <WalletWindow
        isOpen={showPanel}
        onClose={() => setShowPanel(false)}
        walletAddress="WALLET ADDRESS HERE" // placeholder
      />

      
    </div>
  );
}
