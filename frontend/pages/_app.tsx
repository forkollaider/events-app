import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { WagmiConfig} from "wagmi"
import {config, projectId} from "@/config";
import {createWeb3Modal} from "@web3modal/wagmi";
import {Layout} from "@/components/Layout";
import {AppCacheProvider} from "@mui/material-nextjs/v13-pagesRouter";

createWeb3Modal({
    wagmiConfig: config,
    projectId,
    enableAnalytics: false,
});


export default function App(props: AppProps<{
  session: Session;
}>) {
    const {
        Component,
        pageProps,
    } = props;
  return (
      <AppCacheProvider {...props}>
          <WagmiConfig config={config}>
            <SessionProvider session={pageProps.session} refetchInterval={0}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SessionProvider>
          </WagmiConfig>
        </AppCacheProvider>
  )
}