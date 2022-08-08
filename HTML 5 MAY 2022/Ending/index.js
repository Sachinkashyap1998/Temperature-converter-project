let form= document.querySelector('#new-form');
let input= document.querySelector('#new-input');
let button= document.querySelector('#submit-btn');

form.addEventListener("submit", (event)=>{
    event.preventDefault(); /// to prevent reloading of page
    
    let task = input.value;
let task_element=document.createElement("div");
task_element.classList.add("task");

let task_content_element=document.createElement("div");
task_content_element.classList.add("content");

task_element.append(task_content_element);
let task_input_element=document.createElement('input')
task_input_element.classList.add("text");
task_input_element.type = "text";
task_input_element.value = task;
task_input_element.setAttribute("readonly", "readonly");

task_content_element.append(task_input_element);
console.log(task_element)

})

