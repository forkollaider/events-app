import {EventLocation} from "@/types/Location";

export type EventInstance = {
    id: string;
    name: string;
    description: string;
    price: number;
    location: EventLocation;
    managerId: string;
}