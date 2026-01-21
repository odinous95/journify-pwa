import { createJourneyService } from "./service";

export function createJourneyFeature(
  service: ReturnType<typeof createJourneyService>,
) {
  return {
    fetchSteps: service.fetchSteps,
  };
}
