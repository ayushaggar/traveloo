angular.module('MyApp', ['ngResource', 'ngMessages', 'ngAnimate', 'toastr', 'ui.router', 'satellizer', 'ui.bootstrap', 'ui.bootstrap.datetimepicker','angular-timeline','ngMap','ngGPlaces'])
  .config(function($stateProvider, $urlRouterProvider, $authProvider) {

    /**
     * Helper auth functions
     */
    var skipIfLoggedIn = function($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    };

    var loginRequired = function($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    };

    /**
     * App routes
     */
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('markin', {
        url: '/markin',
        templateUrl: 'partials/markin.html',
        controller: 'MarkinCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('filter', {
        url: '/markin',
        templateUrl: 'partials/markin.html',
        controller: 'FilterController',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('search', {
        url: '/markin',
        templateUrl: 'partials/markin.html',
        controller: 'AppController',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('detail', {
        url: '/markin',
        templateUrl: 'partials/markin.html',
        controller: 'DetailController',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'partials/dashboard.html',
        controller: 'DashboardCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      });

    $urlRouterProvider.otherwise('/');

    /**
     *  Satellizer config
     */
    $authProvider.facebook({
      clientId: '1299427230069461'
    });

    $authProvider.google({
      clientId: '1035272860315-164efvupqamrndv8r0h05cdaksrn5uek.apps.googleusercontent.com'
    });

    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      clientId: '5ZGWZQOLQ1I5VOLJCQWQ3SQCSL1RQCAI0ZYWHRBVO1C23K4M',
      redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate'
    });

  });
