angular.module('MyApp')
  .controller('DashboardCtrl', function($scope, $auth, toastr, Account) {

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
