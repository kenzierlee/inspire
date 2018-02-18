function TodoController() {
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()
	var todoElem = document.getElementById('todo')
	var formElem = document.getElementById('todo-form')

	// Use this getTodos function as your callback for all other edits
	function getTodos(){
		todoService.getTodos(drawTodos)
	}

	function drawTodos(todos) {
		var template = ''
		todos.forEach(todo => {
			template += `
			<div class="form-check">
  				<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${todo.id}">
				  <label class="form-check-label" for="${todo.id}">${todo.title}</label>
				  <i onclick="app.controller.todoController.removeTodo('${todoId}')" class="action fas fa-trash-alt"></i>
			</div>
			`

		})
		todoElem.innerHTML = template
	}

	this.addTodo = function (e) {
		e.preventDefault();
		var formData = e.target.value
		todoService.addTodo(formData, drawTodos)
		//reset method will clear the todo form preventing multiple submits for 1 todo
		formElem.reset()
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId,getTodos)
	}

	getTodos()

}
