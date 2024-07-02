class User{
    constructor(builder){
        this.firstName = builder.firstName
        this.lastName = builder.lastName
        this.age = builder.age
        this.address = builder.address
        this.phone = builder.phone
        this.salary = builder.salary
    }
    
    static builder(name, lastName){
       return new UserBuilder(name, lastName) 
    }
}

class UserBuilder{
    constructor(name, lastName){
        this.firstName = name
        this.lastName = lastName
    }

    age(age){
        this.age = age
        return this
    }

    phone(phone){
        this.phone = phone
        return this
    }

    address(address){
        this.address = address
        return this
    }

    salary(salary){
        this.salary = salary
        return this
    }

    build(){
        const user = new User(this)
        return user
    }
}

const userWithBuilder = User.builder("Yusuf","Güngörür").age("17").address("Gebze/Kocaeli").phone("05529999999").salary("23.000$").build()
console.log(userWithBuilder)