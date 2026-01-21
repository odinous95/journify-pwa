import { isOnline } from "../connectivity/onlineStatus";
import { IJourneyRepository } from "../../types";
import { OfflineRepository } from "./offlineRepository";
import { OnlineRepository } from "./onlineRepository";

export class HybridRepository implements IJourneyRepository {
  constructor(
    private offlineRepo: OfflineRepository,
    private onlineRepo: OnlineRepository,
    private isOnline: () => boolean,
  ) {}

  async getSteps() {
    return this.isOnline()
      ? this.onlineRepo.getSteps()
      : this.offlineRepo.getSteps();
  }
}

export function createHybridRepository() {
  if (typeof window === "undefined") {
    throw new Error("HybridRepository must be created in the browser");
  }

  return new HybridRepository(
    new OfflineRepository(),
    new OnlineRepository(),
    isOnline,
  );
}
