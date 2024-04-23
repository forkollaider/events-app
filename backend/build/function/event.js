"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const event_service_1 = require("../src/services/event.service");
const http_service_1 = require("../src/services/http.service");
const handler = async (event) => {
    switch (event.httpMethod.toUpperCase()) {
        case 'GET':
            let result = null;
            if (event.pathParameters?.id)
                result = (0, event_service_1.getEvent)(event.pathParameters.id);
            else
                result = await (0, event_service_1.getEvents)();
            return (0, http_service_1.formatResponse)(200, result || []);
        case 'POST':
            if (!event.body)
                return (0, http_service_1.formatResponse)(400, { message: 'Missing body' });
            await (0, event_service_1.createEvent)(JSON.parse(event.body));
            return (0, http_service_1.formatResponse)(200, { message: 'Successfully created' });
        case 'DELETE':
            if (!event.pathParameters?.id)
                return (0, http_service_1.formatResponse)(400, { message: 'Missing id' });
            await (0, event_service_1.deleteEvent)(event.pathParameters.id);
            return (0, http_service_1.formatResponse)(200, { message: 'Successfully deleted' });
        case 'PUT':
            if (!event.pathParameters?.id || !event.body)
                return (0, http_service_1.formatResponse)(400, { message: 'Missing id or body' });
            await (0, event_service_1.updateEvent)(event.pathParameters.id, JSON.parse(event.body));
            return (0, http_service_1.formatResponse)(200, { message: 'Successfully updated' });
        default:
            return (0, http_service_1.formatResponse)(405, { message: 'Method Not Allowed' });
    }
};
exports.handler = handler;
