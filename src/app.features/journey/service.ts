import { JourneyDTO, mapJourneyToVM } from "@/src/models";
import { IJourneyRepository } from "./interfaces";

export function createJourneyService(JourneyRepository: IJourneyRepository) {
  async function getDailyJourney() {
    const rawData: JourneyDTO[] = await JourneyRepository.getDailyJourney();
    return mapJourneyToVM(rawData[0]);
  }
  return { getDailyJourney };
}
