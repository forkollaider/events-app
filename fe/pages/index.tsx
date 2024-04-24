import { Inter } from "next/font/google";
import {Typography} from "@mui/material";
import {useAtomValue} from "jotai";
import {userAtom} from "@/store/user";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

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
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Typography variant="h2">Welcome to Events.<br/> Please login with your wallet to proceed.</Typography>
    </main>
  );
}