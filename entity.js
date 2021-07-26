var User = /** @class */ (function () {
    function User(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    return User;
}());
var user = new User(1, 'john doe', 'address test street 21');
var userParam = {
    name: 'testing name',
    address: 'testing address'
};
console.log("user class \n\nid : " + user.id + "\nname : " + user.name + "\naddress: " + user.address);
console.log("user param \n\nname : " + userParam.name + "\naddress: " + userParam.address);
