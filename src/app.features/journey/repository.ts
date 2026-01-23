import { IJourneyRepository } from "./interfaces";

export class JourneyRepository implements IJourneyRepository {
  async getDailyJourney() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/dailyjourney`,
      );
      return await res.json();
    } catch (err) {
      console.warn("Failed to fetch daily journey:", err);
      return { dailyJourney: [] }; // fallback
    }
  }
}
