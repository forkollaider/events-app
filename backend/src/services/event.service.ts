import * as eventsRepository from "../repositories/event.repository";

export const getEvents = () => {
    return eventsRepository.getEvents();
}
export const getEvent = (id: string) => {
    const numId = parseInt(id);
    if(isNaN(numId) || numId < 1) throw new Error('Invalid id: ' + id);
    return eventsRepository.getEvent(numId);
}

export const createEvent = (event: any) => {
    return eventsRepository.createEvent(event);
}

export const deleteEvent = (id: string) => {
    const numId = parseInt(id);
    if(isNaN(numId) || numId < 1) throw new Error('Invalid id: ' + id);
    return eventsRepository.deleteEvent(numId);
}