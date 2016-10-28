angular.module('MyApp')
  .controller('MarkinCtrl', function($scope, $auth, toastr, Account, $http, NgMap, ngGPlacesAPI) {
    $scope.storeMarkin = function() {
      console.log($scope.markin);
      Account.storeMarkin($scope.markin)
        .then(function() {
          toastr.success('Place has been added', { timeOut: 200 });
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status, { timeOut: 200 });
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

      var markin = this;
      markin.address = "Panduranga Nagar, Bengaluru, Karnataka";
      markin.title = "First doctor visit";


      $scope.placeChanged = function() {
          $scope.place = this.getPlace();
          $scope.map.setCenter($scope.place.geometry.location);
          $scope.pos = $scope.place.geometry.location;
          markin.latitude = $scope.pos.lat();
          markin.longitude = $scope.pos.lng()
          console.log($scope.pos.lat(),$scope.pos.lng());
      }

      $scope.readyForMap = true;

      NgMap.getMap().then(function(map) {
          $scope.map = map;
      });

      $scope.data = ngGPlacesAPI.nearbySearch({latitude:-33.8665433, longitude:151.1956316}).then(
        function(data){
          console.log(data);
          return data;
        });

      $scope.getCurrentLocation = function(){
           $scope.pos = this.getPosition();
           console.log($scope.pos.lat(),$scope.pos.lng());
           markin.latitude = $scope.pos.lat();
           markin.longitude = $scope.pos.lng()
           $scope.map.setCenter($scope.pos);
           var geocoder = new google.maps.Geocoder();
           var latlng = new google.maps.LatLng($scope.pos.lat(), $scope.pos.lng());
           geocoder.geocode({ 'latLng': latlng }, function (results, status) {
               if (status == google.maps.GeocoderStatus.OK) {
                 if (results[1]) {
                   markin.address = results[1].formatted_address;
                   console.log(results[1].formatted_address);
                   console.log(markin.address);
                   document.getElementById("searchplace").value = markin.address
                 } else {
                     toastr.success('Location not found - Try again', { timeOut: 200 });
                 }
               } else {
                   toastr.success('Geocoder failed - Try again' , { timeOut: 200 });
               }
           });

        }

    $scope.showMydirc=false;
    $scope.showdirectclick = true;
    $scope.showhideclick = false;

    $scope.directClick = function() {
      $scope.showMydirc=true;
      $scope.showdirectclick = false;
      $scope.showhideclick = true;
    }

    $scope.hideClick = function() {
      $scope.showMydirc=false;
      $scope.showhideclick = false;
      $scope.showdirectclick = true;
    }

  });

  angular.module('MyApp').directive('mainArea', function() {
      return {
          restrict: "E",
          template: '<div id="directions-panel" style="height: 180px; overflow: auto"></div>',
      }
  });
