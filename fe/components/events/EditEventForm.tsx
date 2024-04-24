import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Stack, Typography} from "@mui/material";
import {useState} from "react";
import {useAtomValue, useSetAtom} from "jotai";
import {EventLocation} from "@/types/Location";
import {refetchEventsAtom, createEventAtom, updateEventAtom} from "@/store/event";
import {EventInstance} from "@/types/EventInstance";

type Props = {
    event: EventInstance;
    closeForm: () => void;
}

export const EditEventForm = ({closeForm, event}: Props) => {
    const [name, setName] = useState(event.name);
    const [description, setDescription] = useState(event.description);
    const [price, setPrice] = useState<number>(0);
    const [location, setLocation] = useState<EventLocation>(event.location);
    const [managerId] = useState(event.managerId);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submitEvent = useSetAtom(updateEventAtom);
    const refetchEvents = useSetAtom(refetchEventsAtom);
    const [nameError, setNameError] = useState(false);

    const validate = () => {
        if(!name) {
            setNameError(true);
            return false;
        }
        return true;
    }
    const saveEvent = async () => {
        if(!validate()) return;
        setIsSubmitting(true);
        await submitEvent({
            id: event.id,
            name,
            description,
            price,
            location,
            managerId,
        })
        closeForm();
        refetchEvents();
    }
    return (
        <Stack sx={{maxWidth: '50%', mt: 2}}>
            <TextField
                id="event-name"
                label="Event name"
                variant="outlined"
                error={nameError}
                helperText={nameError && 'Name is required'}
                required={true}
                sx={{mb: 1}}
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <TextField
                id="event-description"
                label="Event description"
                variant="outlined"
                sx={{mb: 1}}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <TextField
                id="event-price"
                label="Event price"
                placeholder="type a price"
                sx={{mb: 1}}
                value={price}
                onChange={(event) => setPrice(parseFloat(event.target.value) || 0)}
            />
            <FormControl fullWidth sx={{mb: 1}}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="event-location-label"
                    id="event-location"
                    value={location}
                    label="Location"
                    onChange={(event) => setLocation(event.target.value as EventLocation)}
                >
                    {Object.values(EventLocation).map((location) => (
                        <MenuItem key={location} value={location}>{location}</MenuItem>
                ))}
                </Select>
            </FormControl>
            <Button variant="contained" onClick={saveEvent} disabled={isSubmitting} sx={{mb: 1}}>Save new Event</Button>
            <Button variant="outlined" onClick={closeForm} disabled={isSubmitting}>Cancel</Button>
        </Stack>
    )
}