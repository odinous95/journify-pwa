import { AddDailyStepForm } from "@/src/app.features/journey/ui/client/JourneyForm";
import { DailyJourneyServer } from "@/src/app.features/journey/ui/server/DailyJourneyServer";

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <AddDailyStepForm />
      <DailyJourneyServer />
    </>
  )
}

