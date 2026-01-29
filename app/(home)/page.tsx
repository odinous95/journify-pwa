export const revalidate = 3600;

import { auth0 } from "@/src/lib/auth0";
import { AddDailyStepForm } from "@/src/app.features/journey/ui/JourneyForm";
import { createJourneyFeatureWithToken } from "@/src/app.features/journey";
export default async function Page() {
  const journeyFeature = createJourneyFeatureWithToken((await auth0.getAccessToken()).token);
  const dailyJourney = await journeyFeature.getDailyJourney();
  console.log("Daily Journey:", dailyJourney);

  return (
    <>
      <div>
        <h1>{dailyJourney.title}</h1>
        <p>Steps: {dailyJourney.stepCount}</p>
        <AddDailyStepForm />
        <ul>
          {dailyJourney?.steps?.map(step => (
            <li key={step.id}>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

