import { useArray } from 'hooks/useArray';
import { useEffect } from 'react';

export const ArrayComponent = () => {
    const [array, alterArray] = useArray([
        1,
        2,
        true,
        { first: 'Ian', last: 'Rackson' },
        'myString',
        (logString: string) => console.log(logString),
    ]);

    useEffect(() => {
        array && console.log(array);
    }, [array]);

    const doUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const obj = array.find(
            (el: any) =>
                typeof el === 'object' &&
                JSON.stringify(Object.keys(el).sort()) ===
                    JSON.stringify(['first', 'last'])
        );
        const objIndex = array.indexOf(obj);

        if (obj && objIndex) {
            const updatedEl = {
                ...obj,
                first: (obj.first as string).split('').reverse().join(''),
            };
            alterArray.update(objIndex, updatedEl);
        }
    };

    return (
        <div>
            <button onClick={alterArray.reset}>Reset</button>
            <button onClick={() => alterArray.push(new Date().getSeconds())}>
                Add to Array
            </button>
            <button onClick={(e) => doUpdate(e)}>Reverse First Name</button>
            <button onClick={() => alterArray.remove(array.length - 1)}>
                Remove Last Element
            </button>
            <button
                onClick={(e) =>
                    alterArray.filter((el) =>
                        ['number', 'function'].includes(typeof el)
                    )
                }
            >
                Filter
            </button>

            <button
                onClick={(e) =>
                    alterArray.set(
                        Array(array.length).fill(
                            Math.floor(Math.random() * (20 - 10 + 1) + 10)
                        )
                    )
                }
            >
                Set to Random Nums
            </button>
            <button onClick={alterArray.clear}>Clear</button>

            <div>
                {JSON.stringify(
                    array,
                    function (key, val) {
                        if (typeof val === 'function') {
                            return val.toString();
                        }
                        return val;
                    },
                    ' '
                )}
            </div>
        </div>
    );
};
