import {EventInstance} from "@/types/EventInstance";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {deleteEventAtom, refetchEventsAtom} from "@/store/event";
import {useState} from "react";
import {useSetAtom} from "jotai";
import {useRouter} from "next/router";
import {Spinner} from "@/components/Spinner";

export const EventCard = ({event, currentUserId, isDetailPage = false}: {event: EventInstance, currentUserId: number, isDetailPage?: boolean}) => {
    const [isActionInProgress, setIsActionInProgress] = useState(false);
    const router = useRouter();
    const submitEventDelete = useSetAtom(deleteEventAtom);
    const refetchEvents = useSetAtom(refetchEventsAtom);
    const deleteEvent = async () => {
        setIsActionInProgress(true);
        await submitEventDelete(event.id);
        setIsActionInProgress(false);
        await refetchEvents();
    }
    const navigateToEvent = () => {
        router.push('/events/' + event.id);
    }
    if(!event) return <Spinner/>;
    const isOwner = event.managerId === currentUserId;
    return <Card sx={{ maxWidth: '500px' }}>
        <CardMedia
            sx={{ height: 265, maxWidth: '100%'}}
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
            {isDetailPage && (
                <>
                    <Typography variant="body2" color="text.secondary">
                        Price: {event.price ? `${event.price}€` : 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Location: {event.location}
                    </Typography>
                </>
            )}
        </CardContent>
        <CardActions>
            {!isDetailPage && <Button onClick={navigateToEvent} disabled={isActionInProgress}>View</Button> }
            {isOwner && <Button size="small" disabled={isActionInProgress}>Edit</Button>}
            {isOwner && <Button size="small" disabled={isActionInProgress} onClick={deleteEvent}>Delete</Button>}
        </CardActions>
    </Card>
}