import { Step } from "@/src/view.models";
import { IJourneyOnlineRepository } from "../interfaces";

export class OnlineRepository implements IJourneyOnlineRepository {
  async getSteps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/step`);
    const json = await res.json();
    // console.log("Fetched steps from online repository:", json);
    return json;
  }
  async addStep(step: Step) {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/step`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(step),
    });
    return step;
  }
}
