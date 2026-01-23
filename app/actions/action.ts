"use server";

import { revalidatePath, revalidateTag, updateTag } from "next/cache";

export async function addTodo(journeyName: string, userId: string) {
  await fetch("http://localhost:5000/dailyjourney/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, journeyName }),
  });

  // revalidateTag("dailyjourney", "max");
  updateTag("dailyjourney");
}
