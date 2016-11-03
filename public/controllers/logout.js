angular.module('MyApp')
  .controller('LogoutCtrl', function($location, $auth, toastr) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
	Raven.captureMessage('User logged out');
        toastr.info('You have been logged out', { timeOut: 200 });
        $location.path('/');
      });
  });
