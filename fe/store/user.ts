import {User} from "next-auth";
import {atom} from "jotai";

export const getUser = async (address: `0x${string}`) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user?address=${address}`, {
        method: 'GET',
    });

    return await res.json() as User;
}

export const addressAtom = atom<`0x${string}` | null>(null);

export const userAtom = atom(async (get) => {
    const address = get(addressAtom);
    if(address && get(shouldRefetchUserAtom)) return await getUser(address);
    else return null;
});

const shouldRefetchUserAtom = atom(true);
const updateUserProfileAtom = atom(null, async (_get, set, user: User) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
        method: 'PUT',
        body: JSON.stringify(user),
    });
    set(shouldRefetchUserAtom, false);
    set(shouldRefetchUserAtom, true);
});