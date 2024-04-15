import {neon} from "@neondatabase/serverless";
import {DB_URL} from "../config";
import {events} from "../../db/schema";
import { drizzle } from 'drizzle-orm/neon-http';

const connection = neon(DB_URL);
export const getEvents = () => {
    const db = drizzle(connection);
    return db.select().from(events);
}