import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { GameBenefits, ProcceedToGame, WelcomeHeading, GameDescription } from './';
import { useDefaultAppRouteStore } from '@/store/defaultAppRouteStore/defaultAppRouteStore';

export const GameOverview = () => {
    const { defaultAppRoute, isDefaultRouteActive, getDefaultAppRoute } = useDefaultAppRouteStore(
        ({ defaultAppRoute, isDefaultRouteActive, getDefaultAppRoute }) => ({
            defaultAppRoute,
            isDefaultRouteActive,
            getDefaultAppRoute
        })
    );
    const navigate = useNavigate();

    useEffect(() => {
        getDefaultAppRoute();
        if (defaultAppRoute === 'GameDashboard' && isDefaultRouteActive) navigate('/game');
    }, [defaultAppRoute, isDefaultRouteActive, getDefaultAppRoute, navigate]);

    return (
        <section>
            <header className="px-2">
                <WelcomeHeading />
                <GameDescription />
            </header>
            <GameBenefits />
            <ProcceedToGame />
        </section>
    );
};
