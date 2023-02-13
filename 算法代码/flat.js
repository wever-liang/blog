
//1. 数组扁平化
function flat(arr) {
    let stack = [...arr], result = [];
    while (stack.length) {
        let cur = stack.shift()
        if (cur instanceof Array) {
            stack.unshift(...cur)
            continue;
        }
        console.log(cur);
        result.push(cur)
    }
    return result
}

let result = flat([false, [{}, 1, [1, 3, 4, [2, 3]]], 'dsd'])
console.log('result: ', result)


// 2. 已知如下数组：编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
var datas = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function flat_deduplication(arr) {
    let flatArr = arr.flat(Infinity)
    return [...new Set(flatArr)].sort((a, b) => a - b)
}

flat_deduplication(datas)