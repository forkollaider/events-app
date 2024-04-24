import {atom} from "jotai";
import {EventInstance, EventInstanceDTO} from "@/types/EventInstance";
import dayjs from "dayjs";

export const createEventAtom = atom(null, async (_, __, event) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`, {
        method: 'POST',
        body: JSON.stringify(event),
    });
});

export const updateEventAtom = atom(null, async (_, __, event: EventInstanceDTO) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${event.id}`, {
        method: 'PUT',
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
    return (await response.json()).map((event: EventInstance) => ({...event, datetime: dayjs(event.datetime)}));
});

export const deleteEventAtom = atom(null, async (_, __, id) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`, {
        method: 'DELETE',
    });
});