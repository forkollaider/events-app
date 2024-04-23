import {atom} from "jotai";

export const saveEventAtom = atom(null, async (_, __, event) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`, {
        method: 'POST',
        body: JSON.stringify(event),
    });
});

export const eventsAtom = atom(async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`);
    return await response.json();
});