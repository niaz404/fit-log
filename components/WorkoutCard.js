import Image from "next/image";

const WorkoutCard = ({ workout }) => {
  return (
    <div className="bg-[#12141a] border border-[#1e222b] rounded-2xl overflow-hidden flex flex-col transition-all duration-300">
      <div className="relative w-full h-48 sm:h-52 bg-[#181b22] overflow-hidden">
        {workout.image ? (
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#4b5563]">
            No Image
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="flex flex-col gap-2">
          {workout.muscleGroups && workout.muscleGroups.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {workout.muscleGroups.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#c2f800] text-black text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                >
                  {group}
                </span>
              ))}
            </div>
          )}

          <h3 className="font-['Oswald',sans-serif] font-bold text-lg sm:text-xl uppercase text-white tracking-wide mt-1">
            {workout.name}
          </h3>

          <p className="text-xs text-[#9ca3af]">
            {workout.equipment || "No equipment specified"}
          </p>
        </div>

        <div className="pt-3 border-t border-[#1c222c] flex items-center justify-between text-[#9ca3af] text-xs">
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
  );
};

export default WorkoutCard;
