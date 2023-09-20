import { HiBars3BottomRight } from 'react-icons/hi2';
import { Button } from '../UI/Button';

interface Props {
    onClick(): void;
}

export const HamburgerBtn = ({ onClick }: Props) => {
    return (
        <Button onClick={onClick} color="blue" className="sm:hidden">
            <HiBars3BottomRight className="text-3xl text-inherit" />
        </Button>
    );
};
