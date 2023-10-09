interface Props {
    onClick(): void;
}

export const Backdrop = ({ onClick }: Props) => {
    return <div onClick={onClick} className="fixed inset-0 z-10 bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(0,0,0,0.6)]" aria-hidden="true"></div>;
};
