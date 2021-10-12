import { useTimeout } from 'hooks/useTimeout';
import { useEffect } from 'react';
export const useDebounce = (
    callback: () => void,
    delay: number,
    dependencies: any[]
): void => {
    const { reset, clear } = useTimeout(callback, delay);
    useEffect(reset, [...dependencies, reset]);
    useEffect(clear, []);
};
