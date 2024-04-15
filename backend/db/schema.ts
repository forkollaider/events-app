import {pgTable, serial, text, doublePrecision, pgEnum, integer} from 'drizzle-orm/pg-core';

export const events = pgTable('events', {
    id: serial('id').primaryKey(),
    name: text('name'),
    description: text('description'),
    price: doublePrecision('price'),
    location: text('location'),
    managerId: integer('manager_id').references(() => user.id),
});

export const user = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name'),
    email: text('email'),
    pubkey: text('pubkey')
});