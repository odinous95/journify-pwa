"use client";

import { useEffect, useState } from "react";
import { useSteps } from "./providers/JourneyProvider";
import { Step } from "@/src/view.models/StepVM";

export default function Page() {
  const { fetchSteps } = useSteps();
  const [steps, setSteps] = useState<Step[]>([]);

  useEffect(() => {
    fetchSteps().then(setSteps);
  }, []);

  return <pre>{JSON.stringify(steps, null, 2)}</pre>;
}
