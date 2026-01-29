// src/models/journey.model.ts

import { mapStepToVM, Step, StepVM } from "./Step";

// ---------------------
// Backend shape (DTO)
// ---------------------
export type Journey = {
  id: string;
  userId: string;
  journeyName: string;
  createdAt: string;
  steps: Step[];
};

// ---------------------
// UI/ViewModel shape
// ---------------------
export type JourneyVM = {
  id: string;
  title: string;
  createdAt: string;
  stepCount: number;
  steps?: StepVM[];
};

// ---------------------
// Mapper
// ---------------------
export function mapJourneyToVM(journey: Journey): JourneyVM {
  return {
    id: journey.id,
    title: journey.journeyName, // rename for UI
    createdAt: journey.createdAt,
    stepCount: journey.steps.length, // example derived field
    steps: journey.steps?.map(mapStepToVM) ?? [],
  };
}
