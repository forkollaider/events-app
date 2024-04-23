"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const migrator_1 = require("drizzle-orm/postgres-js/migrator");
const postgres_js_1 = require("drizzle-orm/postgres-js");
const postgres_1 = __importDefault(require("postgres"));
(0, dotenv_1.config)({ path: '.env' });
const databaseUrl = (0, postgres_js_1.drizzle)((0, postgres_1.default)(`${process.env.DATABASE_URL}`, { ssl: 'require', max: 1 }));
const main = async () => {
    try {
        await (0, migrator_1.migrate)(databaseUrl, { migrationsFolder: 'drizzle' });
        console.log('Migration complete');
    }
    catch (error) {
        console.log(error);
    }
    process.exit(0);
};
main();
