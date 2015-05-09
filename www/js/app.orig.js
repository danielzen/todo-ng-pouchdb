angular.module('Todo', ['ionic'])
  .controller('TodoCtrl', function($scope, $ionicPopup, $ionicListDelegate) {
    $scope.tasks =
      [
        {title: "First", completed: true},
        {title: "Second", completed: false},
        {title: "Third", completed: false},
        {title: "Fourth", completed: false}
      ];

    $scope.toggleCompletion = function(task) {
      task.completed = !task.completed;
    };

    $scope.deleteTask = function(index) {
      $scope.tasks.splice(index, 1)
    };

    $scope.newTask = function() {
      $ionicPopup.prompt({
        title: "New Task",
        template: "Enter task:",
        inputPlaceholder: "What do you need to do?",
        okText: 'Create task'
      }).then(function(res) {    // promise
        if (res) $scope.tasks.push({title: res, completed: false});
      })
    };

    $scope.editTask = function(task) {
      $scope.data = { response: task.title }; // A hack to pre-populate prompt
      $ionicPopup.prompt({
        title: "Edit Task",
        scope: $scope
      }).then(function(res) {    // promise
        if (res !== undefined) task.title = $scope.data.response; // response not res has new title (hack)
        $ionicListDelegate.closeOptionButtons();
      })
    };
  })

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });
