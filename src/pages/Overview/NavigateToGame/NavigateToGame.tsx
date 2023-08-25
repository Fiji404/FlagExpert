import { useDefaultAppRouteStore } from '@/store/defaultAppRouteStore/defaultAppRouteStore';
import { useEffect, useRef } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const NavigateToGame = () => {
    const { defaultAppRoute, getDefaultAppRoute, setDefaultAppRouteToLS } = useDefaultAppRouteStore(
        ({ defaultAppRoute, getDefaultAppRoute, setDefaultAppRouteToLS }) => ({
            defaultAppRoute,
            getDefaultAppRoute,
            setDefaultAppRouteToLS
        })
    );

    const navigate = useNavigate();
    const skipGameOverviewInputRef = useRef<HTMLInputElement>(null);

    const procceedToGameFormHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const isGameOverviewSkipped = skipGameOverviewInputRef.current?.checked;
        if (!isGameOverviewSkipped) {
            setDefaultAppRouteToLS(null);
            return navigate('/dashboard');
        }
        setDefaultAppRouteToLS(isGameOverviewSkipped && '/dashboard');
        navigate('/dashboard');
    };

    useEffect(() => {
        getDefaultAppRoute();
    }, [getDefaultAppRoute]);

    return (
        <form
            onSubmit={procceedToGameFormHandler}
            className="mb-10 mt-16 flex max-w-[95%] animate-[originate_700ms_1s_forwards] justify-end gap-4 opacity-0"
        >
            <label className="flex items-center gap-1 text-sm text-accentDark">
                Don't show me this again
                <input
                    ref={skipGameOverviewInputRef}
                    defaultChecked={defaultAppRoute === '/dashboard'}
                    name="skip-game-overview"
                    className="input-checkbox"
                    type="checkbox"
                />
            </label>
            <button
                className="flex items-center rounded-md border border-accentLight bg-[#ffffff] px-3 py-1 text-xl 
                                text-[#000] transition-colors hover:bg-[#f3f3f3] dark:border-[#242424] dark:bg-[rgb(19,19,19)] dark:text-[#fff] dark:hover:bg-[rgb(27,27,27)]"
            >
                Next <MdOutlineArrowForwardIos />
            </button>
        </form>
    );
};
