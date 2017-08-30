angular.module('phonecatApp').controller('ButtonGroup', ['$http', function ($http) {
    this.AddToCart = function (id) {
        var detail = $http.get('phones/' + id + '.json').success(function (response) {
            var count = parseInt($('.cart_no').data('count'));
            var sum = parseInt($('.total strong').data('sum'));

            $html = '<li>\n' +
                '                                        <div class="cart-item">\n' +
                '                                            <div class="image"><img src="' + response.images[0] + '" alt="">\n' +
                '                                            </div>\n' +
                '                                            <div class="item-description">\n' +
                '                                                <p class="name">' + response.name + '</p>\n' +
                '                                                <p>Size: <span class="light-red">One size</span><br>Quantity: <span\n' +
                '                                                        class="light-red">1</span></p>\n' +
                '                                            </div>\n' +
                '                                            <div class="right">\n' +
                '                                                <p class="price">$' + formatNumber(response.price) + '</p>\n' +
                '                                                <a href="#" ng-click="cart.removeItemCart()" class="remove"><img src="images/remove.png"\n' +
                '                                                                                alt="remove"></a>\n' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                    </li>';
            $('.show_item').append($html);
            $('.noti').text('Add to cart successfully').show(0).delay(3000).hide(0);
            $('.cart_no').text(count + 1).data('count',count+1);
            $('.total strong').html('$' + formatNumber(parseInt(response.price + sum))).data('sum', parseInt(response.price + sum));
        });

    };
}]);
angular.module('phonecatApp').controller('CartHome', ['$http', function ($http) {
    this.data = {};
    this.removeItemCart = function (event) {
        $(this.data).parents('.right').remove();
    }
}]);
function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

