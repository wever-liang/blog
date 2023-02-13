let obj = {
    name: 'title1',
    children: [
        {
            name: '1-1',
            children: [
                { name: '1-1-1', children: [] },
                { name: '1-1-2', children: [] }
            ]
        },
        {
            name: '2-1',
            children: [
                { name: '2-1-1', children: [] },
                { name: '2-1-2', children: [] }
            ]
        }
    ]
}

//广度优先遍历(不递归)
function BFS(nodes) {
    //栈,先进后出
    let stack = [], result = []
    stack.push(nodes)

    while (stack.length) {
        let item = stack.shift()
        result.push(item.name)
        item.children.forEach(child => {
            stack.push(child)
        })
    }
    return result
}

function bfs(nodes) {
    let stack = [], result = [];
    stack.push(nodes)
    while (stack.length) {
        let { name, children = [] } = stack.shift()
        result.push(name)
        if (children.length > 0) {
            stack.push(...children)
        }
    }
    return result
}

console.log('bfs: ', BFS(obj));


//深度优先遍历(不使用递归,但是子节点顺序有问题,是倒序)
function DFS(nodes) {
    //栈,先进后出
    let stack = [], result = []

    stack.push(nodes)

    while (stack.length) {
        let item = stack.pop()
        result.push(item.name)
        item.children.forEach(child => {
            stack.push(child)
        })
    }

    return result
}

//深度优先遍历(递归)
function DFS2(node) {
    let result = []
    result.push(node.name)

    node.children.forEach(child => {
        let res = DFS2(child)
        result = [...result, ...res]
    })
    return result
}

// console.log(DFS2(obj))
