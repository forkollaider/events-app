import WalletLogin from "@/components/auth/WalletLogin";

export const Layout = ({ children }) => {

    return (
        <main>
            <WalletLogin/>
            {children}
        </main>
    )
}