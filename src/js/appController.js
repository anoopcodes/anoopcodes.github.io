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
			weddingDate.setHours(10);
			weddingDate.setMinutes(40);
			weddingDate.setSeconds(0);
			weddingDate.setFullYear(2016,07,07);
			$scope.countDown=(weddingDate-currentDate)/1000;
		}

		$scope.$on('timer-stopped', function (event, data){
        	$scope.countDown = 0;
    	});
	}
]);