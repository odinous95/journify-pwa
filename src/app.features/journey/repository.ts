import { Step } from "@/src/models";
import { IJourneyRepository } from "./interfaces";
import { auth0 } from "@/src/lib/auth0";

export class JourneyRepository implements IJourneyRepository {
  constructor(private readonly accessToken?: string) {}

  async getDailyJourney() {
    console.log("Access Token in Repository:", this.accessToken);
    try {
      const headers: HeadersInit = this.accessToken
        ? { Authorization: `Bearer ${this.accessToken}` }
        : {};
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/dailyjourney`,
        {
          next: { tags: ["dailyjourney"] },
          headers,
        },
      );

      if (!res.ok) {
        console.warn("Failed to fetch daily journey:", res.status);
        return [];
      }

      const text = await res.text();
      if (!text) return [];

      return JSON.parse(text);
    } catch (err) {
      console.warn("Failed to fetch daily journey:", err);
      return [];
    }
  }

  async addDailyStep(step: Step) {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...(this.accessToken
        ? { Authorization: `Bearer ${this.accessToken}` }
        : {}),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/step/create`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(step),
      },
    );
    return response;
  }
}
