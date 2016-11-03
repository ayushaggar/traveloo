angular.module('MyApp')
  .controller('LoginCtrl', function($scope, $location, $auth, toastr) {
    $scope.login = function() {
      $auth.login($scope.user)
        .then(function() {
	  Raven.captureMessage('User signed in');
          toastr.success('You have successfully signed in!', { timeOut: 200 });
          $location.path('partials/profile.html');
        })
        .catch(function(error) {
          Raven.captureMessage(error.data.message);
          toastr.error(error.data.message, error.status, { timeOut: 200 });
        });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
	  Raven.captureMessage('User signed in with provider');
          toastr.success('You have successfully signed in with ' + provider + '!', { timeOut: 200 });
          $location.path('partials/profile.html');
        })
        .catch(function(error) {
          if (error.message) {
            // Satellizer promise reject error.
            toastr.error(error.message, { timeOut: 200 });
          } else if (error.data) {
            // HTTP response error from server
            toastr.error(error.data.message, error.status, { timeOut: 200 });
          } else {
            toastr.error(error);
          }
        });
    };
  });
