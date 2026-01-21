import { Step } from "@/src/view.models/StepVM";

export interface IJourneyCache {
  saveSteps(steps: Step[]): Promise<void>;
}

export interface IJourneyRepository {
  getSteps(): Promise<Step[]>;
}
