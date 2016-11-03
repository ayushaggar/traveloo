angular.module('MyApp')
  .controller('DashboardCtrl', function($scope, $auth, toastr, Account, NgMap) {

    $scope.getDashboard = function() {
      Account.getDashboard()
        .then(function(response) {
	  Raven.captureMessage('Timeline updated!');
          $scope.events = response.data;
          console.log($scope.events);
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status, { timeOut: 200 });
        });
    };



    $scope.getDashboard2 = function() {
      Account.getDashboard2()
        .then(function(response) {
          $scope.events2 = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status, { timeOut: 200 });
        });
    };

    $scope.getDashboard();

    $scope.getDashboard2();

    NgMap.getMap().then(function(map) {
        $scope.map = map;
    });

  });
