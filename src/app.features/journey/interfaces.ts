import { Journey } from "@/src/view.models";

export interface IJourneyRepository {
  getDailyJourney(): Promise<Journey>;
}

export interface IJourneyService {
  getDailyJourney(): Promise<Journey>;
}
