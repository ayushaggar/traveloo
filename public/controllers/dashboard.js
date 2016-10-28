angular.module('MyApp')
  .controller('DashboardCtrl', function($scope, $auth, toastr, Account, NgMap) {

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

    NgMap.getMap().then(function(map) {
        $scope.map = map;
    });

  });
