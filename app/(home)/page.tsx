import { DailyJourney } from "@/src/app.features/journey/ui";


export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <DailyJourney />
    </>
  )
}

