import React, { useState, useEffect, useImperativeHandle } from 'react';
const RefCustomeHandle = (props, ref) => {

    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        childChange: () => {
            setOpen(pre => !pre)
        }
    }))

    console.log('open:', open);
    return (
        <div>Ref Custome Handle  {open}</div>
    );
}

export default React.forwardRef(RefCustomeHandle);