import { Nav, GameDashboard, GameOverview } from './components';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AllFlagsMode } from './pages/AllFlagsMode/AllFlagsMode';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Nav />,
        children: [
            {
                index: true,
                element: <GameOverview />
            },
            {
                path: '/game',
                element: <GameDashboard />
            },
            {
                path: '/game/all-flags',
                element: <AllFlagsMode />
            }
        ]
    }
]);

export const App = () => {
    return <RouterProvider router={router} />;
};
