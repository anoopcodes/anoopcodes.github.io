var app = angular.module('app');
app.controller('appController', ['$scope', 
	function($scope) {
		$scope.showCover = false;
		$scope.showLink = true;
		$scope.VenueDetails = false;
		$scope.showVenueLink = true;
		
		$scope.getTime = function(){
			var currentDate = new Date();
			var weddingDate = new Date();
			weddingDate.setDate(7);
			weddingDate.setHours(10);
			weddingDate.setMinutes(40);
			weddingDate.setSeconds(0);
			weddingDate.setFullYear(2016,8,7);
			$scope.countDown=(weddingDate-currentDate)/1000;
		}
	}
]);