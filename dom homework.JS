function showstudents() {

let students = [
    {name: "Alex", age: 16, hobby: "Astronomy"},
    {name: "Rima", age: 15, hobby: "Singing"},
    {name: "James", age: 21, hobby: "Modeling"},
];

console.log("Accessing by object keys:");
console.log("Name:", students[0].name);
console.log("Age:", students[0].age);
console.log("Hobby:", students[0].hobby);
console.log("__________________________");

let names = [students[0].name, students[1].name, students[2].name];

let joinednames = names.join(", ");
console.log("The student names are joined!", joinednames);

let removedname = names.pop();
console.log("Removed student", removedname);
console.log("Names after pop", names);

}