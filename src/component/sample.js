import React, { useEffect, useState } from 'react';

function useMouse() {

    const [position, setPosition] = useState({ x: 0, y: 0 })


    useEffect(() => {
        function mouseListen(e) {
            setPosition({
                x: e.pageX,
                y: e.pageY
            })
        }
        window.addEventListener('mousemove', mouseListen)

        return () => {
            window.removeEventListener('mousemove', mouseListen)
        }
    }, [])


    return position
}

export default useMouse