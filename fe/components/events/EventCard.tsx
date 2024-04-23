import {EventInstance} from "@/types/EventInstance";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {deleteEventAtom, refetchEventsAtom} from "@/store/event";
import {useState} from "react";
import {useSetAtom} from "jotai";

export const EventCard = ({event, currentUserId}: {event: EventInstance, currentUserId: number}) => {
    const [isActionInProgress, setIsActionInProgress] = useState(false);
    const submitEventDelete = useSetAtom(deleteEventAtom);
    const refetchEvents = useSetAtom(refetchEventsAtom);
    const deleteEvent = async () => {
        setIsActionInProgress(true);
        await submitEventDelete(event.id);
        setIsActionInProgress(false);
        refetchEvents();
    }
    const isOwner = event.managerId === currentUserId;
    return <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
            sx={{ height: 265}}
            image="/holding-hands.jpg"
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {event.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {event.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button>View</Button>
            {isOwner && <Button size="small" disabled={isActionInProgress}>Edit</Button>}
            {isOwner && <Button size="small" disabled={isActionInProgress} onClick={deleteEvent}>Delete</Button>}
        </CardActions>
    </Card>
}