import {useSetAtom} from "jotai";
import {updateEventAtom} from "@/store/event";
import {EventInstance} from "@/types/EventInstance";
import {BaseEventForm} from "@/components/events/BaseEventForm";

type Props = {
    event: EventInstance;
    closeForm: () => void;
}

export const EditEventForm = ({closeForm, event}: Props) => {
    const editEvent = useSetAtom(updateEventAtom);
    return (
        <BaseEventForm event={event} closeForm={closeForm} submitAction={editEvent}/>
    )
}