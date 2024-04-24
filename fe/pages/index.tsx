import { Inter } from "next/font/google";
import {Stack, Typography} from "@mui/material";
import {useAtomValue} from "jotai";
import {userAtom} from "@/store/user";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const user = useAtomValue(userAtom);
  const router = useRouter();
  const [redirectStarted, setRedirectStarted] = useState(false);
  useEffect(() => {
    if(user && user.name && !redirectStarted) {
      setRedirectStarted(true);
      router.push('/events');
    }
  }, [user, redirectStarted]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} w-full`}
    >
      <Stack sx={{display: 'flex', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Typography sx={{mt: 4}} variant="h3">Welcome to Events. Please login with your wallet to proceed.</Typography>
          <Typography variant="h3">Please login with your wallet to proceed.</Typography>
          <Image src="/party.gif" alt="party gif" width={200} height={200}/>
      </Stack>
    </main>
  );
}