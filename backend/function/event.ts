import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {getEvent, getEvents} from "../src/services/event.service";
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  switch(event.httpMethod.toUpperCase()) {
      case 'GET':
          if(event.pathParameters?.id) getEvent(event.pathParameters.id);
          else getEvents()
      default:
          throw new Error('unknown method');
  }
}