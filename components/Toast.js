"use client";

import { useWorkout } from "@/context/WorkoutContext";

const Toast = () => {
  const { toastMessage } = useWorkout();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#c2f800] bg-[#121a12] text-white shadow-2xl">
        <div className="w-5 h-5 rounded-full bg-[#c2f800] text-black flex items-center justify-center font-bold text-xs shrink-0">
          ✓
        </div>
        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          {toastMessage}
        </span>
      </div>
    </div>
  );
};

export default Toast;
