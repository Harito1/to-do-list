
// get elements
var taskform = document.querySelector('.task-form');
var addTaskBtn = document.querySelector('.addTask-btn');
var taskpage = document.querySelector('.taskPage');
var formButtons = document.querySelector('.form-buttons')
var searchTask = document.querySelector('.task-search')

//elements from task form
var taskInput = document.querySelector('.task-input'); 
var saveBtn = document.querySelector('.save-button');
var priorities = document.querySelector('.priority');
var dueDate = document.querySelector('.duedate');
var todolist = document.querySelector('.todo-list');
var editSavebtn = document.querySelector('.save-Edit');

// event listeners
saveBtn.addEventListener('click', saveTask)
addTaskBtn.addEventListener('click', displayAddTaskForm)

editSavebtn.addEventListener('click', saveEditedTask)
searchTask.addEventListener('input', searchForTask)
// taskform.addEventListener('focusout', hideaddTaskForm)



var taskId = new Date().toISOString();
initialize()

function initialize() {
    renderTasks()
}
/**
 * this function creates elements for the task
 * 
 * @param {*} task 
 */
function createTask(task) {
    // todo div
    var todoDiv = document.createElement("div");
    todoDiv.classList.add('todo')
    //todoDiv.setAttribute('data-id', task.id)
    
    // create Li
    var newTodo = document.createElement("li")
    newTodo.innerHTML = task.task;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo);

    // due date
    var dueDate = document.createElement('div')
    dueDate.innerHTML = task.due;
    dueDate.classList.add('due-date')
    todoDiv.appendChild(dueDate)

    //priority
    var priority = document.createElement('div')
    priority.innerHTML = task.priority;
    priority.classList.add('task-priority')
    todoDiv.appendChild(priority)

    // delete and edit button
    var editBtn = document.createElement('button')
    editBtn.innerHTML = 'edit'
    editBtn.classList.add('edit-btn')
    editBtn.setAttribute('data-id', task.id)
    editBtn.addEventListener('click', openEditform)
    todoDiv.appendChild(editBtn)

    var deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'delete';
    deleteBtn.classList.add('delete-btn')
    deleteBtn.setAttribute('data-id', task.id)
    deleteBtn.addEventListener('click', deleteTask)
    todoDiv.appendChild(deleteBtn)

    todolist.appendChild(todoDiv)

    taskInput.value = "";

}

/**
 * this function saves a task to the local storage then renders it to screen
 *  using the rendersTasks function
 * 
 * @param {*} e 
 */
function saveTask(e) {

    var task = {
        task: taskInput.value,
        priority: priorities.options[priorities.selectedIndex].text,
        due: dueDate.value,
        id: new Date().toISOString(),
        currentUserId: CurrentUserId()
    };

    console.log('user id', task.currentUserId);

    var tasks = getAllTasks()
    tasks.push(task)
    localStorage.setItem('Tasks', JSON.stringify(tasks))

    e.preventDefault()

    hideaddTaskForm()
    renderTasks()

}

/**
 * this function shows searched tasks on web page
 */
function rendermatchingTasks(matchingTasks) {
    clearTask()

    for (const task of matchingTasks) {
        createTask(task)
    }
}

/**
 * this function gets tasks from local storage and returns the newtasks
 * 
 * @returns {Array}
 */
function getTasksForCurrentUser() {
    var localTaskstrng = localStorage.getItem('Tasks')
    var localtask = JSON.parse(localTaskstrng)
    var newTasks = []
    
    if (localTaskstrng === null) {
        return newTasks
    }
   
    // loop through tasks and compare task
    for (let i = 0; i < localtask.length; i++) {
        var task = localtask[i];

        if(task.currentUserId === CurrentUserId()) {
           newTasks.push(task)
        }
     }

     return newTasks
     
}

/**
 * this function gets all tasks from all users
 */
