import { Inter } from "next/font/google";
import WalletLogin from "@/components/auth/WalletLogin";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/*<WalletLogin/>*/}
    </main>
  );
}