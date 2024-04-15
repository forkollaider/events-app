import {pgTable, serial, text, doublePrecision, pgEnum} from 'drizzle-orm/pg-core';

export const events = pgTable('events', {
    id: serial('id').primaryKey(),
    name: text('name'),
    description: text('description'),
    price: doublePrecision('price'),
    location: text('location')
});