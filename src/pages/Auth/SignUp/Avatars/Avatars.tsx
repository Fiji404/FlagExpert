import { supabase } from '@/supabase';
import { useEffect, useState } from 'react';
import { Avatar } from './Avatar';

interface Avatar {
    data: string | null;
    error: Error | null;
}

export const Avatars = () => {
    const [avatars, setAvatars] = useState<Avatar[]>([]);
    const [activeAvatar, setActiveAvatar] = useState('');

    const pickAvatarHandler = (avatarName: string) => {
        setActiveAvatar(avatarName);
    };

    useEffect(() => {
        const getUserAvatars = async () => {
            const { data: avatarsDetails } = await supabase.storage.from('avatars').list();
            const avatarsNames = avatarsDetails?.map(file => file.name);
            const avatars = await Promise.all(
                avatarsNames!.map(async fileName => await supabase.storage.from('avatars').download(fileName))
            );
            const avatarsWithObjectUrl = avatars.map(avatar => ({
                ...avatar,
                data: URL.createObjectURL(avatar.data!)
            }));
            setAvatars(avatarsWithObjectUrl);
        };
        getUserAvatars();
    }, []);

    return (
        <ul className="mx-auto flex justify-center flex-wrap gap-4">
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
