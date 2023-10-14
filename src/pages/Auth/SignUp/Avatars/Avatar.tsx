interface Props {
    avatarURL: string;
    isAvatarActive: boolean;
    clickAvatarHandler(): void;
}

export const Avatar = ({ avatarURL, isAvatarActive, clickAvatarHandler }: Props) => {
    return (
        <img
            src={avatarURL}
            onClick={clickAvatarHandler}
            className={`box-content max-w-[60px] cursor-pointer rounded-full border border-[#ccc] p-2 dark:border-[#222] dark:bg-[#111] ${
                isAvatarActive ? 'outline-style bg-[#f0f0f0] dark:bg-[#222]' : ''
            }`}
        />
    );
};
