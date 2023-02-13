import React, { useEffect, useMemo, useState } from 'react'
import './test.css'
import styles from './PageLayout.module.css'
import { LocalContext } from '../context/LocalContext'
import ConsumerPage from './ConsumerPage'
import NoConsumerPage from './NoConsumerPage'
import RefPage from './RefPage'
import RefCustomeHandle from './RefCustomeHandle'
import CountDown from './CountDown'
import useMouse from './sample'
// import useCountDown from '../hooks/useCountDown'

const PageLayout = () => {

    let [language, setLanguage] = useState('en')
    let [theme, setTheme] = useState('red')
    let [isOn, setIsOn] = useState(false)
    // let position = useMouse()
    // let { time } = useCountDown(60)
    // console.log('position: ', position);

    const ref1 = React.createRef()
    const ref2 = React.createRef()

    // const s = new Promise.allSettled([1, 2])

    const localContext = useMemo(() => {
        return {
            language,
            theme,
            onChangeLanguage: (newVal) => {
                setLanguage(newVal)
            },
            onThemeLanguage: (newVal) => {
                setTheme(newVal)
            }
        }
    }, [language, theme])

    console.log(isOn)
    console.log('ref2:', ref2)

    useEffect(() => {
        //ref2可以得到子组件提供的方法(面试题: 父组件获取子组件方法)
        ref2.current?.childChange && ref2.current.childChange()
    }, [])

    return (
        <LocalContext.Provider value={localContext}>
            <div className={styles['body']}>
                <div className={styles['left']}>left</div>
                <div className={styles['right']}>
                    <div className={styles['head']}>head</div>
                    <div className={styles['content']}>content</div>
                    <div className={styles['bottom']}>bottom</div>
                </div>
                {/* 只要父组件触发了更新,即使子组件没改变肯定也会重新渲染,如果想要优化,只能通过子组件中使用的showComponentUpdate或者react.memo去优化更新策略(面试题: React渲染优化) */}
                <ConsumerPage />
                <NoConsumerPage />
                <RefPage ref={ref1} />
                <RefCustomeHandle ref={ref2} />
                <CountDown initTime={60} />
                <div className='test' onClick={() => setIsOn(pre => !pre)}>test</div>
            </div>
        </LocalContext.Provider>
    )
}

export default PageLayout