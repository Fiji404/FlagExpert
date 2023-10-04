import { twMerge } from 'tailwind-merge';

interface Props {
    data: string;
    isAvatarActive: boolean;
    clickAvatarHandler(): void;
}

export const Avatar = ({ data, isAvatarActive, clickAvatarHandler }: Props) => {
    return (
        <img
            src={data!}
            onClick={clickAvatarHandler}
            className={twMerge(
                `form-input box-content max-w-[60px] cursor-pointer rounded-full p-2 ${
                    isAvatarActive ? 'outline-style' : ''
                }`,
                'rounded-full'
            )}
        />
    );
};
