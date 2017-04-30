(function() {
    'use strict';

    angular
        .module('app.new-user')
        .controller('NewUserController', RegisterController);

    /** @ngInject */
    function RegisterController(api, $scope, $state, $location, $rootScope, auth) {
        var vm = this;
        // Data


        // Methods
        vm.submitVerticalStepper = submitVerticalStepper;




        function submitVerticalStepper() {
            api.userIfo.save({
                firstname: vm.verticalStepper.step1.firstname,
                lastname: vm.verticalStepper.step1.lastname,
                comapnyName: vm.verticalStepper.step2.companyName,
                companyDetails: vm.verticalStepper.step3.compnayDescription,
                address: [{ address1: vm.verticalStepper.step4.address }],
                payment: {
                    cardHolder: vm.verticalStepper.step5.cardHolder,
                    cardNumber: vm.verticalStepper.step5.cardNumber,
                    cc2: vm.verticalStepper.step5.cc2,
                    expirationDate: vm.verticalStepper.step5.expirationDate
                }

            })
        }
    }

})();