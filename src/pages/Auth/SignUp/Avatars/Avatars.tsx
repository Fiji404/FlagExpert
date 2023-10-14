import { supabase } from '@/supabase';
import { memo, useEffect, useState } from 'react';
import { Avatar } from './Avatar';

interface Props {
    activeAvatarURL: string;
    saveActiveAvatarURL(avatarURL: string): void;
}

export const Avatars = memo(({ activeAvatarURL, saveActiveAvatarURL }: Props) => {
    const [avatarsURLs, setAvatarsURLs] = useState<string[]>([]);
    const [storageError, setStorageError] = useState('');

    const pickAvatarHandler = (avatarURL: string) => {
        saveActiveAvatarURL(avatarURL);
    };

    useEffect(() => {
        const getUserAvatars = async () => {
            const { data: avatarsDetails, error: storageError } = await supabase.storage.from('avatars').list();
            if (storageError) return setStorageError(storageError.name);
            const avatarsNames = avatarsDetails.map(file => file.name);
            const avatarsURLs = await Promise.all(
                avatarsNames.map(
                    async fileName => supabase.storage.from('avatars').getPublicUrl(fileName).data.publicUrl
                )
            );
            setAvatarsURLs(avatarsURLs);
        };
        getUserAvatars();
    }, []);

    useEffect(() => {
        if (activeAvatarURL) return;
        const randomAvatarURL = avatarsURLs[Math.trunc(Math.random() * avatarsURLs.length)];
        saveActiveAvatarURL(randomAvatarURL);
    }, [activeAvatarURL, avatarsURLs, saveActiveAvatarURL]);

    return (
        <ul className="mx-auto flex flex-wrap justify-center gap-4">
            {storageError ? (
                <p>Avatars can't be downloaded</p>
            ) : (
                avatarsURLs.map(avatarURL => (
                    <Avatar
                        key={avatarURL}
                        isAvatarActive={avatarURL === activeAvatarURL}
                        avatarURL={avatarURL}
                        clickAvatarHandler={() => pickAvatarHandler(avatarURL)}
                    />
                ))
            )}
        </ul>
    );
});
