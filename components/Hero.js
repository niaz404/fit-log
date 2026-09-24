import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-10">
      <div className="relative bg-[#12141a] border border-[#1e222b] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6 z-10">
            <span className="text-[#c2f800] text-xs sm:text-sm font-bold tracking-widest uppercase">
              WORKOUT LIBRARY
            </span>

            <h1 className="font-['Oswald',sans-serif] font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.08] tracking-tight uppercase text-white">
              TRAIN WITH INTENT. LOG <br className="hidden sm:inline" />
              EVERY SET.
            </h1>

            <p className="text-[#9ca3af] text-sm sm:text-base leading-relaxed max-w-[460px]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <Link
              href="#library"
              className="inline-flex items-center justify-center gap-2 bg-[#c2f800] hover:bg-[#b2e600] text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-lg uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] mt-2 shadow-[0_0_20px_rgba(194,248,0,0.15)]"
            >
              <span>BROWSE WORKOUTS</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none aspect-square flex items-center justify-center">
              <Image
                src={bannerImg}
                alt="FitLog Workout Machine Banner"
                priority
                className="object-contain w-full h-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
