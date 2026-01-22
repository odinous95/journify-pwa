import { Step } from "@/src/view.models";
import { OfflineRepository } from "./infrastructure/repositories/offlineRepository";
import { OnlineRepository } from "./infrastructure/repositories/onlineRepository";
import { IJourneyService } from "./interfaces";

export function createJourneyService(
  onlineRepo: OnlineRepository,
  offlineRepo: OfflineRepository,
  isOnline: () => boolean,
): IJourneyService {
  async function getSteps() {
    const localSteps = await offlineRepo.getSteps();

    if (isOnline()) {
      try {
        const remoteSteps = await onlineRepo.getSteps();

        await offlineRepo.saveSteps(remoteSteps);

        return remoteSteps;
      } catch (err) {
        console.warn("Network failed, using local cache", err);
      }
    }
    return localSteps;
  }

  async function addStep(step: Step) {
    if (isOnline()) {
      await onlineRepo.addStep(step);
    }
    await offlineRepo.saveStep(step);
  }

  return {
    getSteps,
    addStep,
  };
}
