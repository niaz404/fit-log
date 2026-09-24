import Hero from "@/components/Hero";
import Library from "@/components/Library";

export const metadata = {
  title: "FitLog — Workout Library",
  description:
    "Explore 12 major lifts covering every muscle group. Plan today's workout, track intensity, and stay consistent with FitLog.",
};

async function getWorkouts() {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch workouts");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return [];
  }
}

export default async function Page() {
  const workouts = await getWorkouts();

  return (
    <div>
      <Hero />
      <Library workouts={workouts} />
    </div>
  );
}
