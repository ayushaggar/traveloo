angular.module('MyApp')
  .controller('DashboardCtrl', function($scope, $auth, toastr, Account) {
    $scope.getProfile = function() {
      Account.getProfile()
        .then(function(response) {
          $scope.user = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };

    $scope.updateMarkin = function() {
      Account.updateMarkin($scope.markin)
        .then(function() {
          toastr.success('Place has been updated');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };

    $scope.getProfile();

    $scope.events = [{
      badgeClass: 'info',
      badgeIconClass: 'glyphicon-check',
      title: 'First Trip',
      content: 'Paris.'
    }, {
      badgeClass: 'warning',
      badgeIconClass: 'glyphicon-credit-card',
      title: 'Second Trip',
      content: 'New-York.'
    }];

  });
