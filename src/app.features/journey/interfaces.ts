import { Journey, JourneyVM, Step } from "../../models";

export interface IJourneyRepository {
  getDailyJourney(): Promise<Journey[]>;
  addDailyStep(step: Partial<Step>): Promise<Response>;
}

export interface IJourneyService {
  getDailyJourney(): Promise<JourneyVM>;
  addDailyStep(data: Partial<Step>): Promise<ActionResponse>;
}

export interface ActionResponse<T = null> {
  success: boolean;
  message: string;
  errors?: T;
}

export type AddDailyStepInput = Partial<Step>;
