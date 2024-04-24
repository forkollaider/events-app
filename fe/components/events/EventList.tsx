import {useAtomValue} from "jotai";
import {eventsAtom} from "@/store/event";
import {Typography, Grid, Stack} from "@mui/material";
import React from "react";
import {EventCard} from "@/components/events/EventCard";
import {userAtom} from "@/store/user";
import {Spinner} from "@/components/Spinner";
import {AddEvent} from "@/components/events/AddEvent";
import Link from "@mui/material/Link";
import {useRouter} from "next/router";

export const EventList = () => {
    const events = useAtomValue(eventsAtom);
    const user = useAtomValue(userAtom);
    const router = useRouter();
    if(!user || !events) return <Spinner/>
    return (
        <Grid container spacing={2} mt={2}>
            <Grid item container md={12}>
                <Grid item md={5}>
                    <AddEvent currentUserId={user.id}/>
                </Grid>
                <Grid item md={4}>
                    <Typography variant="h3">Our events list</Typography>
                </Grid>

            </Grid>
            {events.length > 0
                ? events.map((event: any) => (<Grid key={event.id}  md={4} item>
                    <Link component={Stack} underline="none" sx={{cursor: 'pointer'}} onClick={() => router.push(`/events/${event.id}`)}><EventCard event={event} currentUserId={user.id}/></Link>
                </Grid>))
                : <Grid item><Typography>No events</Typography></Grid>
            }
        </Grid>
    )
}