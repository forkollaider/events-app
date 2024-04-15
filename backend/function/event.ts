import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {getEvent, getEvents} from "../src/services/event.service";
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  switch(event.httpMethod.toUpperCase()) {
      case 'GET':
          let result = null;
          if(event.pathParameters?.id) result = getEvent(event.pathParameters.id);
          else result = await getEvents()
          return { body: JSON.stringify(result), statusCode: 200 };
          break;
      default:
          return {body: JSON.stringify({message:`unknown method ${event.httpMethod}`}), statusCode: 400};
          break;
  }
}