"use client";

import { useState, useEffect, useCallback } from 'react';

interface UseLoadingOptions {
  initialDelay?: number;
  minimumDuration?: number;
  enableTransitions?: boolean;
  loadingSteps?: string[];
}

interface LoadingState {
  isLoading: boolean;
  currentStep: string;
  progress: number;
  setLoading: (loading: boolean) => void;
  nextStep: (step?: string) => void;
  complete: () => void;
}

export function useLoading({
  initialDelay = 300,
  minimumDuration = 800,
  enableTransitions = true,
  loadingSteps = ['Loading...']
}: UseLoadingOptions = {}): LoadingState {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [startTime] = useState(Date.now());

  const currentStep = loadingSteps[currentStepIndex] || loadingSteps[0];

  // Auto-progress through steps
  useEffect(() => {
    if (!enableTransitions || loadingSteps.length <= 1) return;

    const stepDuration = minimumDuration / loadingSteps.length;
    const timer = setInterval(() => {
      setCurrentStepIndex(prev => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, [loadingSteps, minimumDuration, enableTransitions]);

  // Update progress
  useEffect(() => {
    if (!enableTransitions) return;

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / minimumDuration) * 100, 95);
      setProgress(newProgress);
    }, 50);

    return () => clearInterval(progressTimer);
  }, [startTime, minimumDuration, enableTransitions]);

  const setLoading = useCallback((loading: boolean) => {
    if (!loading) {
      // Ensure minimum duration has passed
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumDuration - elapsed);
      
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 100); // Small delay for 100% progress animation
      }, remainingTime);
    } else {
      setIsLoading(true);
      setCurrentStepIndex(0);
      setProgress(0);
    }
  }, [startTime, minimumDuration]);

  const nextStep = useCallback((step?: string) => {
    if (step) {
      const stepIndex = loadingSteps.indexOf(step);
      if (stepIndex !== -1) {
        setCurrentStepIndex(stepIndex);
      }
    } else {
      setCurrentStepIndex(prev => Math.min(prev + 1, loadingSteps.length - 1));
    }
  }, [loadingSteps]);

  const complete = useCallback(() => {
    setLoading(false);
  }, [setLoading]);

  // Initial delay
  useEffect(() => {
    if (initialDelay > 0) {
      const timer = setTimeout(() => {
        // This can be used to trigger any initial loading logic
      }, initialDelay);

      return () => clearTimeout(timer);
    }
  }, [initialDelay]);

  return {
    isLoading,
    currentStep,
    progress,
    setLoading,
    nextStep,
    complete
  };
}

// Predefined loading step configurations
export const LOADING_STEPS = {
  auth: ['Authenticating...', 'Loading profile...', 'Setting up dashboard...'],
  dashboard: ['Loading dashboard...', 'Fetching your fonts...', 'Preparing interface...'],
  fontCreation: ['Preparing font creator...', 'Loading AI tools...', 'Setting up workspace...'],
  landing: ['Loading experience...', 'Preparing animations...', 'Ready!'],
  general: ['Loading...', 'Almost ready...', 'Done!']
};

export default useLoading;