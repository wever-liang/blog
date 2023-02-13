import React, { useState, useEffect } from 'react';
function useCountDown({ initTime }) {
    const [time, setTime] = useState(initTime)

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('count down');
            setTime(time => time > 0 ? time - 1 : time)
        }, 1000);
        console.log('count down useEffect');
        return () => clearInterval(timer)
    }, []);

    return {
        time,
        reset: () => {
            setTime(initTime)
        },
        start: () => {

        }
    };

    // return <div>{time}</div>
}

export default useCountDown;