import { Step } from "@/src/view.models/StepVM";

export interface IJourneyRepository {
  getSteps(): Promise<Step[]>;
  addStep(step: Step): Promise<void>;
}

export interface IJourneyCache {
  saveSteps(steps: Step[]): Promise<void>;
}
