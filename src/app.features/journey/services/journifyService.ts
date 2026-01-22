import { Step } from "@/src/view.models";
import { OfflineRepository } from "../repositories/offlineRepository";
import { ISyncService } from "../interfaces";

export function createJourneyService(
  offlineRepo: OfflineRepository,
  syncService: ISyncService,
) {
  async function getSteps() {
    const localSteps = await offlineRepo.getSteps();
    syncService.sync().catch(console.warn);
    return localSteps;
  }

  async function addStep(step: Step) {
    await offlineRepo.saveStep({ ...step, status: "pending" });
    syncService.sync().catch(console.warn);
  }

  return { getSteps, addStep };
}
