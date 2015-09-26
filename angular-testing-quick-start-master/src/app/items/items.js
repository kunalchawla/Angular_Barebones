angular.module('myApp.items', [
    'ui.router',
    'myApp.models.messages'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('items', {
                url: '/items',
                templateUrl: 'app/items/items.tmpl.html',
                controller: 'ItemsCtrl as items'
            })
        ;
    })
    .controller('ItemsCtrl', function (Messages) {
        var items = this;
        items.title = 'Items Page';
        items.body = 'This is the Items page body';

        items.message = Messages.getMessage();

        items.updateMessage = function (m) {
            Messages.setMessage(m);
        };
    })
;