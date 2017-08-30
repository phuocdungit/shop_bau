'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('phoneList').component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone',
        function PhoneListController(Phone) {
            this.phones = Phone.query();
            this.orderProp = 'name';
            this.show = '12';
        },
    ]
});
angular.module('productList').component('productList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$routeParams', 'Phone',
        function ProductListController($routeParams, Phone) {
            this.phones = Phone.query();
            this.orderProp = 'name';
            this.show = '12';
            if ($routeParams.type != 'all') {
                this.type = $routeParams.type;
            }

        },
    ]
});

