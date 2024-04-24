import {useAtomValue} from "jotai";
import {eventsAtom} from "@/store/event";
import {Typography, Grid} from "@mui/material";
import React from "react";
import {EventCard} from "@/components/events/EventCard";
import {userAtom} from "@/store/user";
import {Spinner} from "@/components/Spinner";
import {AddEvent} from "@/components/events/AddEvent";

export const EventList = () => {
    const events = useAtomValue(eventsAtom);
    const user = useAtomValue(userAtom);
    if(!user || !events) return <Spinner/>
    return (
        <Grid container spacing={2} mt={2}>
            <Grid item container md={12}>
                <Grid item md={5}>
                    <AddEvent/>

                </Grid>
                <Grid item md={4}>
                    <Typography variant="h3">Our events list</Typography>
                </Grid>

            </Grid>
            {events.length > 0
                ? events.map((event: any) => (<Grid key={event.id}  md={4} item><EventCard event={event} currentUserId={user.id}/></Grid>))
                : <Typography>No events</Typography>
            }
        </Grid>
    )
}