"use client";

import { useActionState } from "react";
import { addDailyStepAction } from "@/src/app.features/journey/server.actions/addStepAction";
import { AlertMessage } from "@/components/ui/alert-message";
import { InputField } from "@/components/ui/InputField";

export function AddDailyStepForm() {
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
            <button disabled={isPending}>Add</button>
            <AlertMessage state={state ?? { message: "" }} />
        </form>
    );
}