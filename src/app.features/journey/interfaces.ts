import { Journey, JourneyDTO } from "../../models";

export interface IJourneyRepository {
  getDailyJourney(): Promise<JourneyDTO[]>;
}

export interface IJourneyService {
  getDailyJourney(): Promise<Journey>;
}
