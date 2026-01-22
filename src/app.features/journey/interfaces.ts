import { Step } from "@/src/view.models/StepVM";

export interface IJourneyOnlineRepository {
  getSteps(): Promise<Step[]>;
  addStep(step: Step): Promise<Step>;
}

export interface IJourneyOfflineRepository {
  getSteps(): Promise<Step[]>;
  saveSteps(steps: Step[]): Promise<void>;
  saveStep(step: Step): Promise<void>;
  getPendingSteps(): Promise<Step[]>;
  updateStep(step: Step): Promise<void>;
}

export interface IJourneyService {
  getSteps(): Promise<Step[]>;
  addStep(step: Step): Promise<void>;
}
export interface ISyncService {
  sync(): Promise<void>;
}
