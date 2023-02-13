import * as React from "react"
import { useCallback, memo, useState } from "react"
// import img from '../图片.png'
import {Child} from "./component/Child";
import CountDown from "./component/CountDown";
import ClassComponent from "./component/ClassComponent";
import useCountDown from "./component/useCountDown";
import PublicTest from "./ts/jsTest";
import TsPublicTest from "./ts/tsTest";
import PageLayout from './component/PageLayout'
// const img = import('../图片.png')

export default function App(){
    const countDown = useCountDown()
    const [num, setNum] = useState({num: 0})

    function handleClick(){
        // countDown.start(2)
        setNum({num: 1})
    }

    TsPublicTest.func(1)
    // TsPublicTest.#func3()
    const ts = new TsPublicTest()

    ts.func2(2)

    
    function handleStop(){
        countDown.stop()
    }

    const handleSubmit = () => {
        console.log(num)
    }

    const memoizedFn = useCallback(()=> {
        console.log('memoizedFn executing')
    },[])
    
    console.log('render')
    return(
        <div >
            <PageLayout/>
            {/* <a onClick={handleClick}> start </a>
            <a onClick={handleStop}> stop </a> 
            <div>{countDown.current || 0}</div>
            */}
           
            {/* <img src={img} alt=''/> */}

            <a onClick={handleClick}> add </a>
            <a onClick={handleSubmit}> submit </a>
            <b>{num.num}</b>

            <Child fn={memoizedFn}/>
            <ClassComponent/>
        </div>
    )
}


// export default class App extends React.Component{
//     state = {
//         b: 'b'
//     }
//     componentDidMount(){
//         // setTimeout(() => {
//         //     this.setState((pre, next)=> {
//         //         return {...pre, a: 'a'}
//         //     }, ()=> {
//         //         console.log('after setState1 done')
//         //     })
//         //     console.log('after setState11 done')
//         //     this.setState((pre, next)=> {
//         //         return {...pre, c: 'c'}
//         //     }, ()=> {
//         //         console.log('after setState2 done')
//         //     })
//         //     console.log('after setState22 done')
//         // }, 10);
        
//     }

//     render(){
//         console.log('render',this.state)
//         return <div>
//             app
//             <CountDown/>
//         </div>
//     }
// }