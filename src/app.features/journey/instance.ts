import { createJourneyService } from "./services/journifyService";

export function createJourneyFeature(
  service: ReturnType<typeof createJourneyService>,
) {
  return {
    getSteps: service.getSteps,
  };
}
