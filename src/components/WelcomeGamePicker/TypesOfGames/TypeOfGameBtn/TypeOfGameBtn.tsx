interface Props {
    gameTypeName: string;
}

export const TypeOfGameBtn = ({ gameTypeName }: Props) => {
    return <button className="text-xl border rounded-md px-2 py-1 text-white">{gameTypeName}</button>;
};
