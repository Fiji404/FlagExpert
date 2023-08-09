import { Layout } from './components/UI/Layout/Layout';
import { Overview, GameDashboard, PickedGame } from './pages';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Overview />} />
            <Route path="/game" element={<GameDashboard />} />
            <Route path="/game/:game" element={<PickedGame />} />
        </Route>
    )
);

export const App = () => {
    return <RouterProvider router={router} />;
};
