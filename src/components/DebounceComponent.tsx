import { useDebounce } from 'hooks/useDebounce';
import { useState } from 'react';

export const DebounceComponent = () => {
    const [count, setCount] = useState(10);
    useDebounce(() => alert(count), 1000, [count]);

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        </>
    );
};
