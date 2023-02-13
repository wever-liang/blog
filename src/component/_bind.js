Function.prototype._bind = function (fn, ...args1) {
    let _this = this
    return function F(...args2) {
        if (this instanceof F) {
            return new _this([...args1, ...args2])
        }
        return _this.apply(fn, [...args1, ...args2])
    }
}

Function.prototype._apply = function (fn, args) {
    const context = fn || window
    const temp = symbol()
    context[temp] = fn

    let result = context[temp](...args)

    delete context[temp]
    return result
}