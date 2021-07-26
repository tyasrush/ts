class User {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
const user = new User(1, 'john doe', 'address test street 21');
const userParam = {
    name: 'testing name',
    address: 'testing address'
};
console.log(`user class \n\nid : ${user.id}\nname : ${user.name}\naddress: ${user.address}`);
console.log(`user param \n\nname : ${userParam.name}\naddress: ${userParam.address}`);
