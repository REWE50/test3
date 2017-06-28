var myApp = angular.module("myToDoApp", []);
		
		myApp.controller("myToDoListController", function($scope)		
		
		{			
			var todoList = [];
						
			$scope.todoList = todoList;
								
			$scope.getNumTasks = function()
			{
				return $scope.todoList.length;
			};
			
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
				
				$scope.newTask.task = "";
				$scope.newTask.description = "";
			};
			
			$scope.removeCompletedTasks = function()
			{
				for(var i = 0; i < $scope.todoList.length; i++) 
				{
					if($scope.todoList[i].done)  
					{
						$scope.todoList.splice(i, 1);
						i--;
					}
				}
				/*
				angular.forEach($scope.todoList, function(task, index)
				{
					if(task.done)
					{
						todoList.splice(index, 1);
					}
				 })	
				 */
			};		
		});	