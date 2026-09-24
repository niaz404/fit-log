import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import { WorkoutProvider } from "@/context/WorkoutContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog — Workout Library & Gym Companion",
  description:
    "Explore 12 major lifts covering every muscle group. Plan today's workout, track intensity, and stay consistent with FitLog.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["gym", "workout", "fitness log", "exercise planner", "lifts"],
  authors: [{ name: "FitLog" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0d10] text-[#ededed] font-sans antialiased selection:bg-[#c2f800] selection:text-black">
        <WorkoutProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toast />
        </WorkoutProvider>
      </body>
    </html>
  );
}
