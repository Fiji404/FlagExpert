import { Layout } from './components/UI/Layout/Layout';
import { GameOverview, GameDashboard, PickedGame, pickedGameLoader } from './pages';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { procceedToGameAction } from './pages/GameOverview/ProcceedToGame/ProcceedToGame';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<GameOverview />} action={procceedToGameAction} />
                <Route path="/game" element={<GameDashboard />} />
                <Route path="/game/:game" element={<PickedGame />} loader={pickedGameLoader} />
            </Route>
        </>
    )
);

export const App = () => {
    return <RouterProvider router={router} />;
};
