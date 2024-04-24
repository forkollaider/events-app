export enum EventLocation {
    NewYork = "New York",
    Paris = "Paris",
    Tokyo = "Tokyo",
    Berlin = "Berlin",
    London = "London",
    Beijing = "Beijing",
    Online = "Online",
}

export type EventDTO = {
    id: number;
    name: string;
    description: string;
    price: number;
    location: EventLocation;
    managerId: number;
    datetime: string;
}

export type FormattedEventDTO = Omit<EventDTO, 'datetime'> & {datetime: Date};