function getAllTasks() {
    var localTaskstrng = localStorage.getItem('Tasks')
    var localtask = JSON.parse(localTaskstrng)
    var newTasks = []
    
    if (localTaskstrng === null) {
        return newTasks
    }
     return localtask
}

/**
 * this function gets the saved tasks from local storage and displays it on the screen
 */
function renderTasks() {

    var tasks = getTasksForCurrentUser()

    clearTask()

    for (var task of tasks) {
        createTask(task)
    }

}

/**
 * this function deletes a specific task from the innerhtml and local storage
 * @param {*} e 
 */
function deleteTask(e) {

    var deleteButton = e.target
    var deletebtnID = deleteButton.getAttribute('data-id');
    
    var localTasks = getTasksForCurrentUser()

    var validTasks = []

    for (let i = 0; i < localTasks.length; i++) {
        var task = localTasks[i];
        if (task.id !== deletebtnID) {
            validTasks.push(task)
        }
    }

    console.log(validTasks);
    saveTasksToStorage(validTasks)
    renderTasks()

}

/**
 * this function saves the tasks that were not deleted back into local storage
 */
function saveTasksToStorage(tasks) {
    const tasksString = JSON.stringify(tasks)  
    localStorage.setItem('Tasks', tasksString)
}

/**
 * this function will edit only tasks with matching ids as the edit button clicked
 */
function openEditform(e) {

   displayEditTaskForm()

    var editbtn = e.target
    var editbtnId = editbtn.getAttribute('data-id')
    console.log(editbtnId);

    var localTasks = getTasksForCurrentUser()

    for (let i = 0; i < localTasks.length; i++) {
         var task = localTasks[i];

         if (task.id === editbtnId) {
                taskInput.value = task.task
                priorities.value = task.priority
                dueDate.value = task.due
                editSavebtn.setAttribute('data-id', task.id)
                console.log(task);
            }
       }
}

/**
 * this function must save the edited tasks
 */
function saveEditedTask(e) {
    e.preventDefault()
    var saveEditbtn = e.target
    var saveEditId = saveEditbtn.getAttribute('data-id')

    var localTasks = getTasksForCurrentUser()

    for (let i = 0; i < localTasks.length; i++) {
         var task = localTasks[i];

         if (task.id === saveEditId) {

                task.task = taskInput.value
                task.priority = priorities.options[priorities.selectedIndex].text
                task.due = dueDate.value
                saveTasksToStorage(localTasks);
                break;
            }
       }

    console.log(saveEditId);


    hideaddTaskForm()
    clearTask()
    renderTasks()
}

/**
 * this function will display the add task form and blur the background
 */
function displayAddTaskForm() {
    taskform.style.display = 'grid';
    taskpage.style.filter = 'blur(3px)';
    editSavebtn.style.display = 'none';
}

function displayEditTaskForm() {
    taskform.style.display = 'grid';
    taskpage.style.filter = 'blur(3px)';
    saveBtn.style.display = 'none'
    editSavebtn.style.display = 'block'
}

/**
 * this function removes the add task form and removes the blured background
 */
function hideaddTaskForm() {
    taskform.style.display = 'none'
    taskpage.style.filter = 'blur(0px)'
}

function removeForm() {
    document.querySelector('.edit-container').style.visibility = "hidden";
    todolist.style.filter = 'blur(0px)'
}

/**
 * this function clears the web page once a task is deleted
 */
function clearTask() {
    var list = document.querySelector(".todo-list")
    list.innerHTML = ''
}

function searchForTask(e) {
    var searchText = e.target.value
    // console.log(value);

    var tasks = getTasksForCurrentUser()


    var matchingTasks = []
    for (let i = 0; i < tasks.length; i++) {
        var task = tasks[i];

        var taskName = task.task.toLowerCase()
        var text = searchText.toLowerCase()

        if (taskName.includes(text)) {
            matchingTasks.push(task);
        }
    }

    rendermatchingTasks(matchingTasks)
}