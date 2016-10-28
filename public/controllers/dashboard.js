angular.module('MyApp')
  .controller('DashboardCtrl', function($scope, $auth, toastr, Account) {

    $scope.getDashboard = function() {
      Account.getDashboard()
        .then(function(response) {
          $scope.events = response.data;
          console.log($scope.events);
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status, { timeOut: 200 });
        });
    };

    $scope.getDashboard();

  });
