socialApp.controller('homeController',['$scope','$http','$filter','busService',
    function($scope,$http,$filter,busService) {

    $scope.searchBuses = function() {

        console.log('entered data is '+$scope.leavingFrom+' '+$scope.goingTo+' '+$filter('date')(new Date($scope.departingOn), 'dd/MM/yyyy hh:mm:ss'));
        localStorage.setItem('leavingFrom',$scope.leavingFrom)
        localStorage.setItem('goingTo',$scope.goingTo)
        localStorage.setItem('departureDate',$filter('date')(new Date($scope.departingOn), 'dd/MM/yyyy hh:mm:ss'))

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

socialApp.controller('seatController',['$scope','$http','$filter','busService',
    function($scope,$http,$filter,busService) {

        $scope.busList =[{
            'busName':'Green Line',
            'departureTime':'10:00 PM',
            'coachType':'AC',
            'seatsAvailable':36,
            'fare':1000
        },{
            'busName':'Star Line',
            'departureTime':'7:00 PM',
            'coachType':'Non AC',
            'seatsAvailable':36,
            'fare':800
        },{
            'busName':'Green Line',
            'departureTime':'12:00 PM',
            'coachType':'AC',
            'seatsAvailable':36,
            'fare':1000
        },{
            'busName':'Green Line',
            'departureTime':'3:00 PM',
            'coachType':'AC',
            'seatsAvailable':36,
            'fare':1000
        }]

   console.log('inside seats controller '+JSON.stringify($scope.busList));

   $scope.viewSeats = function(busName,coachType) {
        localStorage.setItem('busName',busName);
        localStorage.setItem('coachType',coachType);
   }
     
}])

socialApp.controller('selectSeatsController',['$scope','$http','$filter','busService',
    function($scope,$http,$filter,busService) {

        $scope.displaySeats= [{

            'seatNumber':1,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':2,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':3,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':4,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':5,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':6,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':7,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':8,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':9,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':10,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':10,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':12,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':13,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':14,
            'isSelected':false,
            'fare':300
        },{

            'seatNumber':15,
            'isSelected':false,
            'fare':500
        },{

            'seatNumber':16,
            'isSelected':false,
            'fare':500
        },{

            'seatNumber':17,
            'isSelected':false,
            'fare':500
        },{

            'seatNumber':18,
            'isSelected':false,
            'fare':800
        },{

            'seatNumber':19,
            'isSelected':false,
            'fare':800
        },{

            'seatNumber':20,
            'isSelected':false,
            'fare':800
        }]

        console.log('inside seats select controller');

        $scope.selectedSeatsList=[];
        $scope.totalFare=0;
        $scope.mergedString='';

        $scope.selectSeats = function(seatNo) {

            $scope.displaySeats.forEach((x)=>{
                    if(x.seatNumber==seatNo) {
                        x.isSelected=true;
                        $scope.selectedSeatsList.push({'seatNumber':seatNo,'fare':x.fare,'class':'economy'})
                        $scope.totalFare+=x.fare;
                        $scope.mergedString+='A'+seatNo+',';
                        localStorage.setItem('mergedSeats',$scope.mergedString);
                        localStorage.setItem('totalFare',$scope.totalFare);
                    }
            })


        }

       
     
}])

socialApp.controller('reviewTicketController',['$scope','$http','$filter','busService',
    function($scope,$http,$filter,busService) {

        $scope.leavingFrom=localStorage.getItem('leavingFrom');
        $scope.goingTo=localStorage.getItem('goingTo');
        $scope.departureDate=localStorage.getItem('departureDate');

        console.log('review ticket');

        $scope.mergedSeats=JSON.stringify(localStorage.getItem('mergedSeats'));

     
}])

socialApp.controller('userDetailsController',['$scope','$http','$filter','busService',
    function($scope,$http,$filter,busService) {

     $scope.submitData = function() {
        localStorage.setItem('username',$scope.userName);
        localStorage.setItem('userMobileNo',$scope.userMobileNo);
        localStorage.setItem('email',$scope.email);
     }
     
}])

socialApp.controller('viewTicketController',['$scope','$http','$filter','busService',
    function($scope,$http,$filter,busService) {

        $scope.userName=localStorage.getItem('username');
        $scope.userMobileNo=localStorage.getItem('userMobileNo');
        $scope.email=localStorage.getItem('email');
        $scope.seatNo=localStorage.getItem('mergedSeats');
        $scope.totalFare=localStorage.getItem('totalFare');
        $scope.leavingFrom=localStorage.getItem('leavingFrom');
        $scope.goingTo=localStorage.getItem('goingTo');
        $scope.departureDate=localStorage.getItem('departureDate');
        $scope.date=$scope.departureDate.split(' ')[0];
        $scope.time=$scope.departureDate.split(' ')[1];
        $scope.busName=localStorage.getItem('busName');
        $scope.coachType=localStorage.getItem('coachType');

}])