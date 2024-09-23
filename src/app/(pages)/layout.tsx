import { getCookie } from '@/lib/session'
import Navber from "./_components/Navber";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    const token = await getCookie('token');

    return (
        <>
            <Navber token={token} />
            {children}
        </>
    );
}
