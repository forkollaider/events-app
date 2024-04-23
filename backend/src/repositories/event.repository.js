"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvents = void 0;
var serverless_1 = require("@neondatabase/serverless");
var config_1 = require("../config");
var schema_1 = require("../../db/schema");
var neon_http_1 = require("drizzle-orm/neon-http");
var connection = (0, serverless_1.neon)(config_1.DB_URL);
var getEvents = function () {
    var db = (0, neon_http_1.drizzle)(connection);
    return db.select().from(schema_1.events);
};
exports.getEvents = getEvents;
