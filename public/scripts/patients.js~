'use strict';
define(['angular', 'sample-module'], function(angular, controllers) {
    // Controller definition
    controllers.controller('PatientsCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.form = {};
        $scope.addPatient = function () {
            var patient = {
                id: $scope.patients.length + 1,
                systemName: $scope.form.systemName,
                serialNumber: $scope.form.serialNumber,
                manufacturer: $scope.form.manufacturer
            };
            $rootScope.patients.push(patient);
            $scope.form = {};
        };
    }]);
});
