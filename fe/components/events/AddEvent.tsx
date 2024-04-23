import {Button, Stack} from "@mui/material";
import { useState } from "react";
import {NewEventForm} from "@/components/events/NewEventForm";

export const AddEvent = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <Stack sx={{maxWidth: '400px'}}>
            <Button variant="contained" disabled={isActive} onClick={() => setIsActive(true)}>Add event</Button>
            {isActive && <NewEventForm closeForm={() => setIsActive(false)}/>}
        </Stack>
    )
}