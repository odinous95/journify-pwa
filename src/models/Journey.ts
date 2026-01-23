// src/models/journey.model.ts

import { mapStepToVM, Step, StepDTO } from "./Step";

// ---------------------
// Backend shape (DTO)
// ---------------------
export type JourneyDTO = {
  id: string;
  userId: string;
  journeyName: string;
  createdAt: string;
  steps: StepDTO[];
};

// ---------------------
// UI/ViewModel shape
// ---------------------
export type Journey = {
  id: string;
  title: string;
  createdAt: string;
  stepCount: number;
  steps?: Step[];
};

// ---------------------
// Mapper
// ---------------------
export function mapJourneyToVM(dto: JourneyDTO): Journey {
  return {
    id: dto.id,
    title: dto.journeyName, // rename for UI
    createdAt: dto.createdAt,
    stepCount: dto.steps.length, // example derived field
    steps: dto.steps?.map(mapStepToVM) ?? [],
  };
}
