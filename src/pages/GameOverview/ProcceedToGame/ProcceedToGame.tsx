import { useEffect, useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { ActionFunctionArgs, Form, redirect } from 'react-router-dom';

export const ProcceedToGame = () => {
    const [isOverviewScreenIgnored, setIsOverviewScreenIgnored] = useState(false);

    useEffect(() => {
        const ignoreOverviewScreen = localStorage.getItem('ignoreOverviewScreen');
        if (!ignoreOverviewScreen) return;
        const isOverviewScreenIgnored = JSON.parse(ignoreOverviewScreen) as boolean;
        setIsOverviewScreenIgnored(isOverviewScreenIgnored);
    }, []);

    return (
        <Form method="post" className="mt-16 mb-10 flex justify-end gap-4 max-w-[95%]">
            <label className="flex gap-1 text-sm items-center text-accentDark">
                Don't show me this again
                <input
                    defaultChecked={isOverviewScreenIgnored}
                    name="ignore-game-overview"
                    className="input-checkbox"
                    type="checkbox"
                />
            </label>
            <button className="flex items-center dark:bg-[rgb(19,19,19)] bg-[#ffffff] border border-accentLight dark:border-[#242424] py-1 px-3 rounded-md text-xl dark:text-[#fff] text-[#000] hover:bg-[#e7e7e7] dark:hover:bg-[rgb(27,27,27)]">
                Next <MdOutlineArrowForwardIos />
            </button>
        </Form>
    );
};

export const procceedToGameAction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const isGameOverviewScreenIgnored = String(Boolean(formData.get('ignore-game-overview')));
    localStorage.setItem('isGameOverviewScreenIgnored', isGameOverviewScreenIgnored);
    return redirect('/game');
};
