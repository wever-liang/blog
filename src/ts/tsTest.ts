//默认情况下，从0开始为元素编号。你也可以手动的指定成员的数值,从某个数开始编号
enum Color {
    red,
    green,
    blue
}

export default class TsPublicTest {
    
    static func(color: Color) {
        console.log('func', color);
        console.log('func', Color.blue);
    }

    func2(color: Color) {
        console.log('func2', color);
    }

    // static #func3() {
        
    // }
}