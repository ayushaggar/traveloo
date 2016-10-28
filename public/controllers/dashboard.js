angular.module('MyApp')
  .controller('DashboardCtrl', function($scope, $auth, toastr, Account) {

    $scope.getDashboard = function() {
      Account.getDashboard()
        .then(function(response) {
          $scope.eventsss = response.data;
          console.log($scope.eventsss);
          $scope.events = [
            $scope.eventsss
          ];
          console.log($scope.events);
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };

    $scope.getDashboard();

    $scope.eventss = [{
      title: 'First Trip',
      content: 'New-York.'},
      {
      title: 'Second heading',
      content: 'More awesome content.'
    }];
    console.log($scope.eventss);
  });
