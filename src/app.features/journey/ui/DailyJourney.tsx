import { auth0 } from "@/src/lib/auth0";
import { createJourneyFeatureWithToken } from "../instance";
import { AddDailyStepForm, StepsContainer } from ".";

export async function DailyJourney() {
    const session = await auth0.getSession();

    if (!session) {
        return <div>Please log in</div>;
    }

    const journeyFeature = createJourneyFeatureWithToken(
        session.tokenSet.accessToken,
    );
    const dailyJourney = await journeyFeature.getDailyJourney();

    return (
        <div>
            <h1>{dailyJourney.title}</h1>
            <p>Steps: {dailyJourney.stepCount}</p>
            <AddDailyStepForm dailyJourneyId={dailyJourney.id} />
            <StepsContainer steps={dailyJourney.steps} />
        </div>
    );
}