"use server";

import { updateTag } from "next/cache";

export async function addTodo(
  journeyId: string,
  title: string,
  description: string = "",
) {
  const response = await fetch("http://localhost:5000/step/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      journeyId,
      title,
      description,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create step");
  }

  updateTag("dailyjourney");
}
