import { auth0 } from "@/src/lib/auth0";
import { createJourneyFeatureWithToken } from "../../instance";

export async function DailyJourneyServer() {
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

            <ul>
                {dailyJourney?.steps?.map((step) => (
                    <li key={step.id}>
                        <strong>{step.title}</strong>
                        <p>{step.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}