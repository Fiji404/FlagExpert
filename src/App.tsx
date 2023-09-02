import { Layout } from './components/UI/Layout';
import { Overview, Dashboard, Game, Auth, SignIn, SignUp } from './pages';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Overview />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/game/:game" element={<Game />} />
            <Route path="/auth" element={<Auth />}>
                <Route path="/auth/signin" element={<SignIn />} />
                <Route path="/auth/signup" element={<SignUp />} />
            </Route>
        </Route>
    )
);

export const App = () => {
    return <RouterProvider router={router} />;
};
