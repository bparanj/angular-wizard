function FormController($scope) {
  $scope.user = {  };
  
  $scope.steps = ['signup', 'settings', 'authorize']
  $scope.step = 0;

  $scope.getCurrentStep = function() {
    return $scope.steps[$scope.step];
  };

  $scope.setCurrentStep = function(step) {
	$scope.step = step;
  }

  $scope.nextStep = function() {
	$scope.step += 1;
  }

  $scope.previousStep = function() {
	$scope.step -= 1;
  }

}