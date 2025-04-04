import Header from "./components/Header";
import SwapPanel from "./components/SwapPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-[#12141a] text-white flex flex-col items-center justify-start">
      <Header />

      <main className="flex flex-1 w-full justify-center items-center px-4">
        <SwapPanel />
      </main>
    </div>
  );
}
