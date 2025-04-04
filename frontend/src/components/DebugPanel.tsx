export default function DebugPanel() {
    return (
      <div className="fixed top-0 right-0 w-[320px] h-full bg-red-700 text-white p-4 z-[9999] shadow-xl border-l border-white">
        <p className="text-xl font-bold">🔥 Debug Panel</p>
        <p className="mt-4">This should stick to the right edge.</p>
        <p className="mt-2">If not, layout or overflow is broken.</p>
      </div>
    );
  }
  