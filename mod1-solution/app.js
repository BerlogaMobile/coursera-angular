(function () {
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  //console.log("Loaded!!!");
  $scope.name = "Sergei";
  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.getNumberOfItems = function () {
    var i_numOfItems = splitMenuItems($scope.lunchMenu);
    // console.log ("Lunch [" + $scope.lunchMenu + "] has " + i_numOfItems + " items.");
    $scope.message = (i_numOfItems <= 3) ? "Enjoy!" : "Too much!";
    return 0;
  };

}

  function splitMenuItems(s_menu){
    // empty items are not counted
    // e.g. "one, three,,,, two ,,   ,and four" counts as 4 items
    return s_menu ? s_menu.replace(/\s|[,\s]+$/g, '').split( /[,\s]+|,+/ ).length : 0;
  }



})();
