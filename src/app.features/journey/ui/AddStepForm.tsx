"use client";

import { useActionState } from "react";
import { AlertMessage } from "@/components/ui/alert-message";
import { InputField } from "@/components/ui/InputField";
import { Button } from "@/components/ui/button";
import { addDailyStepAction } from "../server.actions/addStepAction";

export function AddDailyStepForm({ dailyJourneyId }: { dailyJourneyId: string }) {
    const [state, formAction, isPending] = useActionState(addDailyStepAction, undefined);

    return (
        <form action={formAction} className="space-y-4">
            <InputField
                id="title"
                name="title"
                label="Titel"
                disabled={isPending}
            />
            <InputField
                id="description"
                name="description"
                label="Beskrivning"
                disabled={isPending}
            />
            <input type="hidden" id="dailyJourneyId" name="dailyJourneyId" value={dailyJourneyId} />
            <Button type="submit" disabled={isPending} className="w-full" size="lg">
                Add
            </Button>
            <AlertMessage state={state ?? { message: "" }} />
        </form>
    );
}