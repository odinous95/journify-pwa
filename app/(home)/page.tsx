"use client";

import { useEffect, useState } from "react";
import { useJourney } from "../providers/JourneyProvider";
import { Step } from "@/src/view.models/StepVM";

export default function Page() {
  const { fetchSteps } = useJourney();
  const [steps, setSteps] = useState<Step[]>([]);

  useEffect(() => {
    fetchSteps().then(setSteps);
  }, []);

  return <pre>{JSON.stringify(steps, null, 2)}</pre>;
}
