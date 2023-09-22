import { useSupabaseAuthStore } from '@/store/supabaseAuthStore';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const Auth = () => {
    const navigate = useNavigate();
    const { user } = useSupabaseAuthStore();

    useEffect(() => {
        if (user) navigate('/dashboard');
    }, [user, navigate]);

    return <Outlet />;
};
