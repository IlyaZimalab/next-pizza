import { ReactNode } from "react";
export const metadata = {
    title: 'Next.js',
    description: 'Dashboard Pizza'
}

export default function DashboardLayout({children}: {children: ReactNode}) {
    return (
        <main>
                {children}
        </main>
    )
}