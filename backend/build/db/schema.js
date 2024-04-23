"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = exports.user = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.user = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.text)('name'),
    email: (0, pg_core_1.text)('email'),
    pubkey: (0, pg_core_1.text)('pubkey')
});
exports.events = (0, pg_core_1.pgTable)('events', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.text)('name'),
    description: (0, pg_core_1.text)('description'),
    price: (0, pg_core_1.doublePrecision)('price'),
    location: (0, pg_core_1.text)('location'),
    managerId: (0, pg_core_1.integer)('manager_id').references(() => exports.user.id),
});
