let book = {
    title: "1984",
    author: "George Orwell"
};
function hasProperty (obj,prop) {
    return prop in Object; 
}
console.log(hasProperty(book,"title"));
console.log(hasProperty(book,"year"));
