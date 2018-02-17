function TodoController() {
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()
	var todoElem = document.getElementById('todo')
	var formElem = document.getElementById('todo-form')

	// Use this getTodos function as your callback for all other edits
	function getTodos(){
		todoService.getTodos(draw)
	}

	function draw(todos) {
		var template = ''
		todos.forEach(todo => {
			template += `
			<p class='bg-4 text-center'><input onclick='app.controllers.todoController.removeTodo('${todo.id} id='checkbox' type='checkbox'>${todo.title}</p>
			`
		})
		todoElem.innerHTML = template
	}

	this.addTodo = function (e) {
		e.preventDefault();
		var form = e.target
		todoService.addTodo(form, draw)
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

	getTodos(draw)

}
