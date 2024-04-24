import * as eventsRepository from "../repositories/event.repository";
import {EventDTO} from "../../types/Event";

export const getEvents = () => {
    return eventsRepository.getEvents();
}
export const getEvent = (id: string) => {
    const numId = parseInt(id);
    if(isNaN(numId) || numId < 1) throw new Error('Invalid id: ' + id);
    return eventsRepository.getEvent(numId);
}

export const createEvent = (event: EventDTO) => {
    return eventsRepository.createEvent({...event, datetime: new Date(event.datetime)});
}

export const deleteEvent = (id: string) => {
    const numId = parseInt(id);
    if(isNaN(numId) || numId < 1) throw new Error('Invalid id: ' + id);
    return eventsRepository.deleteEvent(numId);
}

export const updateEvent = (id: string, event: EventDTO) => {
    const numId = parseInt(id);
    if(isNaN(numId) || numId < 1) throw new Error('Invalid id: ' + id);
    return eventsRepository.updateEvent(numId, {...event, datetime: new Date(event.datetime)});
}