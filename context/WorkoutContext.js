"use client";

import { createContext, useContext, useState, useEffect } from "react";

// 1. Create the Context
export const WorkoutContext = createContext();

// 2. Create the Provider Component
export const WorkoutProvider = ({ children }) => {
  // Simple states
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  // Load saved data when the website opens
  useEffect(() => {
    const savedPlan = localStorage.getItem("my_plan");
    const savedLifts = localStorage.getItem("my_saved");
    const savedDone = localStorage.getItem("my_completed");

    if (savedPlan) setPlan(JSON.parse(savedPlan));
    if (savedLifts) setSaved(JSON.parse(savedLifts));
    if (savedDone) setCompleted(JSON.parse(savedDone));
  }, []);

  // Save to localStorage whenever plan changes
  useEffect(() => {
    localStorage.setItem("my_plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("my_saved", JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem("my_completed", JSON.stringify(completed));
  }, [completed]);

  // Helper function to show popup message
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  // Function to Add workout to Today's Plan
  const addToPlan = (workout) => {
    // Check if already added
    const alreadyExists = plan.some((item) => item.id === workout.id);
    if (alreadyExists) {
      showToast("Already in today's plan!");
      return;
    }

    // Check 5 workout limit
    if (plan.length >= 5) {
      showToast("You can only add up to 5 lifts for today!");
      return;
    }

    // Add to plan list
    setPlan([...plan, workout]);
    showToast("Added to today's plan!");
  };

  // Function to Remove workout from Today's Plan
  const removeFromPlan = (id) => {
    const updatedPlan = plan.filter((item) => item.id !== id);
    setPlan(updatedPlan);

    // Also remove from completed if it was done
    setCompleted(completed.filter((itemId) => itemId !== id));
    showToast("Removed from today's plan");
  };

  // Function to Save for Later
  const saveWorkout = (workout) => {
    const alreadySaved = saved.some((item) => item.id === workout.id);
    if (alreadySaved) {
      showToast("Already saved!");
      return;
    }

    setSaved([...saved, workout]);
    showToast("Saved for later!");
  };

  // Function to Remove from Saved
  const removeSaved = (id) => {
    const updatedSaved = saved.filter((item) => item.id !== id);
    setSaved(updatedSaved);
    showToast("Removed from saved list");
  };

  // Function to Mark as Done / Incomplete
  const toggleCompleted = (id) => {
    if (completed.includes(id)) {
      setCompleted(completed.filter((itemId) => itemId !== id));
      showToast("Marked as incomplete");
    } else {
      setCompleted([...completed, id]);
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

// 3. Custom Hook to easily use the context
export const useWorkout = () => {
  return useContext(WorkoutContext);
};
