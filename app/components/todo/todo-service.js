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

	this.addTodo = function (form,cb) {
		// posts the todos to the server so its saved
		var todo = new Todo(form)
		$.post(baseUrl, todo)
		//for each todo push todo object into the todo list array
			.then(function(res){ 
				todoList.push(res)
				cb(todoList)
			})
			//if function fails the logError function will alert user
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
				this.getTasks(cb)
			})
			.fail(logError)
	}

	this.removeTodo = function (todoId,cb) {
		$.ajax({
			url: baseUrl +'/'+ todoId,
			//using the method delete will delete the object at the above url
			method: 'DELETE'
		})
			.then(res => {
				//then we need to redraw the todo list so its updated
				this.getTodos(cb)
			})
		
	}

}
