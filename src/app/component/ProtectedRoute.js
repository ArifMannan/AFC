// /app/components/ProtectedRoute.js

'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ManualLoading from './ManualLoading';

const ProtectedRoute = ({ children, requiredRole }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'loading') return;
        if (!session) {
            router.push('/auth/signin');
        } else if (requiredRole && session.user.role !== requiredRole) {
            router.push('/auth/signin');
        }
    }, [session, status]);

    if (status === 'loading' || !session) {
        return <ManualLoading></ManualLoading>;
    }

    if (requiredRole && session.user.role !== requiredRole) {
        return <div>You do not have permission to view this page.</div>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
