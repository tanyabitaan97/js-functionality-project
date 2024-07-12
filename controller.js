socialApp.controller('homeController',['$scope','$http','friendsService',function($scope,$http,friendsService) {

    $scope.friendName=friendsService.friendName;
    $scope.userAge=friendsService.userAge;
    $scope.userName=friendsService.userName;

    $scope.updateDetails = function() {
        var data= {
            friendName:$scope.friendName,
            userAge:$scope.userAge

        }
        var config={
            headers:{
                'Content-Type':'application/json;charset=utf-8;'
            }
        }
		$http.post('http://localhost:8080/postdata',data,config).then(function (response) {
            $scope.successMessage='updated successfully';
        })
	}
     
}])