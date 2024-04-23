import {EventLocation} from "@/types/Location";

export type EventInstance = {
    id: number;
    name: string;
    description: string;
    price: number;
    location: EventLocation;
    managerId: number;
}