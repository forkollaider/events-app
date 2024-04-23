import {AddEvent} from "@/components/events/AddEvent";
import { Stack} from "@mui/material";
import {EventList} from "@/components/events/EventList";

const Events = () => {
    return (
        <Stack>
            <AddEvent/>
            <EventList/>
        </Stack>
    )
}

export default Events;