let tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

let removedTask = tasks.shift();
console.log("Removed Task:", removedTask);
console.log("Tasks after shift:", tasks); 

tasks.unshift("High Priority Task 1", "High Priority Task 2");
console.log("Tasks after unshift:", tasks);

tasks[tasks.length-1]="New Task";
console.log("Tasks after replace:", tasks);
