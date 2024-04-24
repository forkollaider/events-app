import {EventLocation} from "@/types/Location";
import {Dayjs} from "dayjs";

export type EventInstance = {
    id: number;
    name: string;
    description: string;
    price: number;
    location: EventLocation;
    managerId: number;
    datetime: Dayjs;
}

export type EventInstanceDTO =  Omit<EventInstance, 'datetime'> & {datetime: string | null};