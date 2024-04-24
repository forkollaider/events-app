import {LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {Dispatch, SetStateAction} from "react";
import {Dayjs} from "dayjs";

type Props = {
    value: Dayjs | null;
    setter: Dispatch<SetStateAction<Dayjs | null>>
}
export const DatePicker = ({value, setter}: Props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                label="Event date"
                sx={{mb: 2}}
                value={value}
                onChange={(newValue) => setter(newValue)}
            />
        </LocalizationProvider>
    )
}