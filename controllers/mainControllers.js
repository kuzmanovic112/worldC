angular.module('mainController',[])
.controller('mainCtrl',function($scope,db){
    $scope.cups=[];
    $scope.activeCups={};
    db.getData().then(function(result){
    $scope.cups=result.data;
    // console.log(result.data);
        },function(error){
    console.log(error)
        })
        $scope.display=function(cup){
            $scope.activeCups=cup;
        }
        
})





