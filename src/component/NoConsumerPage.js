import React from 'react';

const NoConsumerPage = () => {
    console.log('no consumer page')
    return (
        <div style={{ backgroundColor: 'green' }}>
            <span>no consumer page</span>
        </div>
    )
}

export default NoConsumerPage
// export default React.memo(NoConsumerPage)