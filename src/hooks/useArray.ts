import { useState } from 'react';

export const useArray = (
    defaultValue: any[]
): [
    any[],
    {
        set: React.Dispatch<React.SetStateAction<any[]>>;
        push: <T>(element: T) => void;
        filter: <T>(callback: (element: T) => boolean) => void;
        update: <T>(index: number, newElement: T) => void;
        remove: (index: number) => void;
        clear: () => void;
        reset: () => void;
    }
] => {
    const [array, setArray] = useState(defaultValue);

    const push = <T>(element: T) => {
        setArray((a) => [...a, element]);
    };

    const filter = <T>(callback: (element: T) => boolean) => {
        setArray((a) => a.filter(callback));
    };

    const update = <T>(index: number, newElement: T) => {
        setArray((a) => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length),
        ]);
    };

    const remove = (index: number) => {
        setArray((a) => [
            ...a.slice(0, index),
            ...a.slice(index + 1, a.length - 1),
        ]);
    };

    const clear = () => {
        setArray([]);
    };

    const reset = () => {
        setArray(defaultValue);
    };

    return [
        array,
        { set: setArray, push, filter, update, remove, clear, reset },
    ];
};
