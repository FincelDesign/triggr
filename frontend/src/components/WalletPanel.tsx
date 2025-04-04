import { XMarkIcon } from "@heroicons/react/24/outline";

interface WalletPanelProps {
  visible: boolean;
  onClose: () => void;
  walletAddress?: string;
}

export default function WalletPanel({ visible, onClose, walletAddress }: WalletPanelProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[360px] bg-[#1a1d23] z-[999] border-l border-gray-700 p-6 flex flex-col transition-transform duration-300 transform-gpu ${
        visible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-sm text-gray-400">Connected</div>
          <div className="font-mono text-green-400 text-sm break-all">
            {walletAddress || "..."}
          </div>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 text-sm mb-4">
        <button className="bg-gray-700 text-white px-3 py-1 rounded">Instant</button>
        <button className="bg-gray-800 text-gray-300 px-3 py-1 rounded hover:bg-gray-700">
          Trigger
        </button>
        <button className="bg-gray-800 text-gray-300 px-3 py-1 rounded hover:bg-gray-700">
          Recurring
        </button>
      </div>

      {/* Content placeholder */}
      <div className="text-gray-400 text-sm flex-1">
        <p>🧾 Your swap history will appear here.</p>
        <div className="mt-6">
          <p className="text-xs text-gray-600">End of list</p>
        </div>
      </div>
    </div>
  );
};

