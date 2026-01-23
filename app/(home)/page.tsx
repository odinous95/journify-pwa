
export const revalidate = 3600;
import { journeyFeature } from "@/src/app.features/journey";
import { AddTodoForm } from "@/src/app.features/journey/ui/Journey/JourneyForm";
import { ClientComponent } from "@/src/global.componentes/testcomponent";

export default async function Page() {
  const dailyJourney = await journeyFeature.getDailyJourney();
  // console.log("Daily Journey in Page component:", dailyJourney);
  return (
    <>
      <ClientComponent />

      <div>
        <h1>{dailyJourney.title}</h1>
        <p>Steps: {dailyJourney.stepCount}</p>
        <AddTodoForm />
        <ul>
          {dailyJourney?.steps?.map(step => (
            <li key={step.id}>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
              <span>{step.completed ? "✅ Done" : "⏳ Pending"}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

