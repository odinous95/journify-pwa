import { IJourneyRepository } from "./interfaces";

export function createJourneyService(JourneyRepository: IJourneyRepository) {
  async function getDailyJourney() {
    return await JourneyRepository.getDailyJourney();
  }
  return { getDailyJourney };
}
