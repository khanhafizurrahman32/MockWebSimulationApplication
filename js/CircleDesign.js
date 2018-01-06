/**
 * 
 */

angular.module('myApp').controller('GlassPreformCtrl', ['$scope', function ($scope) {
	$scope.data = {
		availableDiameterOptions: [
			{id: '25', name: 'Outer Diameter 25'},
			{id: '35', name: 'Outer Diameter 35'},
			{id: '50', name: 'Outer Diameter 50'},
		],
		selectedOption: {id: '50', name: 'Outer Diameter 50'}
	};
	
	
//	console.log($scope.diameter.selectedOption.id);
	
	/*$scope.data = 30;
	$scope.testingFunction = function(){
		console.log('ki labh!!');
	}*/
}])


angular.module('myApp').directive('circledraw',function (){
	var link = function ($scope, $el, $attrs) {
		var svgContainer = d3.select($el[0]).append("svg")
		                                     .attr("width", 100)
		                                     .attr("height", 100);
		 
		 var circle = svgContainer.append("circle")
		                          .attr("cx", 50)
		                          .attr("cy", 50)
		                          .attr("r", $scope.data)
		 						  .style("fill", "aquamarine")
		 						  .on("click", function (){
		 							 var currentColor = this.style.fill == "aquamarine" ? "blueViolet" : "aquamarine";
		 							 d3.select(this).style("fill", currentColor);
		 						  });
		 
		 $scope.$watch('data',function (data) {
			 circle.attr("r", data.selectedOption.id);
			 
		 },true);
		
	}	 						 
	return {
	  template: '<div class="...[classes]..."></div>',
      replace: true,
      link: link, 
      restrict: 'E',
      scope: {data: '='}
	};
});

