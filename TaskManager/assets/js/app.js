const taskInput = document.querySelector('#task'); 
const form = document.querySelector('#task-form');  
const filter = document.querySelector('#filter');                  
const taskList = document.querySelector('.collection'); 
const clearBtn = document.querySelector('.clear-tasks');   
//the reload button at the top right of navigation
const reloadIcon = document.querySelector('.fa');  
const orderBtn = document.querySelector('select');

let tasks;
let tasksArray;



// form submit
form.addEventListener('submit', addNewTask);
// clear all tasks
clearBtn.addEventListener('click', clearAllTasks);
// filter task
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);
// event listener for ascending/descending 
orderBtn.addEventListener('change', changeOrder);


function addNewTask(e) {
    if (taskInput.value === "") {
        taskInput.style.borderColor = "red";
        return;
    }

    taskInput.style.borderColor = "black";
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));

    // add date to li for sorting/ordering in ascending/descending order
    const date = document.createElement("time");
    date.setAttribute("datetime", Date.now());
    li.appendChild(date);

    const link = document.createElement("a");
    link.innerHTML = '<i class="fa fa-remove"></i>';
    link.className = 'delete-item secondary-content';

    li.appendChild(link);
    taskList.appendChild(li);

    e.preventDefault();
}

function clearAllTasks(e) {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks(e) {
    let inputTxt = document.querySelector("#filter").value;
    let tasksFilter = document.querySelectorAll(".collection-item");
    tasksFilter.forEach( function(task) {
        if (task.textContent.indexOf(inputTxt) == -1) {
            task.style.display = "none";
        } else {
            task.style.display = "block";
        }
    })
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm("Are you sure about that?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function reloadPage() {
    //using the reload function on location object 
    location.reload();
}

function changeOrder() {
    tasks = document.querySelectorAll(".collection-item");
    tasksArray = [];

    // convert NodeList to Array
    tasks.forEach(function(task) {
        tasksArray.push(task);
    });

    // check which value order button was changed to
    if (orderBtn.value == 'desc'){
        tasksArray = descendingOrder(tasksArray);
    } else if (orderBtn.value == 'asc') {
        tasksArray = ascendingOrder(tasksArray);
    } else {
        return;
    }

    // convert Array items to Nodes and display the sorted list
    displayOrder(tasksArray);
}

function ascendingOrder(tasks) {
    tasks = tasks.sort(function(a, b) {
        if (parseInt(a.getAttribute("datetime")) < parseInt(b.getAttribute("datetime"))){
            return 1;
        } else {
            return -1;
        }
    });

    return tasks;
}

function descendingOrder(tasks) {
    tasks = tasks.sort(function(a, b) {
        if (parseInt(a.getAttribute("datetime")) > parseInt(b.getAttribute("datetime"))){
            return 1;
        } else {
            return -1;
        }
    });

    return tasks;
}

function displayOrder(tasksArray) {
    taskList.innerHTML = '';
    tasksArray.forEach( function(task) {
        let li = document.createElement("li");
        li.innerHTML = task.innerHTML;
        li.className = "collection-item";
        taskList.appendChild(li);
    });
}
