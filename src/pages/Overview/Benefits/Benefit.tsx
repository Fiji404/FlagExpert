interface Props {
    name: string;
    icon: React.ReactNode;
    description: string;
}

export const Benefit = ({ name, description, icon }: Props) => {
    return (
        <section
            className="min-w-[350px] grow basis-80 animate-[originate_500ms_700ms_forwards] rounded-md border border-[#dddddd] bg-[#fff] px-4 py-6 opacity-0 dark:border-[#242424] dark:bg-[rgb(19,19,19)]"
        >
            <h3 className="flex items-center justify-center gap-3 text-center text-[2.2rem] font-semibold text-black dark:text-white">
                {name} {icon}
            </h3>
            <p className="mt-2 text-center text-[1.4rem] text-accentDark">{description}</p>
        </section>
    );
};
