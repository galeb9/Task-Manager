const addTaskBtn = document.querySelector("#add-task-btn");
const tasksContainer = document.querySelector("#tasks-container");
const inputedTask= document.querySelector("#input-task");
let taskTitle = "";

const firstToUpper = (str) =>{
    return str[0].toUpperCase() + str.substring(1);
}

const makeNewTask = () =>{
    // main parent
    const newTask = document.createElement("div");
    tasksContainer.append(newTask);
    newTask.classList.add("newTask")    

    // task head
    const taskHeadContainer = document.createElement("div");
    newTask.append(taskHeadContainer);
    taskHeadContainer.classList.add("task-head-container");
        // task head children
        // make p
        const taskP = document.createElement("p");
        taskTitle = inputedTask.value;
        taskP.innerHTML= `<input type='checkbox'> <span>${firstToUpper(taskTitle)}</span>`;
        taskHeadContainer.append(taskP); 
        taskP.classList.add("taskP")

        // make button holder
        const btnHolder = document.createElement("div");
        btnHolder.classList.add("btn-holder");

            // add textarea btn 
            const addBtn = document.createElement("i");
            addBtn.addEventListener("click",()=>{
                const textareaContainer = document.createElement("div");
                newTask.append(textareaContainer);
                textareaContainer.classList.add("text-area-container")
                textareaContainer.innerHTML=`<span class="textarea-con-span">
                                                <input class="textarea-item" placeholder="sub task goes here..." type="text">
                                             </span>`;
                // make sub i toggle green 
                const makeItGreen = document.createElement("i");
                makeItGreen.addEventListener("click",()=>{
                    makeItGreen.classList.toggle("green")
                });
                makeItGreen.classList.add("fas", "fa-sign-out-alt");
                textareaContainer.insertAdjacentElement("afterbegin", makeItGreen);

                // delete sub btn
                const deleteSubBtn = document.createElement("i");
                deleteSubBtn.addEventListener("click",()=>{
                    textareaContainer.remove()
                });
                deleteSubBtn.classList.add("fas", "fa-times")
                textareaContainer.insertAdjacentElement("beforeend", deleteSubBtn)
            })
            btnHolder.append(addBtn)
            
            // delete btn
            const deleteBtn = document.createElement("i");
            deleteBtn.addEventListener("click",()=>{
                newTask.remove()
            })
            btnHolder.append(deleteBtn);
            deleteBtn.classList.add("fas","fa-trash-alt","delete-btn")

        taskHeadContainer.append(btnHolder);

    // classes added
    addBtn.classList.add("fas","fa-plus-circle")
}

// main task event listener
addTaskBtn.addEventListener("click",()=>{
    if(inputedTask.value !==""){
        makeNewTask();
        inputedTask.setAttribute("placeholder","")

    }else{
        inputedTask.setAttribute("placeholder", "Please input task here...")
    }
    inputedTask.value="";
})


// what you need to make:
// - animation on add, removing task
// - add notes app ->yt
// - add success stats + gif for represented success -> yt,w3school
// - how to style radio, checkbox
// - notification if task is to long
// - input task value to uppercase