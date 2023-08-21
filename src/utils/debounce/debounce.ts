type DebounceFuncArg = (...args: unknown[]) => void;
type DebounceDelayArg = number;

export const debounce = (fn: DebounceFuncArg, delay: DebounceDelayArg) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: unknown[]) => {
        clearTimeout(timer);
        timer = setTimeout(fn.bind(null, args), delay);
    };
};
