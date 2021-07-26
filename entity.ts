interface UserItf {
    id: number
    name: string
    address: string
}

class User implements UserItf {
    id: number
    name: string
    address: string
    
    constructor(id: number, name: string, address: string){
        this.id = id
        this.name = name
        this.address = address
    }
}

type UserParam = {
    name: string
    address: string
}

const user: UserItf = new User(1,'john doe','address test street 21')
const userParam: UserParam = {
    name: 'testing name',
    address: 'testing address'
}

console.log(`user class \n\nid : ${user.id}\nname : ${user.name}\naddress: ${user.address}`)
console.log(`user param \n\nname : ${userParam.name}\naddress: ${userParam.address}`)