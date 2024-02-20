import { memo, useEffect } from 'react';
import { Avatar } from './Avatar';
import man1 from '@/assets/avatars/man1.svg';
import man2 from '@/assets/avatars/man2.svg';
import man3 from '@/assets/avatars/man3.svg';
import woman1 from '@/assets/avatars/woman1.svg';
import woman2 from '@/assets/avatars/woman2.svg';
import woman3 from '@/assets/avatars/woman3.svg';

interface Props {
    activeAvatarURL: string;
    saveActiveAvatarURL(avatarURL: string): void;
}

const avatarsURLs = [man1, man2, man3, woman1, woman2, woman3];

export const Avatars = memo(({ activeAvatarURL, saveActiveAvatarURL }: Props) => {
    const pickAvatarHandler = (avatarURL: string) => {
        saveActiveAvatarURL(avatarURL);
    };

    useEffect(() => {
        if (activeAvatarURL) return;
        const randomAvatarURL = avatarsURLs[Math.trunc(Math.random() * avatarsURLs.length)];
        saveActiveAvatarURL(randomAvatarURL);
    }, [activeAvatarURL, saveActiveAvatarURL]);

    return (
        <ul className="mx-auto flex flex-wrap justify-center gap-4">
            {avatarsURLs.map(avatarURL => (
                <Avatar
                    key={avatarURL}
                    isAvatarActive={avatarURL === activeAvatarURL}
                    avatarURL={avatarURL}
                    clickAvatarHandler={() => pickAvatarHandler(avatarURL)}
                />
            ))}
        </ul>
    );
});
