import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { http } from "wagmi";
import { polygon } from "wagmi/chains";

// 1. Get projectId at https://cloud.walletconnect.com
export const projectId = "586bd46092dfa242222ddf89dd77bd81";

// 2. Create wagmiConfig
const metadata = {
    name: "Events",
    description: "Event management app",
    url: "http://localhost:3000", // origin must match your domain & subdomain
    icons: [],
};

export const config = defaultWagmiConfig({
    chains: [polygon], // required
    projectId, // required
    metadata, // required
    transports: {
        [polygon.id]: http(),
    },
});

declare module "wagmi" {
    interface Register {
        config: typeof config;
    }
}