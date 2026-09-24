"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Load data from localStorage on initial client mount
  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem("fitlog_plan");
      const savedLifts = localStorage.getItem("fitlog_saved");
      const savedDone = localStorage.getItem("fitlog_completed");

      if (savedPlan) setPlan(JSON.parse(savedPlan));
      if (savedLifts) setSaved(JSON.parse(savedLifts));
      if (savedDone) setCompleted(JSON.parse(savedDone));
    } catch (error) {
      console.error("Error reading localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // 2. Save data to localStorage ONLY after initial load has finished
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("fitlog_plan", JSON.stringify(plan));
    } catch (e) {
      console.error(e);
    }
  }, [plan, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("fitlog_saved", JSON.stringify(saved));
    } catch (e) {
      console.error(e);
    }
  }, [saved, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("fitlog_completed", JSON.stringify(completed));
    } catch (e) {
      console.error(e);
    }
  }, [completed, isLoaded]);

  // Helper for popup messages
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  // Add to today's plan (with 5 lift limit)
  const addToPlan = (workout) => {
    if (!workout) return;
    const exists = plan.some((item) => String(item.id) === String(workout.id));
    if (exists) {
      showToast("Already in today's plan!");
      return;
    }

    if (plan.length >= 5) {
      showToast("You can only add up to 5 lifts for today!");
      return;
    }

    setPlan((prev) => [...prev, workout]);
    showToast("Added to today's plan!");
  };

  // Remove from plan
  const removeFromPlan = (id) => {
    setPlan((prev) => prev.filter((item) => String(item.id) !== String(id)));
    setCompleted((prev) => prev.filter((itemId) => String(itemId) !== String(id)));
    showToast("Removed from today's plan");
  };

  // Save for later
  const saveWorkout = (workout) => {
    if (!workout) return;
    const exists = saved.some((item) => String(item.id) === String(workout.id));
    if (exists) {
      showToast("Already in saved lifts!");
      return;
    }

    setSaved((prev) => [...prev, workout]);
    showToast("Saved for later!");
  };

  // Remove from saved
  const removeSaved = (id) => {
    setSaved((prev) => prev.filter((item) => String(item.id) !== String(id)));
    showToast("Removed from saved list");
  };

  // Toggle completed status
  const toggleCompleted = (id) => {
    const stringId = String(id);
    const isDone = completed.some((item) => String(item) === stringId);

    if (isDone) {
      setCompleted((prev) => prev.filter((item) => String(item) !== stringId));
      showToast("Marked as incomplete");
    } else {
      setCompleted((prev) => [...prev, id]);
      showToast("Workout marked as done!");
    }
  };

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        completed,
        toastMessage,
        isLoaded,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
        toggleCompleted,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  return useContext(WorkoutContext);
};
