'use strict';

// Register `homepage` component, along with its associated controller and template
angular.module('homePage').component('homePage', {
    templateUrl: 'home-page/home-page.template.html',
    controller: ['Phone',
        function HomePageController(Phone) {
            this.phones = Phone.query();
            this.orderProp = 'age';
        }
    ]
});
