function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/mackenzierlee'

	//constructor functions for todos
	function Todo(formData){
		this.title = formData.title.value
	}
	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//NOTIFIES THE USER IF SOMETHING BREAKS
		alert('Error occured sorry for the inconvenience!');
	}

	this.getTodos = function (cb) {
		//goes to the server for the user, and gets there todolist
		$.get(baseUrl)
		//then puts the todolist results in the todoList array and draws them to the screen
			.then(function (res) { 
				todoList = res
				cb(todoList)
			})
			//if there is an error you will be allerted by the logError function
			.fail(logError)
	}

	this.addTodo = function (data,cb) {
		// posts the to dos to the server so its saved
		var todo = new Todo(data)
		$.post(baseUrl, todo)
			.then(todo => { 
				todoList.push(todo)
				cb(todoList)
			}) 
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId,cb) {
		//STEP 1: Find the todo by its index **HINT** todoList

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(todoList)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)
	}

	this.removeTodo = function (todoId,cb) {
		$.ajax({
			url: baseUrl +'/'+todoId,
			//using the method delete will delete the object at the above url
			method: 'DELETE'
		})
			.then(re => {
				//then we need to redraw the todo list so its updated
				this.getTodos(cb)
			})
		
	}

}
