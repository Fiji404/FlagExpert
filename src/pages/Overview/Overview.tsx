import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Intro, Benefits, NavigateToGame } from '.';
import { useDefaultAppRouteStore } from '@/store/defaultAppRouteStore/defaultAppRouteStore';

export const Overview = () => {
    const navigate = useNavigate();
    const { defaultAppRoute, isDefaultAppRouteActive, getDefaultAppRoute } = useDefaultAppRouteStore(
        ({ defaultAppRoute, isDefaultAppRouteActive, getDefaultAppRoute }) => ({
            defaultAppRoute,
            isDefaultAppRouteActive,
            getDefaultAppRoute
        })
    );

    useEffect(() => {
        getDefaultAppRoute();
        if (defaultAppRoute !== null && isDefaultAppRouteActive) navigate(defaultAppRoute);
    }, [defaultAppRoute, isDefaultAppRouteActive, getDefaultAppRoute, navigate]);

    return (
        <section>
            <Intro />
            <Benefits />
            <NavigateToGame />
        </section>
    );
};
