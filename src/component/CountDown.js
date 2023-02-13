import React, { useState, useEffect } from 'react'

export default function CountDown(){

    const [time, setTime ] = useState(0)
    const [timing, setTiming ] = useState(false)

    useEffect(()=> {
        if(timing){
            console.log('开始');
            const interval = setInterval(()=> {
                console.log('进入定时器');
                setTime((pre) => {
                    if(pre === 0){
                        clearInterval(interval)
                        setTiming(false)
                        return pre
                    }
                    return pre - 1
                })
            }, 1000)
            return ()=> clearInterval(interval)
        }
    }, [timing])

    function handleClick(){
        setTime(5)
        setTiming(true)
    }

    return(
        <div onClick={handleClick}>
            {timing > 0 ? time : 'start'}
        </div>
    )
}