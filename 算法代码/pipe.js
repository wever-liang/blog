//从左到右
function _pipe(...args) {
    return (x) => args.reduce((pre, fn) => fn(pre), x)
}

//从右到左
function _compose(...args) {
    return (x) => args.reduceRight((pre, fn) => fn(pre), x)
}

let pipeFn = _pipe(Math.floor, Math.round)
let composeFn = _compose(Math.floor, Math.round)
const pipe_res = pipeFn(1.5)
const compose_res = composeFn(1.5)

console.log('pipe_res:', pipe_res);
console.log('compose_res:', compose_res);