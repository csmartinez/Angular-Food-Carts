foodcartRoster.controller('FoodCartsCtrl', function FoodCartsCtrl($scope) {
  $scope.foodcarts = [];
  $scope.addCart = function() {
    $scope.foodcarts.push({
      name: $scope.foodCartName,
      location: $scope.foodCartLocation,
      type: $scope.foodCartType,
      pricerange: $scope.foodCartPrice
    });
    $scope.foodCartName = null;
    $scope.foodCartLocation = null;
    $scope.foodCartType = null;
  };
  $scope.deleteFoodCart = function(cart) {
    var index = $scope.foodcarts.indexOf(cart);
    $scope.foodcarts.splice(index,1);
  };
  $scope.predicate = '';
})
