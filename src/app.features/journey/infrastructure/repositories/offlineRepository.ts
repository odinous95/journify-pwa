import { openDB, IDBPDatabase } from "idb";
import { Step } from "@/src/view.models";
import { IJourneyCache, IJourneyRepository } from "../../types";

export class OfflineRepository implements IJourneyRepository, IJourneyCache {
  private dbPromise?: Promise<IDBPDatabase>;

  private getDb() {
    if (!this.dbPromise) {
      this.dbPromise = openDB("JourneyDb", 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains("steps")) {
            db.createObjectStore("steps", { keyPath: "id" });
          }
        },
      });
    }
    return this.dbPromise;
  }

  async getSteps() {
    const db = await this.getDb();
    return db.getAll("steps");
  }

  async saveSteps(steps: Step[]) {
    const db = await this.getDb();
    const tx = db.transaction("steps", "readwrite");
    await Promise.all(steps.map((step) => tx.store.put(step)));
    await tx.done;
  }
}
