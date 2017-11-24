angular.module("myApp").controller("LoginController",['$scope','$location',
    function($scope,$location){
        $scope.login=(username,password)=>{
            if(username==='Site Manager'){
                $location.path('/requisitions');
            }
            else if(username==='hr'){
                $location.path('/products');
            }
            else{
                alert("Incorrect username")
            }
        };
        $scope.logout=()=>
        {
            $location.path('/login');
        };


    }]);