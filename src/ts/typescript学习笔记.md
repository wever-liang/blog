### 基础类型
- boolean 
- number
- string
- array
```
两种方式
第一种: 元素类型后加[], 如let list: number[]
第二种: 使用数组泛型如 let list: Array<number>
```
- 元组: 表示一个一直元素数量和类型的数组, 并且可以有多种元素类型
```
let arr: [string, number] = ['str', 3]
```
- 枚举(enum): 对JavaScript数据类型的补充,并不是js原生的类型
```
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

枚举类型与对象类型的却别: 枚举类型可以用于类型检测,实际上也是用对象进行了封装,因为js本身没有枚举类型
```
- object