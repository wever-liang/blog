import React, { useState, useEffect } from 'react';

const RefPage = React.forwardRef((props, ref) => {

    return (
        <div ref={ref}>get a ref from this component </div>
    )
})

export default RefPage;