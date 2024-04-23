import {Stack, Typography} from "@mui/material";
import {UserDetailsForm} from "@/components/auth/UserDetailsForm";

const Onboarding = () => {
    return (
        <Stack>
            <Typography variant="h3">Welcome to Events</Typography>
            <Typography variant="body1">Please fill-in your personal information to continue</Typography>
            <UserDetailsForm/>
        </Stack>
    )
}
export default Onboarding;