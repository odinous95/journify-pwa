import { IJourneyService } from "./interfaces";

export function createJourneyFeature(service: IJourneyService) {
  return {
    getDailyJourney: service.getDailyJourney,
  };
}
