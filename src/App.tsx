import { Layout } from './components/UI/Layout/Layout';
import { Overview, Dashboard, PickedGame } from './pages';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Overview />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/game/:game" element={<PickedGame />} />
        </Route>
    )
);

export const App = () => {
    return <RouterProvider router={router} />;
};
