import { useWallet } from "@solana/wallet-adapter-react";
import { useMemo } from "react";

export default function ConnectWallet() {
  const { publicKey, connect, disconnect, connected } = useWallet();

  const shortAddress = useMemo(() => {
    if (!publicKey) return "";
    const base58 = publicKey.toBase58();
    return `${base58.slice(0, 4)}...${base58.slice(-4)}`;
  }, [publicKey]);

  return connected ? (
    <button
      title="Disconnect"
      onClick={() => disconnect()}
      className="px-4 py-1.5 bg-[#1f222b] text-sm rounded-lg border border-gray-700 text-green-400 hover:bg-[#2a2d36] transition-all font-mono"
    >
      {shortAddress}
    </button>
  ) : (
    <button
      onClick={() => connect()}
      className="px-4 py-1.5 bg-[#2a2d36] text-sm rounded-lg border border-gray-600 text-gray-300 hover:bg-[#333843] transition"
    >
      Connect
    </button>
  );
}
