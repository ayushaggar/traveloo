angular.module('MyApp')
  .factory('Account', function($http) {
    return {
      getProfile: function() {
        return $http.get('/api/me');
      },
      updateProfile: function(profileData) {
        return $http.put('/api/me', profileData);
      },
      storeMarkin: function(markinData) {
        return $http.post('/api/markin', markinData);
      },
      getDashboard: function(dashboardData) {
        return $http.post('/api/dashboard', dashboardData);
      },
      getDashboard2: function(dashboardData2) {
        return $http.post('/api/dashboard2', dashboardData2);
      }
    };
  });
