class Singleton{
    data;
    constructor() {

        if(Singleton.instance) return Singleton.instance

        Singleton.instance=this

        return this
    }

    getData(){
        return this.data
    }

    setData(data){
        this.data = data
    }
}

class NotSingleton{
    data;
    getData(){
        return this.data
    }

    setData(data){
        this.data = data
    }
}

const instance1=new Singleton()
const instance2=new Singleton()
instance1.setData("Merhaba 1")
instance2.setData("Merhaba 5") // Last value is more important

console.log(instance1.getData())
console.log(instance2.getData())

const instance3=new NotSingleton()
const instance4=new NotSingleton()
instance3.setData("Merhaba 2")
instance4.setData("Merhaba 3")

console.log(instance3.getData())
console.log(instance4.getData())