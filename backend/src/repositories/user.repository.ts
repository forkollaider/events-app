import {neon} from "@neondatabase/serverless";
import {DB_URL} from "../config";
import {user} from "../../db/schema";
import { drizzle } from 'drizzle-orm/neon-http';
import {eq} from "drizzle-orm";
import {User} from "../../types/User";

const getClient = () => {
    const connection = neon(DB_URL);
    return drizzle(connection);
}

export const getByAddress = (address: string) => {
    return getClient().select().from(user).where(eq(user.pubkey, address));
}

export const createUser = (userPayload: Partial<User>) => {
    return getClient().insert(user).values(userPayload);
}
export const updateEvent = (id: number, userPayload: User) => {
    return getClient().update(user).set(userPayload).where(eq(user.id, id));
}


