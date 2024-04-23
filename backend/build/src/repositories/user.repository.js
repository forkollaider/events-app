"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.createUser = exports.getByAddress = void 0;
const serverless_1 = require("@neondatabase/serverless");
const config_1 = require("../config");
const schema_1 = require("../../db/schema");
const neon_http_1 = require("drizzle-orm/neon-http");
const drizzle_orm_1 = require("drizzle-orm");
const getClient = () => {
    const connection = (0, serverless_1.neon)(config_1.DB_URL);
    return (0, neon_http_1.drizzle)(connection);
};
const getByAddress = (address) => {
    return getClient().select().from(schema_1.user).where((0, drizzle_orm_1.eq)(schema_1.user.pubkey, address));
};
exports.getByAddress = getByAddress;
const createUser = (userPayload) => {
    return getClient().insert(schema_1.user).values(userPayload);
};
exports.createUser = createUser;
const updateUser = (id, userPayload) => {
    return getClient().update(schema_1.user).set(userPayload).where((0, drizzle_orm_1.eq)(schema_1.user.id, id));
};
exports.updateUser = updateUser;
