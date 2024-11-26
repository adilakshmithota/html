let userInfo1 = {
    name: "sanvi",
    age: 8
};
let userInfo2 = {
    age: 9,
    city: "New York"
};
let mergedUser = Object.assign({},userInfo1,userInfo2);
console.log(mergedUser);