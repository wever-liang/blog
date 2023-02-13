function towSum(arr, target) {
    let hash = {}
    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i];
        const gap = target - cur
        if (hash[gap] != undefined) {
            return [hash[gap], i]
        } else {
            hash[cur] = i
        }
    }
}


console.log(towSum([5, 2, 1, 3, 5, 7, 5, 3], 8))