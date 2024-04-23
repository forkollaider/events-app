import {TextField} from "@mui/material";
import {useState} from "react";

export const UserDetailsForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <form>
            <TextField
                id="user-name"
                label="Name"
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setName(event.target.value);
                }}
            />
            <TextField
                id="user-email"
                label="Email"
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                }}
            />
        </form>
    )
}