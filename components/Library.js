import WorkoutCard from "./WorkoutCard";

const Library = ({ workouts = [] }) => {
  return (
    <section id="library" className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-col gap-1 mb-8">
        <h2 className="font-['Oswald',sans-serif] font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white">
          THE LIBRARY
        </h2>
        <p className="text-xs sm:text-sm text-[#9ca3af]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Library;
