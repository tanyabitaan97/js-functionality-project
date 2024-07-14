// ROUTES
socialApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })

    .when('/viewseats', {
        templateUrl: 'pages/seats.htm',
        controller: 'seatController'
    })

    .when('/selectSeats', {
        templateUrl: 'pages/selectseats.htm',
        controller: 'selectSeatsController'
    })

    .when('/reviewTicket', {
        templateUrl: 'pages/reviewTicket.htm',
        controller: 'reviewTicketController'
    })

    .when('/userdetails', {
        templateUrl: 'pages/userdetails.htm',
        controller: 'userDetailsController'
    })

    
    .when('/viewTicket', {
        templateUrl: 'pages/viewticket.htm',
        controller: 'viewTicketController'
    })
    
    
});