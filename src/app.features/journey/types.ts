import { Step } from "@/src/view.models/StepVM";

export interface IJourneyRepository {
  getSteps(): Promise<Step[]>;
}

export interface IJourneyCache {
  saveSteps(steps: Step[]): Promise<void>;
}
