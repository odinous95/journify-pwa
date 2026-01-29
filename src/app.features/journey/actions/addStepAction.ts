"use server";

import { revalidatePath } from "next/cache";
import { ActionResponse } from "../interfaces";
import { createJourneyFeatureWithToken } from "../instance";
import { auth0 } from "@/src/lib/auth0";

export async function addDailyStepAction(
  _prevState: unknown,
  payload: FormData,
): Promise<ActionResponse> {
  const title = payload.get("title")?.toString() ?? "";
  const description = payload.get("description")?.toString() ?? "";
  const id = payload.get("userId")?.toString() ?? "";

  const accessToken = await auth0.getAccessToken();
  const journeyFeature = createJourneyFeatureWithToken(accessToken?.token);

  const result = await journeyFeature.addDailyStep({
    id,
    title,
    description,
  });

  if (result.success) {
    revalidatePath("/dailyjourney");
  }

  return result;
}
