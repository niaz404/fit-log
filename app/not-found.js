import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-[#c2f800] font-mono text-sm font-bold tracking-widest uppercase mb-2">
        ERROR 404
      </span>
      <h1 className="font-['Oswald',sans-serif] font-bold text-4xl sm:text-6xl uppercase text-white tracking-tight mb-4">
        WORKOUT NOT FOUND
      </h1>
      <p className="text-sm sm:text-base text-[#9ca3af] max-w-md mb-8">
        The lift or page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-[#c2f800] hover:bg-[#b2e600] text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-lg uppercase tracking-wider transition-all"
      >
        BACK TO WORKOUTS
      </Link>
    </div>
  );
}
