var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
	templateUrl : "tab1.html",
	controller:'tab1ctrl'
  })
  .when("/tab1", {
	templateUrl : "tab1.html",
	controller:'tab1ctrl'
  })
  .when("/tab2", {
	templateUrl : "tab2.html",
	controller:'tab2ctrl'

  })
  .when("/tab3", {
	templateUrl : "tab3.html",
	controller:'tab3ctrl'

  })
});



// --------------------------tab1--------
app.controller('tab1ctrl', function($scope) {
    $scope.cars = [
      {id : 1, name : 'Show All', type: "all" },
	    {id : 2, name : 'Text',     type: "text" },
      {id : 3, name : 'Videos',   type: "videos" },
      {id : 4, name : 'Photos',   type: "photos"}
    ];
  });

// //-----------------tab3---------



app.controller("tab3ctrl", function($scope) {
    $scope.person= ["David", "John", "Riya"];
    $scope.add = function () {
        $scope.person.push($scope.addMe);
    }    
});


// -------------------------tab2
app.controller('tab2ctrl', function($scope) {
  $scope.name='Thumbnails';
  $scope.images = [
    {"src":"images/image1.jpg", "alt":"image1"},
	    {"src":"images/image2.jpg", "alt":"image2"},
	    {"src":"images/image3.jpg", "alt":"image3"},
	    {"src":"images/image4.jpg", "alt":"image4"},
	    {"src":"images/image5.jpg", "alt":"image5"},
	    ];

 $scope.mythumb=function()
 	{
 		console.log(this.img.src);
 		var src = (this.img.src).trim();
 		$scope.imgSrc = src;
 	}
	
});


