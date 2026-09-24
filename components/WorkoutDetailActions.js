"use client";

import { useWorkout } from "@/context/WorkoutContext";

const WorkoutDetailActions = ({ workout }) => {
  const { addToPlan, saveWorkout, plan, saved } = useWorkout();

  // Simple boolean checks
  const isAlreadyInPlan = plan.some((item) => item.id === workout.id);
  const isAlreadySaved = saved.some((item) => item.id === workout.id);

  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        disabled={isAlreadyInPlan}
        className={`inline-flex items-center gap-2 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg uppercase tracking-wider transition-all ${
          isAlreadyInPlan
            ? "bg-[#1a2312] text-[#c2f800] border border-[#c2f800]/40 opacity-90 cursor-default"
            : "bg-[#c2f800] hover:bg-[#b2e600] text-black"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth="2" />
        </svg>
        {isAlreadyInPlan ? "Added to today's plan" : "Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={() => saveWorkout(workout)}
        disabled={isAlreadySaved}
        className={`inline-flex items-center gap-2 font-medium text-xs sm:text-sm px-5 py-2.5 rounded-lg uppercase tracking-wider transition-all ${
          isAlreadySaved
            ? "bg-[#181d26] text-[#93c5fd] border border-[#3b82f6]/40 opacity-90 cursor-default"
            : "bg-[#12141a] hover:bg-[#1a202c] border border-[#232936] text-white"
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
        {isAlreadySaved ? "Saved in lifts" : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutDetailActions;
