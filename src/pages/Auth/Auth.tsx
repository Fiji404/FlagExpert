import { useSessionStore } from '@/store/sessionStore';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const Auth = () => {
    const navigate = useNavigate();
    const { session, getSession } = useSessionStore();

    useEffect(() => {
        getSession();
    }, [getSession]);

    useEffect(() => {
        if (session?.user) navigate('/dashboard');
    }, [session, navigate]);

    return <Outlet />;
};
