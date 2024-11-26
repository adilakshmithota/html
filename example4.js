let student = {
    name: "cherry",
    age: 10,
    grade: "A"
};
for (let key in student){
    console.log('${key}:${student[key]}');
}