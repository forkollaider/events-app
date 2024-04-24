import {Button, Stack} from "@mui/material";
import { useState } from "react";
import {NewEventForm} from "@/components/events/NewEventForm";

type Props = { currentUserId: number }
export const AddEvent = ({currentUserId}: Props) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <Stack sx={{maxWidth: '400px'}}>
            <Button variant="contained" disabled={isActive} onClick={() => setIsActive(true)}>Add event</Button>
            {isActive && <NewEventForm currentUserId={currentUserId} closeForm={() => setIsActive(false)}/>}
        </Stack>
    )
}