import {atom} from "jotai";

export const saveEventAtom = atom(null, async (_, __, event) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`, {
        method: 'POST',
        body: JSON.stringify(event),
    });
});

const shouldRefetchEventsAtom = atom(true);

export const refetchEventsAtom = atom(null, async (get,set) => {
    set(shouldRefetchEventsAtom, !get(shouldRefetchEventsAtom));
});

export const eventsAtom = atom(async (get,set) => {
    get(shouldRefetchEventsAtom)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`);
    return response.json();
});

export const deleteEventAtom = atom(null, async (_, __, id) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`, {
        method: 'DELETE',
    });
});