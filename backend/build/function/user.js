"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const http_service_1 = require("../src/services/http.service");
const user_service_1 = require("../src/services/user.service");
const handler = async (event) => {
    try {
        switch (event.httpMethod.toUpperCase()) {
            case 'GET':
                const address = event.queryStringParameters?.address;
                if (!address)
                    return (0, http_service_1.formatResponse)(400, { message: 'Missing address' });
                const user = (await (0, user_service_1.getUser)(address))[0] || (await (0, user_service_1.createUser)(address))[0];
                return (0, http_service_1.formatResponse)(200, user);
            case 'PUT':
                if (!event.body)
                    return (0, http_service_1.formatResponse)(400, { message: 'Missing body' });
                await (0, user_service_1.updateUser)(JSON.parse(event.body));
                return (0, http_service_1.formatResponse)(200, { message: 'updated user' });
            default:
                return (0, http_service_1.formatResponse)(405, { message: 'Method Not Allowed' });
        }
    }
    catch (e) {
        console.log(e);
        return (0, http_service_1.formatResponse)(500, { message: JSON.stringify(e) });
    }
};
exports.handler = handler;
