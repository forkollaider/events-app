import {useParams, useSearchParams} from "next/navigation";
import {Spinner} from "@/components/Spinner";
import {useAtomValue} from "jotai";
import {eventsAtom} from "@/store/event";
import {EventInstance} from "@/types/EventInstance";
import {EventCard} from "@/components/events/EventCard";
import {userAtom} from "@/store/user";
import {useRouter} from "next/router";
import {EditEventForm} from "@/components/events/EditEventForm";
import {Typography} from "@mui/material";

const EventPage = () => {
    const params = useParams<{id: string}>();
    const searchParams = useSearchParams()
    const router= useRouter();
    const events = useAtomValue(eventsAtom);
    const user = useAtomValue(userAtom);
    if(!events || !user || !params) return <Spinner/>
    const currentEvent = events.find((event: EventInstance) => event.id === parseInt(params?.id));
    if(!currentEvent) router.push('/events');
    const isEditMode = searchParams.get('edit') === 'true';
    const closeEventEdit = () => router.push('/events/' + params.id);

    return (
        <>
            <Typography variant="h3">{ isEditMode ? 'Edit e' : 'E' }vent details</Typography>
            { isEditMode
                ? <EditEventForm event={currentEvent} closeForm={closeEventEdit}/>
                :<EventCard event={currentEvent} currentUserId={user.id} isDetailPage={true}/>
            }
        </>
    )
}


export default EventPage;