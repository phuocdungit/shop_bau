'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.module('phoneDetail').component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
        function PhoneDetailController($routeParams, Phone) {
            var self = this;
            self.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
                self.setImage(phone.images[0]);
            });

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
        }
    ]
});
angular.module('hotList').component('hotList', {
    templateUrl: 'phone-detail/hot.template.html',
    controller: [ 'Phone',
        function HotListController(Phone) {
            this.hot = Phone.query();
        },
    ]
});
