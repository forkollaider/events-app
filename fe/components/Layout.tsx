import WalletLogin from "@/components/auth/WalletLogin";
import { Stack} from "@mui/material";
import Link from '@mui/material/Link';
import {PropsWithChildren} from "react";
import {useRouter} from "next/router";

export const Layout = ({ children }: PropsWithChildren) => {
    const router = useRouter();
    return (
        <main>
            <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <WalletLogin/>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        router.push('/events')
                    }}
                >
                    Home
                </Link>
            </Stack>
            {children}
        </main>
    )
}