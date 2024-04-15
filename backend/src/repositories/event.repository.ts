import {neon} from "@neondatabase/serverless";
import {DB_URL} from "../config";
import {events} from "../../db/schema";
import { drizzle } from 'drizzle-orm/neon-http';
import {eq} from "drizzle-orm";

const getClient = () => {
    const connection = neon(DB_URL);
    return drizzle(connection);
}



export const getEvents = () => {
    return getClient().select().from(events);
}

export const getEvent = (id: number) => {
    return getClient().select().from(events).where(eq(events.id, id));
}

export const createEvent = (event: any) => {
    return getClient().insert(events).values(event);
}

export const deleteEvent = (id: number) => {
    return getClient().delete(events).where(eq(events.id, id));
}

export const updateEvent = (id: number, event: any) => {
    return getClient().update(events).set(event).where(eq(events.id, id));
}


