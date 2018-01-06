/**
 * 
 */
var myApp = angular.module('myApp',[]);

myApp.controller('drawMachineCtrl', ['$scope','$element', function($scope,$element){
	console.log($element);
	$scope.svgContainer = d3.select($element[0]).append("svg")
    .attr("width", 700 )
    .attr("height",604 );
}]);

