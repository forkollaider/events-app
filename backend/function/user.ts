import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
import {formatResponse} from "../src/services/http.service";
import {createUser, getUser, updateUser} from "../src/services/user.service";
import {User} from "../types/User";

const head = <T = User>(arr: T[]):T => arr[0];

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        switch (event.httpMethod.toUpperCase()) {
            case 'GET':
                const address = event.queryStringParameters?.address;
                if (!address) return formatResponse(400, {message: 'Missing address'});
                const user = head(await getUser(address)) || head(await createUser(address));
                return formatResponse(200, user);
            case 'PUT':
                if (!event.body) return formatResponse(400, {message: 'Missing body'});
                await updateUser(JSON.parse(event.body));
                return formatResponse(200, {message: 'updated user'});
            default:
                return formatResponse(405, {message: 'Method Not Allowed'});
        }
    } catch (e) {
        console.log(e);
        return formatResponse(500, {message: JSON.stringify(e)});
    }
}