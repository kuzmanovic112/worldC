angular.module('dbService',[])
.service('db',function($http){
this.getData=function(){
    return $http
    ({
        method:"get",
        url:"https://raw.githubusercontent.com/kuzmanovic112/lista/master/index.json"  
    })
}
})