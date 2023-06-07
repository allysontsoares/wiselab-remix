import { Outlet } from '@remix-run/react';
import AppShell from '~/components/navbar/app-shell';

export default function DashboardLayout() {
    return (
        <div>
            <AppShell />

            <main className='p-4 pt-16 md:ml-64 2xl:container 2xl:mx-auto'>
                <Outlet />
            </main>
        </div>
    );
}
