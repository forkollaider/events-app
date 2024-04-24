"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvent = exports.deleteEvent = exports.createEvent = exports.getEvent = exports.getEvents = void 0;
const eventsRepository = __importStar(require("../repositories/event.repository"));
const getEvents = () => {
    return eventsRepository.getEvents();
};
exports.getEvents = getEvents;
const getEvent = (id) => {
    const numId = parseInt(id);
    if (isNaN(numId) || numId < 1)
        throw new Error('Invalid id: ' + id);
    return eventsRepository.getEvent(numId);
};
exports.getEvent = getEvent;
const createEvent = (event) => {
    return eventsRepository.createEvent({ ...event, datetime: new Date(event.datetime) });
};
exports.createEvent = createEvent;
const deleteEvent = (id) => {
    const numId = parseInt(id);
    if (isNaN(numId) || numId < 1)
        throw new Error('Invalid id: ' + id);
    return eventsRepository.deleteEvent(numId);
};
exports.deleteEvent = deleteEvent;
const updateEvent = (id, event) => {
    const numId = parseInt(id);
    if (isNaN(numId) || numId < 1)
        throw new Error('Invalid id: ' + id);
    return eventsRepository.updateEvent(numId, { ...event, datetime: new Date(event.datetime) });
};
exports.updateEvent = updateEvent;
