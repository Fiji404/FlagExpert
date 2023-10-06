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
            className={`box-content max-w-[60px] cursor-pointer rounded-full border border-[#ccc] p-2 dark:border-[#222] dark:bg-[#111] ${
                isAvatarActive ? 'outline-style dark:bg-[#222] bg-[#f0f0f0]' : ''
            }`}
        />
    );
};
