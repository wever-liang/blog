/**
 * 冒泡排序
 * 从下标0开始遍历数组中每一个值,与在它(下标)后面的所有值进行比较,如果大于(小于)则调换下标,最终得到最小值(最大值)
 */
function bubbleSort(arr){
    let temp;
    for (let i = 0; i < arr.length -1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

//测试
// console.log(bubbleSort([4,2,5,62,3,1,0]))



/**
 * @description 快速排序
 * 实现逻辑: 
 * 1. 先选取作为基准的值(一般取数组中间),取中间值时从数组中删掉
 * 2. 将大于和小于基准值的分别放入不同的数组保存
 * 3. 用相同逻辑递归这两个数组(当数组长度小于1时结束递归,返回数组)
 * 4. 将返回的数据与中间值进行合并得到最终结果
 */
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let midIndex = Math.floor(arr.length /2);
    let mid = arr.splice(midIndex,1)
    let leftArr=[], rightArr=[];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > mid){
            rightArr.push(arr[i])
        }else{
            leftArr.push(arr[i])
        }
    }
    return quickSort(leftArr).concat(mid, quickSort(rightArr))
}


//测试
console.log(quickSort([4,2,5,62,3,1,0]))




