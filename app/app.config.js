'use strict';

angular.module('phonecatApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.when('/', {
            template: '<home-page></home-page>'
        }).when('/phones', {
            template: '<phone-list></phone-list>'
        }).when('/list/:type', {
            template: '<product-list></product-list>'
        }).when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        }).otherwise('/phones');
        $locationProvider.html5Mode(true);
}
]);
