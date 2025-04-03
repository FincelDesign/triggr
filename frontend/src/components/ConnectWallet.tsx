import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";

export default function ConnectWallet() {
  const { setVisible } = useWalletModal();
  const { connected, publicKey } = useWallet();

  //useEffect(() => {
  //  if (!connected) setVisible(true); // Auto-show modal
  //}, [connected, setVisible]);

  return (
    <div className="flex items-center gap-4 mb-4">
      {connected ? (
        <div className="text-green-400 text-sm font-mono">
          Connected: {publicKey?.toBase58().slice(0, 6)}...
        </div>
      ) : (
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          onClick={() => setVisible(true)}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
