import React, { useState, useEffect } from 'react';

type T = number | string | undefined

enum str {
    A,
    B,
    C
}
type strUnion = keyof typeof str; // 'A' | 'B' | 'C'

// console.log(strUnion);
interface Person {
    bol: boolean;
    name: string;
    age: number;
    location: string;
}

interface Person2 {
    hight: string;
    age: number;
    // bol: string;
}

type Ids = number[];
type Names = string[];

type Unpacked<T> = T extends (infer R)[] ? R : T;

type idType = Unpacked<Ids>; // idType 类型为 number
type nameType = Unpacked<Names>; // nameType 类型为string

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[];  // number | "length" | "push" | "concat" | ...
type K3 = keyof { [x: string]: Person };  // string | number

type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>;


function useQuery(callback): T {

    const [data, setData] = useState<T>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (callback) {
            setLoading(true)
            callback().then((res: K3) => {
                setData(res)
                setLoading(false)
            })
        }
    }, [])

    return data
}

export default useQuery;