import { Step } from "../types";

export interface IStepRepository {
  getSteps(): Promise<Step[]>;
}
