import Image from "next/image";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0c0d10] border-t border-[#1c1f26] py-8 mt-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="relative w-5 h-5 flex items-center justify-center">
            <Image
              src={logoImg}
              alt="FitLog Logo"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <span className="font-['Oswald',sans-serif] font-bold text-lg uppercase tracking-wider text-white">
            FITLOG
          </span>
        </div>

        <p className="text-xs text-[#9ca3af] text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
