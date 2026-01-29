import { Journey, mapJourneyToVM, Step } from "@/src/models";
import {
  ActionResponse,
  AddDailyStepInput,
  IJourneyRepository,
} from "./interfaces";

export function createJourneyService(JourneyRepository: IJourneyRepository) {
  async function getDailyJourney() {
    const rawData: Journey[] = await JourneyRepository.getDailyJourney();
    if (!rawData?.length) {
      return { title: "", stepCount: 0, steps: [] } as any;
    }
    return mapJourneyToVM(rawData[0]);
  }

  async function addDailyStep(
    payload: AddDailyStepInput,
  ): Promise<ActionResponse> {
    // business validation
    if (!payload.title || !payload.title.trim()) {
      return {
        success: false,
        message: "Title is required",
      };
    }

    try {
      const response = await JourneyRepository.addDailyStep(payload);

      if (!response.ok) {
        const error = await response.text();
        return {
          success: false,
          message: error || "Failed to add daily step",
        };
      }

      return {
        success: true,
        message: "Step added successfully",
      };
    } catch (error) {
      return {
        success: false,
        message: "Unexpected error occurred",
      };
    }
  }

  return { getDailyJourney, addDailyStep };
}
