angular.module("tagModule", []);


angular
	.module("tagModule")
		.controller("einsteinGraffiti", [
			"$scope", "$filter",
			function($scope, $filter){


				$scope.greeting = "WELCOME TO ANGULAR INTRO PART TWO"


				$scope.showThis = true;
				$scope.showThat = true;

				$scope.linkOne = function () {
					console.log("YOU SHO, BRO?")
						if(confirm("You wanna go to this link fo shizzle?")===false) {
							event.preventDefault()
							$scope.showThis = false;
							console.log("TAKIZZLED OUT!")

						}
				}


				$scope.linkTwo = function () {
					console.log("YOU SHO, BRO?")
						if(confirm("You wanna go to this link fo shizzle?")===false) {
							event.preventDefault()
							$scope.showThat = false;
							console.log("TAKIZZLED OUT!")
						}
				}





			}])

// GO FORTH AND DOWNNLOAD THE STUFF FROM 1/22 MORNING LECTURE TO FIGURE THIS OUT


angular.module("tagModule")
		.filter("excitify", function (){
			return function(expression){
				return expression + "!!!"
			}
		})







