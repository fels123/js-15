//1. Select this task (in two different ways at
//  least!) and change the background-color to black
//  , text-color to white.
const task1 = document.getElementById("task-1");
const task2 = document.querySelector("ol li");
task1.style.backgroundColor = "black";
task2.style.color = "white";
console.log(task1);

// 2. Change the document title (in <head></head>) to
// "Assignment - Solved!". Use two different ways
// for getting access to the <title> element: Via
// querySelector on document and via querySelector
// on the certain property you find in document.
const titleChange = document.querySelector("title");
titleChange.textContent = "Assignment - Solved!";

// Select the <h1> element on this page and change its text to "Assignment - Solved!".
const h1 = document.querySelector("body h1");
h1.textContent = "Assignment - Solved!";
