import { IJourneyCache, IJourneyRepository } from "./types";

export function createStepFeature(
  repository: IJourneyRepository,
  cache: IJourneyCache,
  isOnline: () => boolean,
) {
  async function fetchSteps() {
    const steps = await repository.getSteps();
    if (isOnline()) {
      await cache.saveSteps(steps);
    }
    return steps;
  }

  return { fetchSteps };
}
