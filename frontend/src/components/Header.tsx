import ConnectWallet from "./ConnectWallet";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Header() {
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
        <ArrowRightIcon className="h-6 w-6 text-white" />
        <button title="Settings" className="p-2 rounded-full border border-yellow-500 bg-black">
          <Cog6ToothIcon className="h-5 w-5 text-white opacity-60 hover:opacity-100 transition" />
        </button>
        <ConnectWallet />
      </div>
    </header>
  );
}
