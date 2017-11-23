
var myApp = angular.module('myApp');



myApp.controller('ProductsController',['$scope','$http','$location','$routeParams',function ($scope,$http,$location,$routeParams) {
    console.log('ProductsController loaded');

    $scope.getProducts = function () {
        $http.get('/api/products').then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.products=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from getProducts')
        }
    }

    $scope.getProduct = function () {
        var id = $routeParams.id;
        $http.get('/api/products/'+id).then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.product=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from getProduct')
        }
    }

    $scope.addProduct = function () {
        $http.post('/api/products/',$scope.product).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href='#!/products';

        }
        function errorCallback(error)
        {
            console.log('err from addProduct')
        }
    }

    $scope.updateProduct = function () {
        var id = $routeParams.id;
        $http.put('/api/products/'+id,$scope.product).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href='#!/products';
        }
        function errorCallback(error)
        {
            console.log('err from updateProduct')
        }
    }

    $scope.removeProduct = function (id) {
        $http.delete('/api/products/'+id).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href='#!/products';
        }
        function errorCallback(error)
        {
            console.log('err from removeProduct')
        }
    }
}]);