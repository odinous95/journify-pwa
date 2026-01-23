"use client";

import { addTodo } from "@/app/actions/action";

export function AddTodoForm() {
    async function onSubmit(formData: FormData) {
        await addTodo(formData.get("title") as string, "00000000-0000-0000-0000-000000000000");
    }

    return (
        <form action={onSubmit}>
            <input name="title" />

            <button>Add</button>
        </form>
    );
}
