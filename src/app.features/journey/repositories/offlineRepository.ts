import { openDB, IDBPDatabase } from "idb";
import { Step } from "@/src/view.models";
import { IJourneyOfflineRepository } from "../interfaces";

export class OfflineRepository implements IJourneyOfflineRepository {
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
  async saveStep(step: Step) {
    const db = await this.getDb();
    const tx = db.transaction("steps", "readwrite");
    await tx.store.put(step);
    await tx.done;
  }

  async saveSteps(steps: Step[]) {
    const db = await this.getDb();
    const tx = db.transaction("steps", "readwrite");
    await Promise.all(steps.map((step) => tx.store.put(step)));
    await tx.done;
  }

  async getPendingSteps() {
    const db = await this.getDb();
    const allSteps = await db.getAll("steps");
    return allSteps.filter((step) => step.status === "pending");
  }
  async updateStep(step: Step) {
    const db = await this.getDb();
    const tx = db.transaction("steps", "readwrite");
    await tx.store.put(step);
    await tx.done;
  }
}
