//  工厂模式
//  工厂模式定义了一个创建对象的接口，让子类决定实例化哪一个类。工厂模式让类的实例化延迟到子类。
class Product {
    constructor(name) {
        this.name = name
    }

    getCompanyInfo() {
        return this.name
    }

}

class Factory {
    create(name) {
        return new Product(name)
    }
}

let factory = new Factory()
let txInfo = factory.create('tx')

let companyInfo = txInfo.getCompanyInfo()
console.log('工厂模式', companyInfo)

txInfo.setCompanyInfo = function({name}) {
        this.name = name 
}
txInfo.setCompanyInfo({name: 'wx'})
companyInfo = txInfo.getCompanyInfo()

console.log('工厂模式', companyInfo)

// 工厂模式适用场景
// 1. 解耦子系统和父应用之间的关系
// 2. 需要依赖子系统的类，但是不想在系统中显式引入子系统类
// 3. 实例之间有相同的逻辑，或者根据具体的环境引入不同的实例

// 工厂模式的缺点
// 1. 工厂模式的缺点是，每次新增一个产品，都需要修改工厂类，这样会导致工厂类的代码膨胀，不利于维护。
// 2. 引入了抽象层的定义增加了维护成本。
