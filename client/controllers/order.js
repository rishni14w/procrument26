var myApp = angular.module('myApp');



myApp.controller('OrderController',['$scope','$http','$location','$routeParams',function ($scope,$http,$location,$routeParams) {
    console.log('OrderController loaded');


    $scope.getRequisition = function () {
        var id = $routeParams.id;
        $http.get('/api/requisitions/'+id).then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.requisition=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from getRequisition')
        }
    }

    $scope.updateOrder = function () {
        var id = $routeParams.id;
        $http.put('/api/order/'+id,$scope.requisition).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href='#!/order';
        }
        function errorCallback(error)
        {
            console.log('err from updateRequisition')
        }
    }


    $scope.getRequisitions = function () {
        $http.get('/api/requisitions').then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.requisitions=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from getRequisitions')
        }
    }

    $scope.getOrder = function () {
        var id = $routeParams.id;
        $http.get('/api/orders/'+id).then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.order=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('Error Retreving Orders')
        }
    }

    $scope.addOrder = function () {
        $http.post('/api/orders/',$scope.order).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href='#!/orders';

        }
        function errorCallback(error)
        {
            console.log('Error Adding Orders')
        }
    }

    $scope.getRequ = function () {
        var id = $routeParams.id;
        $http.get('/api/requisitions/'+id).then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.requisition=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from getRequisition')
        }
    }
}]);