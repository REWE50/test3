var myApp = angular.module("myToDoList", []);
		
myApp.controller("myToDoListController", function($scope)		

{			
	// creates an empty array that will hold our all task details
	var todoList = [];

	// inserts the todoList array into scope
	$scope.todoList = todoList;

	// returns the number of tasks held in the array
	$scope.getNumTasks = function()
	{
		return $scope.todoList.length;
	};

	// pushes the task name and description as entered by the user to the todoList array, and adds a default 'done' property set to false
	$scope.addNewTask = function()
	{			
		$scope.todoList.push
		(
			{
				task: $scope.newTask.task,
				description: $scope.newTask.description,
				done: false
			}
		);

		// resets the input fields to blank strings to avoid duplication entry of tasks
		$scope.newTask.task = "";
		$scope.newTask.description = "";
	};

	// a method to remove completed tasks - once their checkbox is checked, which changes the default value of 'done' from false to true

	// this method manipulates the index both i++ and i--, otherwise as it splices the first element, it would then move on to the next 
	// element to be deleted, but that element would have shifted to 0, which was already spliced, and therefore wouldn't be deleted
	$scope.removeCompletedTasks = function()
	{
		for(var i = 0; i < $scope.todoList.length; i++) 
		{
			//console.log(i)
			if($scope.todoList[i].done)  
			{
				//console.log(i)
				$scope.todoList.splice(i, 1);
				i--;
				//console.log(i)
			}
			//console.log(i)
		}
	};		
});	