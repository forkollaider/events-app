import {Button, Stack, TextField} from "@mui/material";
import {useState} from "react";
import {useAtomValue, useSetAtom} from "jotai";
import {updateUserProfileAtom, userAtom} from "@/store/user";

export const UserDetailsForm = () => {
    const user = useAtomValue(userAtom);
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const updateUser = useSetAtom(updateUserProfileAtom);

    const submitForm = () => {
        updateUser({
            ...user!,
            name,
            email,
        })
    }
    const isFormDisabled = !name || !email;
    return (
        <Stack sx={{display: 'flex', flexDirection: 'column', mt: 2}}>
            <TextField
                id="user-name"
                label="Name"
                value={name}
                sx={{mb: 2}}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setName(event.target.value);
                }}
            />
            <TextField
                id="user-email"
                label="Email"
                value={email}
                sx={{mb: 2}}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                }}
            />
            <Button variant="contained" onClick={submitForm} disabled={isFormDisabled}>Submit</Button>
        </Stack>
    )
}