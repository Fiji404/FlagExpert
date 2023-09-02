import { FaXmark } from 'react-icons/fa6';

interface Props {
    children?: React.ReactNode;
}

export const ErrorMessage = ({ children }: Props) => {
    return (
        <p className="flex items-center gap-1 text-red-500">
            <FaXmark className="text-red-500" />
            {children}
        </p>
    );
};
