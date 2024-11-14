const addTask = () => {

};

const updateTodoList = () => {

};

const createNewTodoItemElement = (task, index) => {

};

const toggleComplete = (index) => {
    
};

let todoTasks = ["Walk Chilli", "Make Dinner"];

const todoList = document.getElementById("todo-list");

for (const task of todoTasks) {
  // Create a <p> element to store the task description
  const newTodoTaskTextElement = document.createElement("p");
  newTodoTaskTextElement.innerText = task;
  
  // Create a <li> element to contain the paragraph
  const newTodoTaskElement = document.createElement("li");
  newTodoTaskElement.appendChild(newTodoTaskTextElement);
  
  // Add the <li> element to the list
  todoList.appendChild(newTodoTaskElement);
}