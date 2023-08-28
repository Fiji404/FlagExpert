export const getLocalStorageValue = (key: string) => {
    const localStorageValue = localStorage.getItem(key);
    return localStorageValue;
};
