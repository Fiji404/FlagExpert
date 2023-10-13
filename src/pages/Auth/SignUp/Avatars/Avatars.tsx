import { supabase } from '@/supabase';
import { useEffect, useState } from 'react';
import { Avatar } from './Avatar';

interface Avatar {
    data: string | null;
}

interface Props {
    saveActiveAvatarURL(avatarURL: string): void;
}

export const Avatars = ({ saveActiveAvatarURL }: Props) => {
    const [avatars, setAvatars] = useState<Avatar[]>([]);
    const [activeAvatar, setActiveAvatar] = useState('');

    const pickAvatarHandler = (avatarURL: string) => {
        saveActiveAvatarURL(avatarURL);
        setActiveAvatar(avatarURL);
    };

    // const pickAvatarHandler = (avatarName: string) => {
    //     setActiveAvatar(avatarName);
    // };

    useEffect(() => {
        const getUserAvatars = async () => {
            const { data: avatarsDetails } = await supabase.storage.from('avatars').list();
            const avatarsNames = avatarsDetails?.map(file => file.name);
            const avatars = await Promise.all(
                avatarsNames!.map(async fileName => supabase.storage.from('avatars').getPublicUrl(fileName))
            );
            const avatarsWithUrls = avatars.map(avatar => ({
                ...avatar,
                data: avatar.data.publicUrl
            }));
            setAvatars(avatarsWithUrls);
        };
        getUserAvatars();
    }, []);

    return (
        <ul className="mx-auto flex flex-wrap justify-center gap-4">
            {avatars.map(({ data }) => (
                <Avatar
                    key={data}
                    isAvatarActive={data === activeAvatar}
                    data={data!}
                    clickAvatarHandler={() => pickAvatarHandler(data!)}
                />
            ))}
        </ul>
    );
};
