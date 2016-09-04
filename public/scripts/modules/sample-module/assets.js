define(['angular', './sample-module'], function(angular, controllers) {
    'use strict';
    // Controller definition
    controllers.controller('AssetsCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.form = {};
        $rootScope.addAsset = function () {
            var asset = {
                id: $rootScope.asset.length + 1,
                systemName: $scope.form.systemName,
                serialNumber: $scope.form.serialNumber,
                manufacturer: $scope.form.manufacturer,
                location: $scope.form.location
            };
            $rootScope.assets.push(asset);
            $scope.form = {};
        };
    }]);
});
