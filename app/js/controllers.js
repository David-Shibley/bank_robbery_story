app.controller('mainController', function($scope) {
});

app.controller('winController', function($scope, $http){
  $http.get('https://secret12.herokuapp.com/secretinfo').then(function(data){
    $scope.winData = data.data;
    $scope.winnings = data.data.secretData;
    $scope.bags = Math.round(data.data.secretData/1000000);
    $scope.men = Math.round(Math.round(data.data.secretData/1000000)/10);
    $scope.vans = Math.round(Math.round(data.data.secretData/1000000)/10)/4;
  });
});

app.controller('gameController', function($scope, $http){

});

app.controller('homeController', function($scope, $http){

});
