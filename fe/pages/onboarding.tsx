import {Stack, Typography} from "@mui/material";
import {UserDetailsForm} from "@/components/auth/UserDetailsForm";
import {useAtomValue} from "jotai";
import {userAtom} from "@/store/user";
import {useEffect, useState} from "react";
import {router} from "next/client";

const Onboarding = () => {
    const user = useAtomValue(userAtom);
    const [redirectStarted, setRedirectStarted] = useState(false);
    useEffect(() => {
        if(user && (user.name || user.email) && !redirectStarted) {
            setRedirectStarted(true);
            router.push('/events');
        }
    }, [user, redirectStarted])
    return (
        <Stack sx={{display: 'flex', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h3">Welcome to Events</Typography>
            <Typography variant="body1">Please fill-in your personal information to continue</Typography>
            <UserDetailsForm/>
        </Stack>
    )
}
export default Onboarding;