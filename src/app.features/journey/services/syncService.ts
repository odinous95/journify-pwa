import { OfflineRepository } from "../repositories/offlineRepository";
import { OnlineRepository } from "../repositories/onlineRepository";

export function createJourneySyncService(
  offlineRepo: OfflineRepository,
  onlineRepo: OnlineRepository,
  isOnline: () => boolean,
) {
  async function pushLocalChanges() {
    const pending = await offlineRepo.getPendingSteps();

    for (const step of pending) {
      try {
        const synced = await onlineRepo.addStep(step);

        await offlineRepo.updateStep({
          ...synced,
          status: "synced",
        });
      } catch (err) {
        // stop pushing if network fails
        console.warn("Failed to push step, will retry later", err);
        return;
      }
    }
  }

  async function pullRemoteChanges() {
    try {
      const remote = await onlineRepo.getSteps();
      await offlineRepo.saveSteps(remote);
    } catch (err) {
      console.warn("Failed to pull remote steps", err);
    }
  }

  async function sync() {
    if (!isOnline()) return;

    await pushLocalChanges();
    await pullRemoteChanges();
  }

  return {
    sync,
  };
}
