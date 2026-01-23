import { IJourneyService } from "./interfaces";
import { createJourneyService } from "./service";
import { JourneyRepository } from "./repository";

export function createJourneyFeature(service: IJourneyService) {
  return {
    getDailyJourney: service.getDailyJourney,
  };
}

const journeyRepository = new JourneyRepository();
const journeyService: IJourneyService = createJourneyService(journeyRepository);
export const journeyFeature = createJourneyFeature(journeyService);
export type JourneyFeature = ReturnType<typeof createJourneyFeature>;
