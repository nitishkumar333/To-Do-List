const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click",addTodo);
todolist.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo)

function addTodo(event)
{
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    if(todoInput.value===""){
        alert("Enter something to add.");
    }else{
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todolist.appendChild(todoDiv);
        todoInput.value="";
        todoInput.placeholder="Enter Task";
    }
}
function deleteCheck(e)
{
    const item = e.target;
    if(item.classList[0]=="trash-btn")
    {
        item.parentElement.classList.add("fall");
        item.parentElement.addEventListener("transitionend",function(){
            item.parentElement.remove();
        })
    }
    if(item.classList[0]=="complete-btn")
    {

        item.parentElement.classList.toggle("completed");
    }
}

function filterTodo(e)
{
    const todos = todolist.childNodes;
    console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value)
        {
        case "all":
            todo.style.display="flex";
            break;
        case "completed":
            if(todo.classList.contains("completed"))
            {
                todo.style.display="flex";
            }
            else{
                todo.style.display="none";
            }
            break;
        case "uncompleted":
            if(!todo.classList.contains("completed"))
            {
                todo.style.display="flex";
            }
            else{
                todo.style.display="none";
            }
            break;
        }
    })
}