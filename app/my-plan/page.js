"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Sample initial data to show the populated UI matching the Figma screens
const initialPlanWorkouts = [
  {
    id: 12,
    name: "Russian Twist",
    image:
      "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
    equipment: "Medicine Ball",
    duration: 8,
    caloriesBurned: 70,
    rating: 4.1,
  },
  {
    id: 2,
    name: "Pull-Up",
    image:
      "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691400.jpg?w=740",
    equipment: "Pull-up Bar",
    duration: 15,
    caloriesBurned: 120,
    rating: 4.7,
  },
];

const initialSavedWorkouts = [
  {
    id: 12,
    name: "Russian Twist",
    image:
      "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
    equipment: "Medicine Ball",
    duration: 8,
    caloriesBurned: 70,
    rating: 4.1,
  },
  {
    id: 2,
    name: "Pull-Up",
    image:
      "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691400.jpg?w=740",
    equipment: "Pull-up Bar",
    duration: 15,
    caloriesBurned: 120,
    rating: 4.7,
  },
];

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState("plan"); // 'plan' | 'saved'
  const [sortBy, setSortBy] = useState("Duration");
  const [planWorkouts, setPlanWorkouts] = useState(initialPlanWorkouts);
  const [savedWorkouts, setSavedWorkouts] = useState(initialSavedWorkouts);

  const currentList = activeTab === "plan" ? planWorkouts : savedWorkouts;

  // Calculate metrics
  const totalExercises = planWorkouts.length;
  const totalMinutes = planWorkouts.reduce((acc, curr) => acc + (curr.duration || 0), 0);
  const totalCalories = planWorkouts.reduce((acc, curr) => acc + (curr.caloriesBurned || 0), 0);

  // Sort logic
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "Duration") return (b.duration || 0) - (a.duration || 0);
    if (sortBy === "Calories") return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
    if (sortBy === "Rating") return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="flex flex-col gap-1 mb-8">
        <h1 className="font-['Oswald',sans-serif] font-bold text-3xl sm:text-4xl uppercase text-white tracking-tight">
          MY PLAN
        </h1>
        <p className="text-xs sm:text-sm text-[#9ca3af]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Metrics Summary Row */}
      <div className="bg-[#12141a] border border-[#1e222b] rounded-2xl p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#1c222c] gap-6 sm:gap-0">
          <div className="flex flex-col sm:px-6 first:pl-0">
            <span className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">
              Exercises
            </span>
            <span className="font-['Oswald',sans-serif] font-bold text-3xl sm:text-5xl text-[#c2f800]">
              {totalExercises}
            </span>
          </div>

          <div className="flex flex-col sm:px-6 pt-4 sm:pt-0">
            <span className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">
              Minutes
            </span>
            <span className="font-['Oswald',sans-serif] font-bold text-3xl sm:text-5xl text-white">
              {totalMinutes}
            </span>
          </div>

          <div className="flex flex-col sm:px-6 pt-4 sm:pt-0 last:pr-0">
            <span className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">
              Calories
            </span>
            <span className="font-['Oswald',sans-serif] font-bold text-3xl sm:text-5xl text-white">
              {totalCalories}
            </span>
          </div>
        </div>
      </div>

      {/* Controls Bar: Tabs & Sort */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        {/* Tabs */}
        <div className="bg-[#12141a] border border-[#1e222b] rounded-xl p-1 flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`text-xs px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === "plan"
                ? "bg-[#1c2331] text-white"
                : "text-[#9ca3af] hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`text-xs px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === "saved"
                ? "bg-[#1c2331] text-white"
                : "text-[#9ca3af] hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#9ca3af] font-medium">Sort By</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-[#12141a] border border-[#1e222b] text-white text-xs font-medium px-3.5 py-2 pr-8 rounded-lg focus:outline-none focus:border-[#c2f800] cursor-pointer"
            >
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#9ca3af]">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Cards List or Empty State */}
      {sortedList.length === 0 ? (
        <div className="border border-dashed border-[#1f2633] rounded-2xl p-12 sm:p-20 flex flex-col items-center justify-center text-center gap-4">
          <h2 className="font-['Oswald',sans-serif] font-bold text-2xl sm:text-3xl uppercase text-white tracking-wide">
            NOTHING HERE YET
          </h2>
          <p className="text-xs sm:text-sm text-[#9ca3af] max-w-sm">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#c2f800] hover:bg-[#b2e600] text-black font-bold text-xs px-6 py-2.5 rounded-full uppercase tracking-wider transition-all mt-2"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {sortedList.map((workout) => (
            <div
              key={workout.id}
              className="bg-[#12141a] border border-[#1e222b] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
            >
              {/* Left Side: Thumbnail + Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-28 h-18 sm:w-32 sm:h-20 bg-[#181b22] rounded-xl overflow-hidden shrink-0">
                  {workout.image ? (
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#4b5563] text-xs">
                      No Image
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-['Oswald',sans-serif] font-bold text-base sm:text-lg uppercase text-white tracking-wide">
                    {workout.name}
                  </h3>
                  <p className="text-xs text-[#9ca3af]">
                    {workout.equipment || "No equipment specified"}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#9ca3af] pt-1">
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#9ca3af]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path strokeWidth="2" d="M12 6v6l4 2" />
                      </svg>
                      <span>{workout.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#9ca3af]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                      </svg>
                      <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#9ca3af]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeWidth="2"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                      <span>{workout.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Actions */}
              <div className="flex items-center gap-3 self-end sm:self-center">
                <Link
                  href={`/workout/${workout.id}`}
                  className="bg-[#12141a] hover:bg-[#1a202c] border border-[#232936] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all"
                >
                  View Details
                </Link>

                {activeTab === "plan" && (
                  <button
                    type="button"
                    className="bg-[#c2f800] hover:bg-[#b2e600] text-black text-xs font-bold px-4 py-2 rounded-full transition-all"
                  >
                    Mark as Done
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
