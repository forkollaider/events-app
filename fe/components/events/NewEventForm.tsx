import {useSetAtom} from "jotai";
import {EventLocation} from "@/types/Location";
import { createEventAtom} from "@/store/event";
import dayjs from "dayjs";
import {BaseEventForm} from "@/components/events/BaseEventForm";

type Props = {
    closeForm: () => void;
    currentUserId: number;
}

export const NewEventForm = ({closeForm, currentUserId}: Props) => {
    const submitEvent = useSetAtom(createEventAtom);
    const event = {
        id: 0,
        name: '',
        description: '',
        price: 0,
        location: EventLocation.Online,
        managerId: currentUserId,
        datetime: dayjs(),
    }
    return (
        <BaseEventForm event={event} closeForm={closeForm} submitAction={submitEvent}/>
    )
}