var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/',{
        controller:'ProductsController',
        templateUrl:'views/products.html'
    })
        .when('/products',{
            controller:'ProductsController',
            templateUrl:'views/products.html'
        })
        .when('/products/details/:id',{
            controller:'ProductsController',
            templateUrl:'views/product_details.html'
        })
        .when('/products/add',{
            controller:'ProductsController',
            templateUrl:'views/add_product.html'
        })
        .when('/products/edit/:id',{
            controller:'ProductsController',
            templateUrl:'views/edit_product.html'
        })
        .when('/requisitions',{
            controller:'RequisitionsController',
            templateUrl:'views/requisitions.html'
        })
        .when('/requisitions/details/:id',{
            controller:'RequisitionsController',
            templateUrl:'views/requisition_details.html'
        })
        .when('/requisitions/add',{
            controller:'RequisitionsController',
            templateUrl:'views/add_requisition.html'
        })
        .when('/requisitions/edit/:id',{
            controller:'RequisitionsController',
            templateUrl:'views/edit_requisition.html'
        })
        .when('/login',{
            controller:'LoginController',
            templateUrl:'login.html'
        })
        .when('/orders',{
            controller:'RequisitionsController',
            templateUrl:'views/orders.html'
        })
        .when('/orders/details/:id',{
            controller:'RequisitionsController',
            templateUrl:'views/approveOrders.html'
        })

        .otherwise({
            redirectTo:'/'
        });
});