"use client";

import { useWorkout } from "@/context/WorkoutContext";

const WorkoutDetailActions = ({ workout }) => {
  const {
    addToPlan,
    removeFromPlan,
    saveWorkout,
    removeSaved,
    plan,
    saved,
  } = useWorkout();

  // Safe string ID comparison
  const isAlreadyInPlan = plan.some(
    (item) => String(item.id) === String(workout.id)
  );
  const isAlreadySaved = saved.some(
    (item) => String(item.id) === String(workout.id)
  );
  const isPlanFull = plan.length >= 5;

  const handlePlanClick = () => {
    if (isAlreadyInPlan) {
      removeFromPlan(workout.id);
    } else {
      addToPlan(workout);
    }
  };

  const handleSaveClick = () => {
    if (isAlreadySaved) {
      removeSaved(workout.id);
    } else {
      saveWorkout(workout);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      {/* Add / Remove from Today's Plan */}
      <button
        type="button"
        onClick={handlePlanClick}
        disabled={!isAlreadyInPlan && isPlanFull}
        className={`inline-flex items-center gap-2 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg uppercase tracking-wider transition-all duration-200 ${
          isAlreadyInPlan
            ? "bg-[#1a2312] text-[#c2f800] border border-[#c2f800]/40 hover:bg-[#25331a]"
            : isPlanFull
            ? "bg-[#2d313b] text-[#9ca3af] cursor-not-allowed"
            : "bg-[#c2f800] hover:bg-[#b2e600] text-black hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_20px_rgba(194,248,0,0.15)]"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isAlreadyInPlan ? (
            <path
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          ) : (
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="3"
              strokeWidth="2"
            />
          )}
        </svg>
        {isAlreadyInPlan
          ? "In today's plan (Click to remove)"
          : isPlanFull
          ? "Plan full (Cap 5)"
          : "Add to today's plan"}
      </button>

      {/* Save / Unsave for Later */}
      <button
        type="button"
        onClick={handleSaveClick}
        className={`inline-flex items-center gap-2 font-medium text-xs sm:text-sm px-5 py-2.5 rounded-lg uppercase tracking-wider transition-all duration-200 ${
          isAlreadySaved
            ? "bg-[#181d26] text-[#93c5fd] border border-[#3b82f6]/40 hover:bg-[#1f2838]"
            : "bg-[#12141a] hover:bg-[#1a202c] border border-[#232936] text-white hover:scale-[1.01] active:scale-[0.99]"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill={isAlreadySaved ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
        {isAlreadySaved ? "Saved (Click to unsave)" : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutDetailActions;
