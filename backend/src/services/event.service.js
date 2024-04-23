"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvent = exports.getEvents = void 0;
var eventsRepository = require("../repositories/event.repository");
var getEvents = function () {
    return eventsRepository.getEvents();
};
exports.getEvents = getEvents;
var getEvent = function (id) { };
exports.getEvent = getEvent;
