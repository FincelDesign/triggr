import Header from "./components/Header";
import SwapPanel from "./components/SwapPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-[#12141a] text-white flex flex-col">
      <Header />
      <main className="flex-1 flex justify-center items-center relative">
        <SwapPanel />
      </main>
    </div>
  );
}