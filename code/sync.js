// console.log(1)
// let a = new Promise((resolve,  reject)=> {
//     console.log(2)
//     resolve()
//     setTimeout(() => {
//         console.log(3)
//     }, 0);
// })

// a.then(res => {
//     console.log(4)
// })

// console.log(5)

function getLocation(params) {
    return new Promise((resolve,  reject)=> {
        setTimeout(() => {
            resolve(true)
        }, 0);
    })
}

async function isHK(){
    let res = await getLocation()
    console.log(res)
    // return res
}

isHK()
// let is_hk = await isHK()