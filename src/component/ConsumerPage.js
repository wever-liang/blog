import React from 'react';
import { LocalContext } from '../context/LocalContext';

const ConsumerPage = () => {
    console.log('consumer page')
    return (
        <div>
            <div>consumer page</div>
            <LocalContext.Consumer>
                {localCxt => {
                    console.log(localCxt)
                    const lang = localCxt.language
                    return (
                        <div>
                            <span>{localCxt.language}</span>
                            <button onClick={() => localCxt.onChangeLanguage(lang === 'zn' ? 'en' : 'zn')}> change </button>
                        </div>
                    )
                }}
            </LocalContext.Consumer>
        </div>
    )
}

// export default ConsumerPage
//使用React.memo(component, eqlFn?)优化子组件的渲染更新: 当子组件获取到的prop没发生改变时,子组件不会触发重新渲染, 但当context改变时, 子组件一定会触发更新
export default React.memo(ConsumerPage)