interface Props {
    name: string;
    icon: React.ReactNode;
    description: string;
}

export const Benefit = ({ name, description, icon }: Props) => {
    return (
        <section
            className="grow basis-80 py-6 px-4 border bg-[#fff] border-[#dddddd] dark:border-[#242424] dark:bg-[rgb(19,19,19)] rounded-md min-w-[300px] 
            hover:shadow-[#ececec] dark:hover:shadow-[rgb(23,23,23)] hover:shadow-xl hover:scale-[1.01] opacity-0  animate-[originate_500ms_700ms_forwards] transition-all"
        >
            <h2 className="flex justify-center items-center gap-3 text-center text-[2.2rem] font-semibold text-black dark:text-white">
                {name} {icon}
            </h2>
            <p className="mt-2 text-[1.4rem] text-center text-accentDark">{description}</p>
        </section>
    );
};
