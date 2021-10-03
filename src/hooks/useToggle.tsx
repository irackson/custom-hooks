import { useState } from 'react';

export const useToggle = (
    defaultValue: boolean
): [boolean, (value?: boolean | undefined) => void] => {
    const [value, setValue] = useState<boolean>(defaultValue);

    const toggleValue = (value?: boolean) => {
        setValue((currentValue) => value ?? !currentValue);
    };

    return [value, toggleValue];
};
