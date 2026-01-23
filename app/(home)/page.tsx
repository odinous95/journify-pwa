export const dynamic = "force-dynamic";

import { journeyFeature } from "@/src/app.features/journey";
import { ClientComponent } from "@/src/global.componentes/testcomponent";

export default async function Page() {
  const dailyJourney = await journeyFeature.getDailyJourney();
  console.log("Daily Journey in Page component:", dailyJourney);
  return (
    <>
      <ClientComponent />
      <pre>{JSON.stringify(dailyJourney, null, 2)}</pre>
    </>
  );
}
