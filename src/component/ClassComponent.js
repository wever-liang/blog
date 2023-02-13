import React from "react";

export default class ClassComponent extends React.Component {

    constructor(){
        super()
        console.log('constructor');
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps');
    }

    UNSAFE_componentWillMount(){
        console.log('UNSAFE_componentWillMount');
    }

    UNSAFE_componentWillReceiveProps(){
        console.log('UNSAFE_componentWillReceiveProps');
    }

    UNSAFE_componentWillUpdate(){
        console.log('UNSAFE_componentWillUpdate');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    state={
        count: 1
    }

    render () {
        return <div onClick={()=> this.setState({count: 2})}>{this.state.count}</div>
    }
    
}