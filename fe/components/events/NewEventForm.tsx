import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Stack} from "@mui/material";
import {useState} from "react";
import {useAtomValue, useSetAtom} from "jotai";
import {userAtom} from "@/store/user";
import {EventLocation} from "@/types/Location";
import {refetchEventsAtom, createEventAtom} from "@/store/event";
import {DatePicker} from "@/components/forms/DatePicker";
import dayjs, {Dayjs} from "dayjs";

type Props = {
    closeForm: () => void;
}

export const NewEventForm = ({closeForm}: Props) => {
    const user = useAtomValue(userAtom);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState<number>(0);
    const [datetime, setDatetime] = useState<Dayjs | null>(dayjs(new Date()));
    const [location, setLocation] = useState<EventLocation>(EventLocation.Online);
    const [managerId] = useState(user?.id);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submitEvent = useSetAtom(createEventAtom);
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
            name,
            description,
            price,
            location,
            datetime: datetime?.toISOString(),
            managerId,
        })
        closeForm();
        refetchEvents();
    }
    return (
        <Stack>
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
            <DatePicker value={datetime} setter={setDatetime}/>
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