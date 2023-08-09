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
            className="mt-16 mb-10 flex justify-end gap-4 max-w-[95%] opacity-0 animate-[originate_700ms_1s_forwards]"
        >
            <label className="flex gap-1 text-sm items-center text-accentDark">
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
                className="flex items-center dark:bg-[rgb(19,19,19)] bg-[#ffffff] border border-accentLight dark:border-[#242424] py-1 px-3 
                                rounded-md text-xl dark:text-[#fff] text-[#000] hover:bg-[#f3f3f3] dark:hover:bg-[rgb(27,27,27)] transition-colors"
            >
                Next <MdOutlineArrowForwardIos />
            </button>
        </form>
    );
};
