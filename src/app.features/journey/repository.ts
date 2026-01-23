import { IJourneyRepository } from "./interfaces";

export class JourneyRepository implements IJourneyRepository {
  async getDailyJourney() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/dailyjourney`,
        { next: { tags: ["dailyjourney"] } },
      );
      return await res.json();
    } catch (err) {
      console.warn("Failed to fetch daily journey:", err);
      return [
        {
          id: "1166bee8-3d74-40d9-9d3e-3e29bc539d8e",
          userId: "00000000-0000-0000-0000-000000000000",
          journeyName: "Repository default Journey",
          createdAt: "2026-01-23T09:17:14.912215Z",
          entries: [],
        },
      ];
    }
  }
}
