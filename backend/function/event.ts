import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {createEvent, deleteEvent, getEvent, getEvents, updateEvent} from "../src/services/event.service";
import {formatResponse} from "../src/services/http.service";
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  switch(event.httpMethod.toUpperCase()) {
      case 'GET':
          let result = null;
          if(event.pathParameters?.id) result = getEvent(event.pathParameters.id);
          else result = await getEvents()
          return formatResponse(200, result || []);
      case 'POST':
          if(!event.body) return formatResponse(400, {message: 'Missing body'});
          await createEvent(JSON.parse(event.body));
          return formatResponse(200, {message: 'Successfully created'});
      case 'DELETE':
            if(!event.pathParameters?.id) return formatResponse(400, {message: 'Missing id'});
            await deleteEvent(event.pathParameters.id);
            return formatResponse(200, {message: 'Successfully deleted'});
      case 'PUT':
          if(!event.pathParameters?.id || !event.body) return formatResponse(400, {message: 'Missing id or body'});
            await updateEvent(event.pathParameters.id, JSON.parse(event.body));
            return formatResponse(200, {message: 'Successfully updated'});
      default:
          return formatResponse(405, {message: 'Method Not Allowed'});
  }
}