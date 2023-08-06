import { Outlet } from 'react-router-dom';
import { Nav } from '../..';

export const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
};

