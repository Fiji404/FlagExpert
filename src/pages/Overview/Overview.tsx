import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Intro, Benefits, NavigateToGame } from '.';
import { useDefaultAppRouteStore } from '@/store/defaultAppRouteStore/defaultAppRouteStore';

export const Overview = () => {
    const navigate = useNavigate();
    const { defaultAppRoute, isDefaultRouteActive, getDefaultAppRoute } = useDefaultAppRouteStore(
        ({ defaultAppRoute, isDefaultRouteActive, getDefaultAppRoute }) => ({
            defaultAppRoute,
            isDefaultRouteActive,
            getDefaultAppRoute
        })
    );

    useEffect(() => {
        getDefaultAppRoute();
        if (defaultAppRoute === 'GameDashboard' && isDefaultRouteActive) navigate('/game');
    }, [defaultAppRoute, isDefaultRouteActive, getDefaultAppRoute, navigate]);

    return (
        <section>
            <Intro />
            <Benefits />
            <NavigateToGame />
        </section>
    );
};
