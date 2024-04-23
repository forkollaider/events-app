import {useAccount} from "wagmi";
import {useEffect, useState} from "react";
import { useAtomValue, useSetAtom} from "jotai";
import {addressAtom, userAtom} from "@/store/user";
import {useRouter} from "next/router";

export default function WalletLogin() {
    const { address } = useAccount();
    const [isLogged, setIsLogged] = useState(false);
    const setAddress = useSetAtom(addressAtom);
    const [redirectStarted, setRedirectStarted] = useState(false);
    const user = useAtomValue(userAtom);
    const router = useRouter();
    useEffect( () => {
        if (address && !isLogged) {
            setIsLogged(true);
            setAddress(address);
        } else if(!address && isLogged) {
            setIsLogged(false);
            setAddress(null);
        }
    }, [address, isLogged])
    useEffect(() => {
        if(user && !(user.name || user.email) && !redirectStarted) {
            setRedirectStarted(true);
            router.push('/onboarding');
        } else if (user && (user.name || user.email) && !redirectStarted) {
            setRedirectStarted(true);
            router.push('/events');
        }
    }, [user, redirectStarted])
    return <w3m-button/>;
}