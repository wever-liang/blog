/**
 * 实现逻辑
 * 1.在原型上实现自定义myCall函数,入参为(需要替换的上下文对象, ...参数)
 * 2.myCall函数中的this(上下文)就是调用myCall的函数,即需要执行的函数
 * 3.需要使用传入的上下文对象去执行 this(需要执行的函数)
 * 4.返回调用后的结果 
 */

Function.prototype.myCall = function(content, ...args){
    //如果第一个参数是null, 则使用全局window对象作为执行上下文
    content = content || window
    //fn一个临时的, 唯一的,用于保存'调用myCall函数'的 '函数'(即this)
    let fn = Symbol()
    //将this临时保存到content中
    content[fn] = this

    //用'content'作为'this函数'的'执行上下文'
    let result = content[fn](...args)

    //删除临时的fn
    delete content[fn]

    return result
}

Function.prototype.myApply = function(content, args){
    //如果第一个参数是null, 则使用全局window对象作为执行上下文
    content = content || window
    //fn一个临时的, 唯一的,用于保存'调用myCall函数'的 '函数'(即this)
    let fn = Symbol()
    //将this临时保存到content中
    content[fn] = this

    //用'content'作为'this函数'的'执行上下文'
    let result = content[fn](...args)

    //删除临时的fn
    delete content[fn]

    return result
}

/**
 * bind的主要区别在与,bind不会立即执行函数,而是返回一个改变了上下文
 * 的函数,所以需要使用到闭包
 */
Function.prototype.myBind = function(content, ...args1){
    //
    let _this = this
    return function F(...args2){
        let args3 = [...args1, ...args2]
        if(this instanceof F){
            console.log('hehe', _this, this)
            //这里为什么是new
            return new _this(args3)
        }else{
            console.log('dddd')
            return _this.myApply(content, args3)
        }
    }
}

//测试

let obj1 = {
    num: 1,
    getNum: function(a){
        console.log(this.num, a)
    }
}
let obj2 = { num: '111'}


function Func1(){
    this.a = 'a1'
    console.log('Func1',...arguments)
}

function Func2(){
    this.b = 'a2'
    console.log('Func2',...arguments)
}

//测试myCall
// obj1.getNum.myCall(obj2, 'obj')
// obj1.getNum('res1')

//测试myApply
// obj1.getNum.myApply(obj2, ['obj'])
// obj1.getNum('res1')

//测试myBind
Func2.prototype.info = '这是obj1的info方法';

const NewBind = Func1.myBind(Func2, 5, 6);
const newBind = new NewBind(2, 1);
console.log(newBind.info);

// let _bind = Func1.myBind(Func2, 1,1,1,1)
// let res = _bind()
// console.log('res',res)


// function add (a, b) {
//     return a + b;
// }

// function sub (a, b) {
//     return a - b;
// }

// add.bind(sub, 5, 3); // 这时，并不会返回 8
// // 调用后，返回 8
// console.log('add', add.bind(sub, 5, 3)())