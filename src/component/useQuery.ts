import React, { useState, useEffect } from 'react';

type Response = number | string | undefined

// 比如
type Res = () => Promise<Response>;
type ResType = ReturnType<Res>;

// 其他例子
// type T0 = ReturnType<() => string>; // string
// type T1 = ReturnType<<T>() => T>; // unknown
// type T2 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]

const resData = useQuery(() => fetch('http:').then(res => res.status))

function useQuery(callback: Res): ResType {
    const [data, setData] = useState<Response>()

    useEffect(() => {
        if (callback) {
            callback().then((res) => {
                setData(res)
            })
        }
    }, [])

    return data
}

export default useQuery;