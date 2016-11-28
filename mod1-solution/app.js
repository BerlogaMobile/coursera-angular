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

  $scope.displayMessage = function () {
    if ($scope.lunchMenu == "") {
      $scope.message = "Please enter data first.";
      return;
    }
    var i_numOfItems = getNumberOfItems($scope.lunchMenu);
    //console.log ("Lunch [" + $scope.lunchMenu + "] has " + i_numOfItems + " items.");
    if (i_numOfItems == 0) {
      $scope.message = "Please enter data first.";
    } else if (i_numOfItems < 4) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
    return;
  };

}

  function getNumberOfItems(s_menu){
    // empty items are not counted
    // e.g. "one, three,,,, two ,,   ,and four" counts as 4 items
    // console.log(s_menu.replace(/\s|[,\s]+$|^[,\s]+/g, '').length);

    // remove all starting and training commas and all spaces
    s_menu = s_menu.replace(/\s|[,\s]+$|^[,\s]+/g, '');

    return s_menu.length > 0 ? s_menu.split( /[,\s]+|,+/ ).length : 0;
  }



})();
