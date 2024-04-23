import {useAtomValue} from "jotai";
import {eventsAtom} from "@/store/event";
import {Typography, Grid} from "@mui/material";
import React from "react";
import {EventCard} from "@/components/events/EventCard";
import {userAtom} from "@/store/user";
import {Spinner} from "@/components/Spinner";

export const EventList = () => {
    const events = useAtomValue(eventsAtom);
    const user = useAtomValue(userAtom);
    if(!user || !events) return <Spinner/>
    return (
        <Grid container spacing={2} mt={2}>
            {events.length > 0
                ? events.map((event: any) => (<Grid key={event.id}  md={4} item><EventCard event={event} currentUserId={user.id}/></Grid>))
                : <Typography>No events</Typography>
            }
        </Grid>
    )
}