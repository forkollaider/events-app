import {neon} from "@neondatabase/serverless";
import {DB_URL} from "../config";
import {events} from "../../db/schema";
import { drizzle } from 'drizzle-orm/neon-http';

export const getEvents = () => {
    const connection = neon(DB_URL);
    const db = drizzle(connection);
    return db.select().from(events);
}