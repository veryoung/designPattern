/**
 * 单例模式
 * 单例模式是一种常用的设计模式，它提供了一个类的实例，该实例在整个程序中只能存在一个。
 * 单例模式的优点是：
 * 1. 对于一个类而言，只有一个实例，而且该实例是唯一的。
 * 2. 划分命名空间，减少全局变量。
 * 3. 增强模块性，把自己的代码组织在一个全局变量名下，放在单一位置，便于维护。
 * 
 */

class themeAdapter {
    constructor() {
    }

    getThemeInfo() {
        return {
            name: 'theme'
        }
    }
}

let getThemeAdapter = () => {
    let adapter
    if(!adapter) {
        adapter = new themeAdapter()
    }
    return adapter
}

const themeInfo = getThemeAdapter().getThemeInfo()
console.log(themeInfo)

/**
 * 单例模式的应用场景
 * 1. 全局唯一的实例，但是需要可以被多个组件共享
 */

/**
 * 单例模式的缺点
 * 1. 多模块的耦合会较为严重
 */
