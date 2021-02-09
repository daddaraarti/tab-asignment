var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "login.html",
      controller: 'validateCtrl'
    })
    .when("/login", {
      templateUrl: "login.html",
      controller: 'validateCtrl'
    })
    .when("/employeelist", {
      templateUrl: "employeelist.html",
      controller: 'empctrl'
    })
    .when("/update", {
      templateUrl: "update.html",
      controller: 'updatectrl'

    })
});

// -------------------login-----------------

app.controller("validateCtrl", function ($scope, $http, $location, $log) {

  $scope.submit = function () {
    $scope.pwd = 'admin'   
    if ($scope.username == 'admin' && $scope.pwd == 'admin') {
      $location.path('/employeelist');
    }
  };
  $scope.logout = function () {
    $location.path('/login');
  }
});

// --------------------------------------------------get data----------------------------

app.service('jsonService', function ($http) {
  this.data;
  
  this.getData = function () {
        return $http.get('MOCK_DATA.JSON');
  }
 this.employee;
 this.editempid;
var Employee= [];

 
});

// --------------------------------------------

app.controller('empctrl', function ($scope, jsonService,$location){

  $scope.Employee=[];
  if(!jsonService.data){
  jsonService.getData().then(function(resp){
    jsonService.data=resp.data;
    $scope.Employee=jsonService.data;
    //jsonService.Employee = jsonService.data
  });
}
else{
  $scope.Employee=jsonService.data;
}  
  //----------------------     delete EMPLOYELIST ------------------
  
   $scope.deleteuser = function (index) {
    console.log(index);
    $scope.Employee.splice(index, 1);
  };
//-------------------------edit employee------------------------------------------
  $scope.editemployee=function(index){
  jsonService.editempid=index;
  console.log('update')
  $location.path('/update');
  }
})
// -----------------------  add employee -----------------
app.controller('updatectrl', function ($scope, jsonService ,$http,$location) {
  console.log(jsonService.editempid);
  $scope.emp = {};
  
  if(jsonService.editempid){
     $scope.emp=jsonService.editempid
  }
  $scope.addemp = function (index) {  
    jsonService.employee=$scope.emp;
    jsonService.data.push($scope.emp);
    console.log(jsonService.data);
    $scope.emp={};
    $location.path('/employeelist');
    

  }
if(jsonService.editempid){
  $scope.emp=jsonService.editempid;
}
  $scope.update=function(updatedEmp){
    console.log(updatedEmp);
     for(var i=0;i<jsonService.data.length;i++){
       if(jsonService.data[i].id==updatedEmp.id){
        jsonService.data[i]=updatedEmp;
       }
       jsonService.editempid={};
     } 
     
    $location.path('/employeelist');
  }
 });
