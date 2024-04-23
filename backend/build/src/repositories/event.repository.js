"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvent = exports.deleteEvent = exports.createEvent = exports.getEvent = exports.getEvents = void 0;
const serverless_1 = require("@neondatabase/serverless");
const config_1 = require("../config");
const schema_1 = require("../../db/schema");
const neon_http_1 = require("drizzle-orm/neon-http");
const drizzle_orm_1 = require("drizzle-orm");
const getClient = () => {
    const connection = (0, serverless_1.neon)(config_1.DB_URL);
    return (0, neon_http_1.drizzle)(connection);
};
const getEvents = () => {
    return getClient().select().from(schema_1.events);
};
exports.getEvents = getEvents;
const getEvent = (id) => {
    return getClient().select().from(schema_1.events).where((0, drizzle_orm_1.eq)(schema_1.events.id, id));
};
exports.getEvent = getEvent;
const createEvent = (event) => {
    return getClient().insert(schema_1.events).values(event);
};
exports.createEvent = createEvent;
const deleteEvent = (id) => {
    return getClient().delete(schema_1.events).where((0, drizzle_orm_1.eq)(schema_1.events.id, id));
};
exports.deleteEvent = deleteEvent;
const updateEvent = (id, event) => {
    return getClient().update(schema_1.events).set(event).where((0, drizzle_orm_1.eq)(schema_1.events.id, id));
};
exports.updateEvent = updateEvent;
