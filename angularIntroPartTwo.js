angular.module("tagModule", []);


angular
	.module("tagModule")
		.controller("einsteinGraffiti", [
			"$scope",
			function($scope){
				$scope.greeting="WELCOME TO ANGULAR INTRO PART TWO"

				// $scope.addExclamation=function() {
				// 	return "!"
				// }




				$scope.showThis = true;
				$scope.showThat = true;

				$scope.link = function () {
					console.log("YOU SHO, BRO?")
						if(confirm("You wanna go to this link fo shizzle?")===false) {
							event.preventDefault()
							$scope.takeOutThis();
							$scope.takeOutThat();
						}
				}


				$scope.takeOutThis = function () {
					console.log("TAKIZZLED OUT")
					$scope.showThis = false;
					$scope.showThat = false;
				}

				// $scope.takeOutThat = function () {
				// 	console.log("TAKIZZLED OUT")
				// 	$scope.showThat = false;
				// }



			}])