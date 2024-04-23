import {EventInstance} from "@/types/EventInstance";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

export const EventCard = ({event, currentUserId}: {event: EventInstance, currentUserId: number}) => {
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
            {isOwner && <Button size="small">Edit</Button>}
            {isOwner && <Button size="small">Delete</Button>}
        </CardActions>
    </Card>
}