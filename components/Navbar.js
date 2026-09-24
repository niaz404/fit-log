"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ planCount = 0, savedCount = 0 }) => {
  const pathname = usePathname();

  const isWorkoutsActive = pathname === "/" || pathname.startsWith("/workout");
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 w-full h-[72px] sm:h-[81px] bg-[#0c0d10]/95 backdrop-blur-md border-b border-[#1c1f26]">
      <div className="max-w-[1280px] h-full mx-auto px-3 sm:px-6 flex items-center justify-between gap-2">
        <Link
          href="/"
          className="flex items-center group transition-opacity hover:opacity-90 shrink-0"
        >
          <span className="font-['Oswald',sans-serif] font-bold text-[18px] sm:text-[20px] uppercase tracking-[0.9px] text-white">
            FITLOG
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/"
            className={`text-[11px] sm:text-xs px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full transition-all duration-200 ${
              isWorkoutsActive
                ? "bg-[#1a2312] text-[#c2f800] font-semibold"
                : "text-[#9ca3af] hover:text-white font-medium"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`text-[11px] sm:text-xs px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full transition-all duration-200 ${
              isMyPlanActive
                ? "bg-[#1a2312] text-[#c2f800] font-semibold"
                : "text-[#9ca3af] hover:text-white font-medium"
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-6 shrink-0">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 sm:gap-2 group transition-opacity hover:opacity-85"
          >
            <span className="text-[11px] sm:text-xs font-medium text-[#d1d5db] group-hover:text-white transition-colors">
              Plan
            </span>
            <span className="w-[18px] h-[18px] sm:w-5 sm:h-5 rounded-full bg-[#c2f800] text-black text-[10px] sm:text-[11px] font-bold flex items-center justify-center transition-transform group-hover:scale-105">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 sm:gap-2 group transition-opacity hover:opacity-85"
          >
            <span className="text-[11px] sm:text-xs font-medium text-[#9ca3af] group-hover:text-white transition-colors">
              Saved
            </span>
            <span className="w-[18px] h-[18px] sm:w-5 sm:h-5 rounded-full border border-[#2d313b] text-[#d1d5db] text-[10px] sm:text-[11px] font-medium flex items-center justify-center transition-transform group-hover:scale-105">
              {savedCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
