import Image from "next/image";
import { notFound } from "next/navigation";
import WorkoutDetailActions from "@/components/WorkoutDetailActions";

async function getWorkout(id) {
  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error("Failed to fetch workout details:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);
  if (!workout) {
    return { title: "Workout Not Found — FitLog" };
  }
  return {
    title: `${workout.name} — FitLog`,
    description: workout.description,
  };
}

export default async function WorkoutDetailPage({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  const specs = [
    { label: "EQUIPMENT", value: workout.equipment || "None" },
    { label: "DIFFICULTY", value: workout.difficulty || "All levels" },
    { label: "SETS", value: workout.sets || "-" },
    { label: "REPS", value: workout.reps || "-" },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating || "-" },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Large Image */}
        <div className="lg:col-span-6 w-full">
          <div className="relative w-full aspect-square bg-[#12141a] rounded-3xl overflow-hidden border border-[#1e222b]">
            {workout.image ? (
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#4b5563]">
                No Image
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Title & Description */}
          <div className="flex flex-col gap-3">
            <h1 className="font-['Oswald',sans-serif] font-bold text-3xl sm:text-4xl lg:text-[44px] uppercase text-white tracking-tight leading-none">
              {workout.name}
            </h1>

            <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
              {workout.description}
            </p>

            {/* Muscle Category Tags */}
            {workout.muscleGroups && workout.muscleGroups.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {workout.muscleGroups.map((group, index) => (
                  <span
                    key={index}
                    className="bg-[#c2f800] text-black text-xs font-semibold px-3.5 py-1 rounded-full uppercase tracking-wide"
                  >
                    {group}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Key Specs Card */}
          <div className="bg-[#12141a] border border-[#1e222b] rounded-2xl overflow-hidden divide-y divide-[#1b202a]">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between px-5 py-3 text-xs sm:text-sm"
              >
                <span className="text-[#848d9a] font-semibold text-[11px] sm:text-xs uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-white font-medium text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          {workout.instructions && workout.instructions.length > 0 && (
            <div className="flex flex-col gap-3">
              <h2 className="font-['Oswald',sans-serif] font-bold text-base sm:text-lg uppercase text-white tracking-wide">
                INSTRUCTIONS
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-[#d1d5db]">
                {workout.instructions.map((step, idx) => (
                  <p key={idx} className="leading-relaxed">
                    <span className="text-[#9ca3af] font-medium mr-1.5">
                      {idx + 1}.
                    </span>
                    {step}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Action CTA Buttons */}
          <WorkoutDetailActions workout={workout} />
        </div>
      </div>
    </div>
  );
}
