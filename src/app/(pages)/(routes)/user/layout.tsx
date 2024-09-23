import Sidebar from "./_components/Sidebar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className='w-full'>
            <div className='px-4 container mx-auto mt-10'>
                <div className='flex gap-10'>
                    <Sidebar />
                    {children}
                </div>
            </div>
        </div>
    );
}
