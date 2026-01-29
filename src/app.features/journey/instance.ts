import { IJourneyRepository, IJourneyService } from "./interfaces";
import { createJourneyService } from "./service";
import { JourneyRepository } from "./repository";

export function createJourneyFeature(service: IJourneyService) {
  return {
    getDailyJourney: service.getDailyJourney,
    addDailyStep: service.addDailyStep,
  };
}

export function createJourneyFeatureWithToken(accessToken?: string) {
  const journeyRepository: IJourneyRepository = new JourneyRepository(
    accessToken,
  );
  const journeyService: IJourneyService =
    createJourneyService(journeyRepository);
  return createJourneyFeature(journeyService);
}

export const journeyFeature = createJourneyFeatureWithToken();
export type JourneyFeature = ReturnType<typeof createJourneyFeature>;
