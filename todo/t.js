const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList =document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");



todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click" , deleteCheck);
filterOption.addEventListener("click" , filterTodo);



function addTodo(event){
	event.preventDefault();

	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	const newTodo = document.createElement('li');
	
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	const compleatedButton = document.createElement('button');
	compleatedButton.innerHTML='<img  class="check" src="https://img.icons8.com/windows/32/000000/--checkmark-yes.png"/>';
	compleatedButton.classList.add("complete-btn");
	todoDiv.appendChild(compleatedButton);

	const trashButton = document.createElement('button');
	trashButton.innerHTML='<img  class="trash" src="https://img.icons8.com/android/32/000000/trash.png"/>';
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);


	todoList.appendChild(todoDiv);

	todoInput.value="";

}


function deleteCheck(e){
	const item = e.target;

	if(item.classList[0]==="trash-btn")
	{
		const todo = item.parentElement;
		 todo.classList.add("fall");
		 todo.remove();
		 // todo.addEventListener('transitionend', function(){
			

		 // });
	}

if(item.classList[0]==="complete-btn"){
	const todo = item.parentElement;
	todo.classList.toggle("completed");
}
}


function filterTodo(e){

	const todos = todoList.childNodes;
	todos.forEach(function(todo){
		switch(e.target.value){
			case "all":
			todo.style.display ="flex";
			break;

			case "completed":
			if(todo.classList.contains('completed')){
				todo.style.display = "flex";
			}
			else{
				todo.style.display ="none";
			}
			break;

			case "uncompleated":
			if(!todo.classList.contains('completed')){
				todo.style.display = "flex";
			}
			else{
				todo.style.display ="none";
			}
			break;


		}
	});
}

