import { useDefaultAppRouteStore } from '@/store/defaultAppRouteStore/defaultAppRouteStore';
import { useEffect, useRef } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import * as Checkbox from '@radix-ui/react-checkbox';
import { FaCheck } from 'react-icons/fa';

type CheckboxState = 'checked' | 'unchecked';

export const NavigateToGame = () => {
    const { defaultAppRoute, getDefaultAppRoute, setDefaultAppRouteToLS } = useDefaultAppRouteStore(
        ({ defaultAppRoute, getDefaultAppRoute, setDefaultAppRouteToLS }) => ({
            defaultAppRoute,
            getDefaultAppRoute,
            setDefaultAppRouteToLS
        })
    );

    const navigate = useNavigate();
    const skipGameOverviewInputRef = useRef<HTMLButtonElement>(null);

    const procceedToGameFormHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const skipOverviewCheckboxState = skipGameOverviewInputRef.current?.dataset.state as CheckboxState;
        setDefaultAppRouteToLS(skipOverviewCheckboxState === 'checked' ? '/dashboard' : null);
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
                <Checkbox.Root
                    ref={skipGameOverviewInputRef}
                    className="focus:outline-style h-5 w-5 cursor-pointer rounded-sm border border-[#dfdfdf] dark:border-[#41464C]"
                    name="skip-game-overview"
                    defaultChecked={defaultAppRoute === '/dashboard'}
                >
                    <Checkbox.Indicator className="flex items-center justify-center">
                        <FaCheck className="text-black dark:text-white" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
            </label>
            <button
                className="focus:outline-style flex items-center rounded-md border border-[#dfdfdf] bg-[#fff] px-3 py-1 text-xl 
                                text-black transition-colors hover:bg-[#f7f7f7] dark:border-[#41464C] dark:bg-[rgb(19,19,19)] dark:text-[#fff] dark:hover:bg-[rgb(27,27,27)]"
            >
                Next <MdOutlineArrowForwardIos />
            </button>
        </form>
    );
};
