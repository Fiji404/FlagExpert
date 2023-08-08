import { Benefit } from './GameBenefit';
import { GiBrain } from 'react-icons/gi';
import { HiFaceSmile } from 'react-icons/hi2';
import { RiFocus3Line } from 'react-icons/ri';

const FLAGGY_BENEFITS = [
    {
        name: 'Education',
        icon: <GiBrain className="benefit-icon text-[#fd88b5]" />,
        description: `Flag-based games can serve as excellent educational tools, particularly for learning geography and 
             gaining knowledge about different countries' cultures. Players are required to recognize and identify 
             flags from various nations, expanding their understanding of the world and aiding in the memorization of different 
             national symbols.`
    },
    {
        name: 'Fun and entertainment',
        icon: <HiFaceSmile className="benefit-icon text-[#39e023]" />,
        description: `Flag-based games are primarily a source of entertainment. 
            They can provide a great deal of joy and excitement, especially when they include various game modes, 
            challenges, and rewards. They can serve as an excellent form of relaxation and leisure while allowing players 
            to expand their knowledge of flags and derive pleasure from recognizing them.`
    },
    {
        name: 'Improved concentration',
        icon: <RiFocus3Line className="benefit-icon text-[#e02323]" />,
        description: `Flag-based games can significantly enhance concentration skills. When playing these games, players must pay close attention 
            to the details of flags, such as colors, patterns, and symbols, in order to correctly identify them.This level of focus and 
            concentration trains the mind to stay attentive and 
            increases the ability to sustain attention for longer periods.`
    }
];

export const GameBenefits = () => {
    return (
        <>
            <article className="mt-12 flex justify-center flex-wrap gap-5 px-4">
                {FLAGGY_BENEFITS.map(benefit => (
                    <Benefit key={benefit.name} {...benefit} />
                ))}
            </article>
        </>
    );
};
