import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
import {formatResponse} from "../src/services/http.service";
import {createUser, getUser} from "../src/services/user.service";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        switch (event.httpMethod.toUpperCase()) {
            case 'GET':
                const address = event.queryStringParameters?.address;
                if (!address) return formatResponse(400, {message: 'Missing address'});
                const user = (await getUser(address))[0] || (await createUser(address))[0];
                return formatResponse(200, user);
            case 'PUT':
                if (!event.body) return formatResponse(400, {message: 'Missing body'});
                return formatResponse(200, {m: 'wip'});
                break;
            default:
                return formatResponse(405, {message: 'Method Not Allowed'});
        }
    } catch (e) {
        console.log(e);
        return formatResponse(500, {message: JSON.stringify(e)});
    }
}