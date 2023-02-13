function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let midVal = arr.splice(mid, 1)[0]
    let lefts= [], rights = [];


    arr.forEach(item=> {
        if(item < midVal){
            lefts.push(item)
        }else if(item > midVal){
            rights.push(item)
        }
    })

    return [...quickSort(lefts), midVal, ...quickSort(rights)]
}

//测试
console.log(quickSort([4,2,5,62,3,1,0]))


console.log(0)

let pro = new Promise((resolve, reject)=> {
    console.log(1)
    resolve()
    console.log(2)
})

pro.then(()=> {
    console.log(3)
})

console.log(4)