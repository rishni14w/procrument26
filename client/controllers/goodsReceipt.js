var myApp = angular.module('myApp');

myApp.controller('goodsReceiptController',['$scope','$http','$location','$routeParams',function ($scope,$http,$location,$routeParams) {
    console.log('goodsReceiptController loaded');


    $scope.approveReceipt = function () {
        $http.post('/api/receipts/',$scope.ReceiptModel).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href='#!/goods_receipt';

        }
        function errorCallback(error)
        {
            console.log('err from addApproval')
        }
    };


    $scope.editApproval=(order)=>{
        $scope.receipt={};

        $scope.receipt.category=order.category;
        $scope.receipt.product=order.product;
        $scope.receipt.supplier=order.supplier;
        $scope.receipt.quantity=order.quantity;
        $scope.receipt.price=order.price;


    };

    $scope.clear=(receipt)=> {
        $scope.receipt = {};

    };

    $scope.getReceipt = function () {
        $http.get('/api/receipts').then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.receipt=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from getReceipts')
        }
    };


}]);