# 💪 FitLog — Workout Library & Gym Companion

FitLog is a modern, dark-themed gym companion web application built with **Next.js 16 (App Router)** and **Tailwind CSS**. Pick a lift, inspect comprehensive exercise specifications, lock lifts into today's workout plan, monitor real-time metrics, and track your fitness progress with intent.

---

## 🔗 Project Links

- **Live Demo Link:** *(Add your deployed link here)*
- **GitHub Repository:** [https://github.com/niaz404/fit-log](https://github.com/niaz404/fit-log)

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | Full-stack React framework for server/client rendering and routing |
| **React 19** | Modern UI component rendering and reactive state |
| **Tailwind CSS v4** | Utility-first CSS framework for responsive dark design tokens |
| **Google Fonts (Oswald & Inter)** | Typography via `next/font/google` for bold display and sleek readability |
| **LocalStorage API** | Client-side persistence for workout plans and saved lists |
| **FitLog REST API** | Exercise data source (`https://api.abcz.workers.dev/api/fitlog`) |

---

## ✨ Key Features (Minimum 5 Highlights)

1. **🏋️ Dynamic Workout Library Grid:**
   - Real-time API data fetching covering lifts for all major muscle groups (Chest, Arms, Legs, Core, Back, Shoulders).
   - Rich card UI with visual thumbnails, category pills, equipment requirements, duration, calories burned, and community ratings.

2. **📋 Deep Workout Detail Specifications (`/workout/[id]`):**
   - High-resolution visual illustration.
   - Comprehensive **Key Specifications Table** (`EQUIPMENT`, `DIFFICULTY`, `SETS`, `REPS`, `DURATION`, `CALORIES`, `RATING`).
   - Step-by-step numbered instructions with formatted badges.
   - Interactive action buttons to add lifts directly into today's plan or save for later.

3. **📊 Live Metrics Summary & Daily Planner (`/my-plan`):**
   - Real-time calculating dashboard showing total **Exercises**, cumulative **Minutes**, and total **Calories burned**.
   - Tab switching between **Today's Plan** and **Saved Lifts**.
   - Dedicated empty states guiding users back to the workout library when no exercises are queued.

4. **⚡ Multi-Criteria Sorting & List Management:**
   - Instant live sorting dropdown by **Duration**, **Calories Burned**, or **Rating**.
   - One-click **"Mark as Done"** completion toggle and quick removal (`X`) buttons.

5. **🔔 Reactive Navbar Counters & Toast Feedback:**
   - Real-time badge counters in the navbar reflecting active items in Today's Plan and Saved lists.
   - Non-intrusive toast popups providing feedback on user actions (e.g. *"Added to today's plan"*, *"Saved for later"*, *"Workout marked as done!"*).
   - Built-in 5-lift cap protection to ensure realistic, focused daily training volume.

6. **📱 100% Responsive & Dark Aesthetic Design:**
   - Pixel-perfect implementation matching Figma specifications.
   - Seamless scaling across mobile devices (<640px), tablets (640px-1024px), and desktop monitors (>1024px).
   - Custom styled 404 error page for invalid routes.
   - Animated loading skeleton state during data fetches.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/niaz404/fit-log.git
cd fit-log/my-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 📄 License
Created for assignment evaluation. © 2026 FitLog — Train hard, log honest.
