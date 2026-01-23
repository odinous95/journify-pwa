import { Repository } from "./repository";

export function createJourneyService(repo: Repository) {
  async function getDailyJourney() {
    return await repo.getDailyJourney();
  }
  return { getDailyJourney };
}
