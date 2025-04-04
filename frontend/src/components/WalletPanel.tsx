import { XMarkIcon } from "@heroicons/react/24/outline";

interface WalletPanelProps {
  onClose: () => void;
  walletAddress?: string;
}

export default function WalletPanel({ onClose, walletAddress }: WalletPanelProps) {
  return (
    <div className="fixed top-0 right-0 w-[360px] h-full bg-[#1a1d23] z-[999] border-l border-gray-700 p-6 flex flex-col shadow-2xl animate-slide-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-sm text-gray-400">Connected</div>
          <div className="font-mono text-green-400 text-sm">{walletAddress || "Unknown"}</div>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 text-sm mb-4">
        <button className="bg-gray-700 text-white px-3 py-1 rounded">Instant</button>
        <button className="bg-gray-800 text-gray-300 px-3 py-1 rounded hover:bg-gray-700">Trigger</button>
        <button className="bg-gray-800 text-gray-300 px-3 py-1 rounded hover:bg-gray-700">Recurring</button>
      </div>

      {/* Content */}
      <div className="text-gray-400 text-sm flex-1">
        <p>🧾 Your swap history will appear here.</p>
        <div className="mt-6 text-xs text-gray-600">End of list</div>
      </div>
    </div>
  );
}
