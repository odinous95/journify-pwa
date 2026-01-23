import { Journey } from "../../models";

export interface IJourneyRepository {
  getDailyJourney(): Promise<Journey>;
}

export interface IJourneyService {
  getDailyJourney(): Promise<Journey>;
}
