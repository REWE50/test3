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
	
	$scope.huzzahMsg = "Huzzah! You have no tasks to do!";
	$scope.popHuzzahMsg = function()
	{
		return $scope.huzzahMsg;
	}
	
	$scope.killHuzzahMsg = function()
	{
		$scope.huzzahMsg = "";
	}
	
	// pushes the task name and description as entered by the user to the todoList array, and adds a default 'done' property set to false
	$scope.addNewTask = function()
	{				
		// first we have an initial check to make sure we have some values to push to the array
		// before we add anything to the array, task and desciption do not exist so an 'undefined' error will be thrown if we pass try to pass them
		// this only applies before we have added anything, once we have passed in at least one correct value for task or description, they now exist 
		// and are reset to empty strings on line 47/48
		if($scope.newTask != null)
		{			
			// even though task and description must have had some value to get to this stage, we still don't want to let BOTH be entered as an empty string
			// the user can choose to leave one or the other empty, but not both
			if($scope.newTask.task == "" && $scope.newTask.description == "")
			{
				// nothing entered
				console.log('No Data Entered');
			}
			else
			{
				// if the user enters a value for either task or description, the values get pusded to the todoList array
				$scope.todoList.push
				(
					{
						task: $scope.newTask.task,
						description: $scope.newTask.description,
						done: false
					}
				);

				// resets the input fields to empty strings to avoid duplication entry of tasks
				$scope.newTask.task = "";
				$scope.newTask.description = "";
				
				$scope.killHuzzahMsg();
			}
		}
		else
		{
			// nothing entered
			console.log('No Data Entered');
		}
	};

	// a method to remove completed tasks - once their checkbox is checked, which changes the default value of 'done' from false to true
	// this method manipulates the index both i++ and i--, otherwise as it splices the first element, it would then move on to the next 
	// element to be deleted, but that element would have shifted down by 1, to the element that was already spliced, and therefore wouldn't be deleted
	// i-- is only called if an element has been spliced out of the array, otherwise the loop continues through the elements like normal
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
			if(i <= 0)
				{
					$scope.huzzahMsg = "Huzzah! You have no tasks to do!";
					$scope.popHuzzahMsg();
				}
		}
	};		
});	