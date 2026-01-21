import { OfflineRepository } from "./infrastructure/repositories/offlineRepository";
import { OnlineRepository } from "./infrastructure/repositories/onlineRepository";

export function createJourneyService(
  onlineRepo: OnlineRepository,
  offlineRepo: OfflineRepository,
  isOnline: () => boolean,
) {
  async function fetchSteps() {
    if (isOnline()) {
      const steps = await onlineRepo.getSteps();
      await offlineRepo.saveSteps(steps);
      return steps;
    }
    return offlineRepo.getSteps();
  }

  return {
    fetchSteps,
  };
}
