import {useAccount} from "wagmi";
import {useEffect, useState} from "react";
import { useAtomValue, useSetAtom} from "jotai";
import {addressAtom, userAtom} from "@/store/user";
import {useRouter} from "next/router";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'w3m-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

export default function WalletLogin() {
    const { address, isDisconnected } = useAccount();
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
        }
    }, [user, redirectStarted])
    useEffect(() => {
        router.push('/');
    }, [isDisconnected])
    return <w3m-button/>;
}