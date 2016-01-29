app.controller('mainController', function($scope) {
});

app.controller('winController', function($scope, $http){
  $http.get('https://secret12.herokuapp.com/secretinfo').then(function(data){
    $scope.winData = data.data;
    $scope.winnings = data.data.secretData;
  });
});

app.controller('gameController', function($scope, $http){

});

app.controller('homeController', function($scope, $http){

});
