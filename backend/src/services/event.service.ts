import * as eventsRepository from "../repositories/event.repository";

export const getEvents = () => {
    return eventsRepository.getEvents();
}
export const getEvent = (id: string) => {}