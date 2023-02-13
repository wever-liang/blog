/**
 * 查找无序不重复数组中第K大的元素
 */
//1. 找出前面K个数组中最大的值,保存起来 
//2. 遍历剩余数组
//3. 与最大值比较
function find(arr, k){
    let stack = arr[0]
    for (let i = 1; i < arr.length -1; i++) {
        const cur = arr[i];
        let stackLen = stack.length
        const top = stack[stackLen-1]
        if(stackLen < k && ){

        }
        if(top < cur){
            stack[stack.length-1] = cur
        }
    }
}


/**
 * 方法二: 对数组排序后,查找
 */
 function find2(arr, k){
    let stack = [arr[0]]
    for (let i = 1; i < arr.length -1; i++) {
        const cur = arr[i];
        let stackLen = stack.length
        const top = stack[stackLen-1]
        if(stackLen < k && ){

        }
        if(top < cur){
            stack[stack.length-1] = cur
        }
    }
}

console.log(find([2, 1, 4, 3, 5, 9, 8, 0, 1, 3, 2, 5], 6))