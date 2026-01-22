import { createJourneyService } from "./service";

export function createJourneyFeature(
  service: ReturnType<typeof createJourneyService>,
) {
  return {
    getSteps: service.getSteps,
  };
}
