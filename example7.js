let user = {
    name: "cherry",
    age: 10
};
function cloneObject(obj) {
    let clone = {}
    for (let key in obj) {
        clone[key]=obj[key];
    }
    return clone;
}
let userClone = cloneObject(user);
console.log(userClone);