import { XMarkIcon } from "@heroicons/react/24/outline";

interface WalletWindowProps {
  isOpen: boolean;
  onClose: () => void;
  walletAddress?: string;
}

export default function WalletWindow({ isOpen, onClose, walletAddress }: WalletWindowProps) {
  return (
    <>
      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
          onClick={onClose}
        />
      )}

      {/* Slide-in Panel */}
      <div
        className={`fixed top-[0px] right-[0px] h-full w-[360px] bg-[#1a1d23] text-white z-[99] shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm text-gray-400">Connected</div>
              <div className="font-mono text-green-400 text-sm break-all">
                {walletAddress || "Unknown"}
              </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Tab section placeholder */}
          <div className="flex gap-2 text-sm mb-4">
            <button className="bg-gray-700 text-white px-3 py-1 rounded">Instant</button>
            <button className="bg-gray-800 text-gray-300 px-3 py-1 rounded hover:bg-gray-700">Trigger</button>
            <button className="bg-gray-800 text-gray-300 px-3 py-1 rounded hover:bg-gray-700">Recurring</button>
          </div>

          <div className="text-sm text-gray-400 flex-1">
            <p className="mb-4">🧾 Swap history will appear here.</p>
            <p className="text-xs text-gray-600">End of list</p>
          </div>
        </div>
      </div>
    </>
  );
}
