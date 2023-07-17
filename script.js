 // Array to store tasks
 let tasks = [];

 // Function to add a new task
 function addTask() {
   const taskInput = document.getElementById('taskInput');
   const taskText = taskInput.value.trim();

   if (taskText !== '') {
     const newTask = {
       id: Date.now(),
       text: taskText,
       timestamp: getCurrentTime(),
       completed: false
     };

     tasks.push(newTask);
     displayTasks();

     taskInput.value = '';
   }
 }

 // Function to display all tasks
 function displayTasks() {
   const taskList = document.getElementById('taskList');
   taskList.innerHTML = '';

   tasks.forEach(task => {
     const listItem = document.createElement('li');
     listItem.innerHTML = `
       <input type="checkbox" onchange="toggleTask(${task.id})" ${task.completed ? 'checked' : ''}>
       <label>${task.text}</label>
       <span class="timestamp">${task.timestamp}</span>
       <button onclick="deleteTask(${task.id})">Delete</button>
     `;

     taskList.appendChild(listItem);
   });
 }

 // Function to toggle task completion
 function toggleTask(id) {
   const task = tasks.find(task => task.id === id);
   if (task) {
     task.completed = !task.completed;
     displayTasks();
   }
 }

 // Function to delete a task
 function deleteTask(id) {
   tasks = tasks.filter(task => task.id !== id);
   displayTasks();
 }

 // Function to get the current time in HH:mm format
 function getCurrentTime() {
   const now = new Date();
   const hours = now.getHours().toString().padStart(2, '0');
   const minutes = now.getMinutes().toString().padStart(2, '0');
   return `${hours}:${minutes}`;
 }

 // Function to update date and time
 function updateDateTime() {
   const dateTimeContainer = document.getElementById('dateTimeContainer');
   const now = new Date();
   const date = now.toDateString();
   const time = now.toLocaleTimeString();
   dateTimeContainer.textContent = `${date} ${time}`;
 }

 // Update date and time initially and then every second
 updateDateTime();
 setInterval(updateDateTime, 1000)