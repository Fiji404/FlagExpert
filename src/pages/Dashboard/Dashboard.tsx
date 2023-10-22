import { useTranslation } from 'react-i18next';
import { GamesList } from './GamesList/GamesList';

export const Dashboard = () => {
    const { t } = useTranslation();
    return (
        <main className="mt-12 px-5">
            <h1 className=" text-center text-5xl font-bold text-black dark:text-white">{t('Choose your game mode')}</h1>
            <GamesList />
        </main>
    );
};
