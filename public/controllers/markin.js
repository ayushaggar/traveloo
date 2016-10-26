angular.module('MyApp')
  .controller('MarkinCtrl', function($scope, $auth, toastr, Account, $http, NgMap, ngGPlacesAPI) {
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

    $scope.today = function() {
        $scope.dt = new Date();
      };
      $scope.today();


      $scope.clear = function() {
        $scope.dt = null;
      };


      $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: false
      };


      $scope.dateOptions = {
        formatYear: 'yyyy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
      };


      $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
      };


      $scope.toggleMin();


      $scope.open1 = function() {
        $scope.popup1.opened = true;
      };


      $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
      };


      $scope.popup1 = {
        opened: false
      };

      function getDayClass(data) {
        var date = data.date,
          mode = data.mode;
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0,0,0,0);


          for (var i = 0; i < $scope.events.length; i++) {
            var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);


            if (dayToCheck === currentDay) {
              return $scope.events[i].status;
            }
          }
        }


        return '';
      }

      $scope.mytime = new Date();

      $scope.hstep = 1;
      $scope.mstep = 1;

      $scope.ismeridian = true;
      $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
      };

      $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyC-NYuKvQBIVbmZjiBs5m3WJVW_Iws_LfA";

      var vm = this;
      this.address = "Delhi";

      vm.placeChanged = function() {
          vm.place = this.getPlace();
          vm.map.setCenter(vm.place.geometry.location);
      }

      NgMap.getMap().then(function(map) {
          vm.map = map;
      });

      $scope.data = ngGPlacesAPI.nearbySearch({latitude:-33.8665433, longitude:151.1956316}).then(
        function(data){
          console.log(data);
          return data;
        });
  });
