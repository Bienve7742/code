var todolist = ["Buy Groceries", "Walk the Dog", "Finish Homework"];

console.log(todolist[0])

todolist.push("Call mom", "Clean Room")
console.log("After adding: " + todolist.join(", "));
todolist.unshift("Pay Your Debt");
console.log("Final list: " + todolist.join(", "));