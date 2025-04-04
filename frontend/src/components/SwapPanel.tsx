import { useState } from "react";
import InstantTab from "./tabs/InstantTab";
import TriggerTab from "./tabs/TriggerTab";
import RecurringTab from "./tabs/RecurringTab";

const TABS = ["Instant", "Trigger", "Recurring"];

export default function SwapPanel() {
  const [active, setActive] = useState("Instant");

  const renderTab = () => {
    switch (active) {
      case "Instant":
        return <InstantTab />;
      case "Trigger":
        return <TriggerTab />;
      case "Recurring":
        return <RecurringTab />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-[480px] bg-[#1c1f26] border border-[#2a2d36] rounded-2xl shadow-lg backdrop-blur-sm p-5 transition-all duration-300">
      {/* Tabs */}
      <div className="flex space-x-2 mb-4">
        {TABS.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`flex-1 text-sm font-medium py-2 rounded-lg transition-all ${
                isActive
                  ? "bg-[#2a2d36] text-green-400 shadow-inner"
                  : "bg-transparent text-gray-400 hover:text-white hover:bg-[#2a2d36]"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="bg-[#2a2d36] p-4 rounded-xl shadow-inner min-h-[200px]">
        {renderTab()}
      </div>
    </div>
  );
}
