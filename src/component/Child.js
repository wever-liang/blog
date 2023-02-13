import React, { memo, useEffect, useState } from "react";

function ChildComponent({fn}){
    const [ count, setCount ] = useState(0)
    const [ count2, setCount2 ] = useState(0)
    console.log('child render')
    fn()

    useEffect(()=> {
        async function fetchData(){
            let res = await fetch('')
            setCount(count=> count+1)
            setCount2(count2=> count2+2)
        }
        fetchData()
    },[])
    
    console.log('render childß', count, count2)
    return (
        <div>child</div>
    )
}


// export const Child = memo(ChildComponent)
export const Child = ChildComponent