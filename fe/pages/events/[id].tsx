import {useParams} from "next/navigation";
import {Spinner} from "@/components/Spinner";
import {useAtomValue} from "jotai";
import {eventsAtom} from "@/store/event";
import {EventInstance} from "@/types/EventInstance";
import {EventCard} from "@/components/events/EventCard";
import {userAtom} from "@/store/user";
import {useRouter} from "next/router";

const EventPage = () => {
    const params = useParams<{id: string}>();
    const router= useRouter();
    const events = useAtomValue(eventsAtom);
    const user = useAtomValue(userAtom);
    if(!events || !user || !params) return <Spinner/>
    const currentEvent = events.find((event: EventInstance) => event.id === parseInt(params?.id));
    if(!currentEvent) router.push('/events');

    return (
        <EventCard event={currentEvent} currentUserId={user.id} isDetailPage={true}/>
    )
}


export default EventPage;