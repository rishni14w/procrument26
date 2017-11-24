
var myApp = angular.module('myApp');



myApp.controller('RequisitionsController',['$scope','$http','$location','$routeParams',function ($scope,$http,$location,$routeParams) {
    console.log('RequisitionsController loaded');

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

    $scope.addRequisition = function () {
        $http.post('/api/requisitions/',$scope.requisition).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href='#!/requisitions';

        }
        function errorCallback(error)
        {
            console.log('err from addRequisition')
        }
    }

    $scope.updateRequisition = function () {
        var id = $routeParams.id;
        $http.put('/api/requisitions/'+id,$scope.requisition).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href='#!/requisitions';
        }
        function errorCallback(error)
        {
            console.log('err from updateRequisition')
        }
    }

    $scope.removeRequisition = function (id) {
        $http.delete('/api/requisitions/'+id).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href='#!/requisitions';
        }
        function errorCallback(error)
        {
            console.log('err from removeRequisition')
        }
    }

    //--------------Sewmi-------
    $scope.acceptRequisition = function (id) {
        $http.put('/api/requisitions'+id),$scope.requisitions.then(sucessCallback, errorCallback);
        window.location.href='#!/orders';
    }

    $scope.rejectRequisition = function (id) {
        $http.put('/api/requisitions'+id),$scope.requisitions.then(sucessCallback, errorCallback);
        window.location.href='#!/orders';
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

    //-------------
}]);