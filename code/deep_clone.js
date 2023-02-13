//方法一: 递归遍历
function deepClone(initalObj) {
    var obj = (initalObj instanceof Array) ? [] : {};
    for (var key in initalObj) {
        var value = initalObj[key];
        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if (value === obj) {
            continue;
        }
        if (typeof value === 'object' && value !== null) {
            obj[key] = deepClone(value)
        } else if (typeof value === 'function') {
            let newfunc = function () { }
            obj[key] = newfunc.bind(value)
        } else {
            obj[key] = value;
        }
    }
    return obj;
}

//方法二: JSON.stringify + JSON.parse
function deepClone2(obj) {
    return JSON.parse(JSON.stringify(obj))
}

var obj = {
    a: {
        a: "hello",
        b: 21,
        c: [1, 2, 3, { d: '' }]
    },
    getName() {
        console.log(this.a)
    }
};


var str = deepClone(obj);
var str2 = deepClone2(obj);

console.log(str, str2.a);