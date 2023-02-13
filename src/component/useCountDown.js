import React, { useState, useEffect } from 'react'

export default function useCountDown(){

    const [time, setTime ] = useState(0)
    const [timing, setTiming ] = useState(false)

    useEffect(()=> {
        if(timing){
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

    function start(initCount){
        setTime(initCount)
        setTiming(true)
    }

    function stop(){
        setTime(0)
    }

    return {
        start,
        stop,
        current: time,
        isCounting: timing
    }
}