import { redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useUserRedirection } from '../../store';
import { Benefits, ProcceedToGame, WelcomeHeading, Description } from './';

export const GameOverview = () => {
    const data = useUserRedirection(state => state.isUserRedirectedToGameDashboard);

    useEffect(() => {
        const isGameOverviewScreenIgnored = localStorage.getItem('ignoreOverviewScreen');
        if (isGameOverviewScreenIgnored) redirect('/game');
    }, []);

    return (
        <section>
            <header className="px-2">
                <WelcomeHeading />
                <Description />
            </header>
            <Benefits />
            <ProcceedToGame />
        </section>
    );
};

// export const gameOverviewIgnoranceLoader = () => {
//     const isGameOverviewIgnored = localStorage.getItem('ignoreOverviewScreen');
//     if (!isGameOverviewIgnored) return null;
//     return redirect('/game');
// };
