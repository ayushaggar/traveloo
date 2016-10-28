angular.module('MyApp')
  .controller('SignupCtrl', function($scope, $location, $auth, toastr) {
    $scope.signup = function() {
      $auth.signup($scope.user)
        .then(function(response) {
          $auth.setToken(response);
          $location.path('/');
          toastr.info('You have successfully created a new account and have been signed-in', { timeOut: 200 });
        })
        .catch(function(response) {
          toastr.error(response.data.message, { timeOut: 200 });
        });
    };
  });
