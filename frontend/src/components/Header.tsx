import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { useWallet } from "@solana/wallet-adapter-react";
import ConnectWallet from "./ConnectWallet";

interface HeaderProps {
  onCogClick: () => void;
}

export default function Header({ onCogClick }: HeaderProps) {
  const { publicKey } = useWallet();
  const shortAddress = publicKey?.toBase58();

  return (
    <header className="w-full px-6 py-4 bg-[#1a1d23]/80 border-b border-gray-800 shadow-sm flex items-center justify-between backdrop-blur-sm z-10">
      {/* Left Side: Logo + Nav */}
      <div className="flex items-center space-x-6">
        <div className="text-green-400 font-bold text-lg tracking-wide">Triggr</div>
        <nav className="hidden md:flex items-center space-x-4 text-sm text-gray-400">
          <button className="hover:text-white">Spot</button>
          <button className="hover:text-white">Trigger</button>
          <button className="hover:text-white">Recurring</button>
        </nav>
      </div>

      {/* Right Side: Settings + Wallet */}
      <div className="flex items-center space-x-4">
        <button
          title="Open Wallet Panel"
          onClick={onCogClick}
          className="flex items-center justify-center p-2 rounded-full hover:bg-[#2a2d36] transition"
        >
          <Cog8ToothIcon className="w-[30px] h-[30px] text-white opacity-70 hover:opacity-100 transition" />
        </button>
        <ConnectWallet />
      </div>
    </header>
  );
}
