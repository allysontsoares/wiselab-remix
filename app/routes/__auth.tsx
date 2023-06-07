import { Outlet } from '@remix-run/react';

export default function DashboardLayout() {
    return (
        <div>
            <Outlet />
        </div>
    );
}
