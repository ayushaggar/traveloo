angular.module('MyApp')
  .controller('MarkinCtrl', function($scope, $auth, toastr, Account, $http, NgMap, ngGPlacesAPI) {
    $scope.storeMarkin = function() {
      console.log($scope.markin);
      Account.storeMarkin($scope.markin)
        .then(function() {
          toastr.success('Place has been added');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };


    $scope.today = function() {
        $scope.dt = new Date();
      };
      $scope.today();


      $scope.clear = function () {
        $scope.dt = null;
      };

      // Disable weekend selection
      $scope.enabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
      };


      $scope.open = function($event) {
        $scope.status.opened = true;
      };

      $scope.formats = ['dd-MMMM-yyyy hh:mm:ss', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];

      $scope.status = {
        opened: false
      };

      $scope.getDayClass = function(date, mode) {
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0,0,0,0);

          for (var i=0;i<$scope.events.length;i++){
            var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

            if (dayToCheck === currentDay) {
              return $scope.events[i].status;
            }
          }
        }

        return '';
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
