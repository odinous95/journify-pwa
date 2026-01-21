import { IJourneyRepository } from "../../types";

export class OnlineRepository implements IJourneyRepository {
  async getSteps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/todos`);
    const json = await res.json();
    return json.todos;
  }
}
