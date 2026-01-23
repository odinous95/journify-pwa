import { JourneyRepository } from "./repository";

export function createJourneyService(repo: JourneyRepository) {
  async function getDailyJourney() {
    return await repo.getDailyJourney();
  }
  return { getDailyJourney };
}
