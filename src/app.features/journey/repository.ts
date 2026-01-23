import { IJourneyRepository } from "./interfaces";

export class Repository implements IJourneyRepository {
  async getDailyJourney() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/dailyjourney`,
    );
    const json = await res.json();
    console.log("Fetched steps from online repository:", json);
    return json;
  }
}
