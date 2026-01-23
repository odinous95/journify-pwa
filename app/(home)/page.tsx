
export const revalidate = 3600;
import { journeyFeature } from "@/src/app.features/journey";
import { AddTodoForm } from "@/src/app.features/journey/ui/Journey/JourneyForm";
import { ClientComponent } from "@/src/global.componentes/testcomponent";

export default async function Page() {
  const dailyJourney = await journeyFeature.getDailyJourney();
  return (
    <>
      <ClientComponent />
      <AddTodoForm />
      <div>
        <h1>Daily Journey: {dailyJourney.title}</h1>
      </div>
    </>
  );
}
