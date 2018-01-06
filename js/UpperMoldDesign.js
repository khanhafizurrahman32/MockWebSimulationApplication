// *******************************************************************
// ****************** Variable Declaration ***************************
// *******************************************************************
var poly1, poly2, poly3, poly4, a, b, c, d, e, f;
var point1, point2, point3, point4, point5, point6, point7, point8, point9, point10;
var objectArray = [];
var objectArray2 = [];
var circleArray = [];
var tempArrayforFiftyPoints = [];
var object50, object1 ;
var margin = {top: 30, right: 20, bottom: 30, left: 50},
width = 1000 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;
var xVal50PointsArray = [];
var tempxVal50PointsArray = [];
var yVal50PointsArray = [];
var tempyVal50PointsArray = [];
// ** Parameters for Upper Mold Surface Design ***
var D_surf_upp_Mold		=	10.74;
var N_surf_upp_Mold		=	50 ;

//***
var RF_surf_upp_Mold = 0;
var R_surf_upp_Mold		=	-12.5;
var K_surf_upp_Mold		=	-6.84734e-1;
var A2_surf_upp_Mold	=	0;
var A4_surf_upp_Mold	=	7.0626e-4;
var A6_surf_upp_Mold	=	-3.36564e-5;
var A8_surf_upp_Mold	=	1.27834e-6;
var A10_surf_upp_Mold	=	-3.47264e-8;
var A12_surf_upp_Mold	=	0;
var A14_surf_upp_Mold	=	0;
var A16_surf_upp_Mold	=	0;
var A18_surf_upp_Mold	=	0;
var A20_surf_upp_Mold	=	0;

//*** Parameters for Upper Mold Design (mm) ***
var D_upp_Insert		=	35	*1e-3;   //#a
var D_1_upp_Insert		=	32	*1e-3;   //#f
var H_upp_Insert		=	15	*1e-3;	
var H_1_upp_Insert		=	8	*1e-3;     //#e
var D_upp_Sleeve_1          =       32      *1e-3;
var H_upp_Sleeve_1          =       15      *1e-3 ;  
var H_1_upp_Sleeve_1        =       4       *1e-3;   //#d
var D_upp_Mold		=	64	*1e-3;   //#b
var H_upp_Mold		=	15	*1e-3;   //#c 


//*** variable declaration of coordinates of the last point among 50
var x_RF_surf_upp_Mold = 0;
var y_RF_surf_upp_Mold = 0;
var myApp = angular.module('myApp', []);


var drawPolygon2;
var ldrawPolygon2;
var changeColor = false;
//*******************************************************************
//****************** Generating Y coordinates ***********************
//*******************************************************************
function generatingYPoint (x,R,K,A2,A4, A6, A8, A10, A12, A14, A16, A18, A20) {
    return (Math.pow(x,2)/(R*(1+(Math.sqrt(1-(1+K)*((Math.pow(x,2))/(Math.pow(R,2)))))))
            + A2*(Math.pow(x,2)) + A4*(Math.pow(x,4)) + A6*(Math.pow(x,6)) + A8*(Math.pow(x,8))
            + A10*(Math.pow(x,10)) + A12*(Math.pow(x,12)) + A14*(Math.pow(x,14))
            + A16*(Math.pow(x,16)) + A18*(Math.pow(x,18)) + A20*(Math.pow(x,20)));
 }

//*******************************************************************
//****************** Generating Coordinates ***************************
//*******************************************************************
//
var generatingCoordinates= function(){
	for(i =0;i< N_surf_upp_Mold; i++){
		var x_surf_1_upp_Mold = i*((D_surf_upp_Mold/2)/N_surf_upp_Mold);
	    var y_surf_1_upp_Mold = generatingYPoint(x_surf_1_upp_Mold,R_surf_upp_Mold,K_surf_upp_Mold,
                						  A2_surf_upp_Mold,A4_surf_upp_Mold,A6_surf_upp_Mold,
                						  A8_surf_upp_Mold,A10_surf_upp_Mold,A12_surf_upp_Mold,
                						  A14_surf_upp_Mold,A16_surf_upp_Mold,A18_surf_upp_Mold,
                						  A20_surf_upp_Mold);

	    if(i == (N_surf_upp_Mold-1)){
	    	x_RF_surf_upp_Mold = (i+1)*((D_surf_upp_Mold/2)/N_surf_upp_Mold);
	    	y_RF_surf_upp_Mold =generatingYPoint(x_RF_surf_upp_Mold,R_surf_upp_Mold,K_surf_upp_Mold,
					  A2_surf_upp_Mold,A4_surf_upp_Mold,A6_surf_upp_Mold,
					  A8_surf_upp_Mold,A10_surf_upp_Mold,A12_surf_upp_Mold,
					  A14_surf_upp_Mold,A16_surf_upp_Mold,A18_surf_upp_Mold,
					  A20_surf_upp_Mold);
	    	x_RF_surf_upp_Mold =(x_RF_surf_upp_Mold)*1e-3;
	    	y_RF_surf_upp_Mold =y_RF_surf_upp_Mold*1e-3;
	    	tempxVal50PointsArray.push(x_RF_surf_upp_Mold);
	    	tempyVal50PointsArray.push(y_RF_surf_upp_Mold);
	    	object50 = {"x": x_RF_surf_upp_Mold , "y": y_RF_surf_upp_Mold};
	    	console.log((i+1) + " " + x_RF_surf_upp_Mold + " " + y_RF_surf_upp_Mold);
	    }
	   
	   var individualobject = {"x": (x_surf_1_upp_Mold)*1e-3, "y": y_surf_1_upp_Mold*1e-3};
	    if(i == 0){
	    	object1 = individualobject;
	    }
	   console.log(i + " " + x_surf_1_upp_Mold*1e-3 + " " + y_surf_1_upp_Mold*1e-3);
	   tempxVal50PointsArray.push(x_surf_1_upp_Mold*1e-3);
	   tempyVal50PointsArray.push(y_surf_1_upp_Mold*1e-3);
	   tempArrayforFiftyPoints.push(individualobject);    	    
	}
}();

//*******************************************************************
//****************** find min & max value **********************
//*******************************************************************
xVal50PointsArray.push.apply(xVal50PointsArray,[x_RF_surf_upp_Mold,D_1_upp_Insert/2,D_upp_Mold/2,0]);
yVal50PointsArray.push.apply(yVal50PointsArray,[(y_RF_surf_upp_Mold-RF_surf_upp_Mold),
		                     (y_RF_surf_upp_Mold-RF_surf_upp_Mold-(H_upp_Mold-H_upp_Insert)),
		                     (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)]);



//*******************************************************************
//****************** Main execution Functions ***********************
//*******************************************************************

angular.module('myApp').controller('MoldCtrl',function ($scope, $element){
	console.log($element[0]);
	$scope.svgContainer = d3.select($element[0]).append("svg")
    .attr("width", 700 )
    .attr("height",302 );
	
	$scope.scaleX = d3.scale.linear()
	  .domain([Math.min.apply(null,xVal50PointsArray),Math.max.apply(null,xVal50PointsArray)])
	  .range([350,600]);
	
	$scope.scaleY = d3.scale.linear()
	   .domain([Math.min.apply(null,yVal50PointsArray),Math.max.apply(null,yVal50PointsArray)])
	   .range([300,50]);
	
	$scope.mirrorScaleX = d3.scale.linear()
	  .domain([Math.min.apply(null,xVal50PointsArray),Math.max.apply(null,xVal50PointsArray)])
	  .range([350,100]);
	
	$scope.ashGradient = $scope.svgContainer.append("svg:defs")
	.append("svg:linearGradient")
	.attr("id", "ashGradient")
	.attr("x1", "0%")
	.attr("y1", "0%")
	.attr("x2", "100%")
	.attr("y2", "100%")
	.attr("spreadMethod", "pad");
	
	$scope.ashGradient.append("svg:stop")
 	.attr("offset", "0%")
 	.attr("stop-color", "  #bdc3c7")
 	.attr("stop-opacity", 1);

	$scope.ashGradient.append("svg:stop")
 	.attr("offset", "100%")
 	.attr("stop-color", " #2c3e50")
 	.attr("stop-opacity", 1);
	
});
angular.module('myApp').directive('uppermolddraw',function (){
//	var link = function ($scope, $el, $attrs) {
//		
//		var div = d3.select("body").append("div")	
//	    .attr("class", "tooltip")				
//	    .style("opacity", 0);
//		
////		svgContainer = d3.select($el[0]).append("svg")
////	    .attr("width", 700 )
////	    .attr("height",302 );
//		//*******************************************************************
//		//****************** dynamic updates values *************************
//		//*******************************************************************
//		D_upp_Insert = 0.044;
//	    D_upp_Mold = 0.064;
//	    H_upp_Mold = 0.015;
//	    H_1_upp_Sleeve_1 = 0.04;
//	    H_1_upp_Insert = 0.004;
//	    D_1_upp_Insert = 0.036;
//		
//		  //*******************************************************************
//		  //*********************** point declaration *************************
//		  //*******************************************************************
//	    point1 = {"x":x_RF_surf_upp_Mold , "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold)};
//	    point2 = {"x":D_1_upp_Insert/2, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold)};
//	    point3 = {"x":D_1_upp_Insert/2, "y": y_RF_surf_upp_Mold-RF_surf_upp_Mold-(H_upp_Mold-H_upp_Insert)};
//	    point4 = {"x":D_upp_Mold/2, "y": y_RF_surf_upp_Mold-RF_surf_upp_Mold-(H_upp_Mold-H_upp_Insert)};
//	    point5 = {"x":D_upp_Mold/2, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)};
//	    point6 = {"x":0, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)};
//	  // x&y of point 7 is zero
//	    point8 = {"x":D_upp_Insert/2, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)};
//	    point9 = {"x":D_upp_Insert/2, "y": ((y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)-H_1_upp_Insert)};
//	    point10 = {"x":D_1_upp_Insert/2, "y": ((y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)-H_1_upp_Insert)};
//	    
//	    //*******************************************************************
//		//****************** value remove from Arrays **********************
//		//*******************************************************************
//		  xVal50PointsArray.length = 0;
//		  yVal50PointsArray.length = 0;
//		  objectArray.length = 0;
//		  objectArray2.length = 0;
//		  circleArray. length = 0;
//		  
//		//*******************************************************************
//			//****************** value insertion in Arrays **********************
//			//******************************************************************* 
//	    xVal50PointsArray = tempxVal50PointsArray.slice();
//		xVal50PointsArray.push.apply(xVal50PointsArray,[x_RF_surf_upp_Mold,D_1_upp_Insert/2,D_upp_Mold/2,0]);
//		  
//		yVal50PointsArray = tempyVal50PointsArray.slice();
//		yVal50PointsArray.push.apply(yVal50PointsArray,[(y_RF_surf_upp_Mold-RF_surf_upp_Mold),
//            (y_RF_surf_upp_Mold-RF_surf_upp_Mold-(H_upp_Mold-H_upp_Insert)),
//            (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)]);
//		
//		objectArray = tempArrayforFiftyPoints.slice();
//		objectArray.push(point1);
//		  objectArray.push(point2);
//		  objectArray.push(point3);
//		  objectArray.push(point10);
//		  objectArray.push(point9);
//		  objectArray.push(point8);
//		  objectArray.push(point6);
//
//		  objectArray2.push(point3);
//		  objectArray2.push(point4);
//		  objectArray2.push(point5);
//		  objectArray2.push(point8);
//		  objectArray2.push(point9);
//		  objectArray2.push(point10);
//
//		  object1["point"] = "point7";
//		  point1["point"] = "point1";
//		  point2["point"] = "point2";
//		  point3["point"] = "point3";
//		  point4["point"] = "point4";
//		  point5["point"] = "point5";
//		  point6["point"] = "point6";
//		  point8["point"] = "point8";
//		  point9["point"] = "point9";
//		  point10["point"] = "point10";
//
//		  circleArray.push(object1);
//		  circleArray.push(object50);
//		  circleArray.push(point1);
//		  circleArray.push(point2);
//		  circleArray.push(point3);
//		  circleArray.push(point4);
//		  circleArray.push(point5);
//		  circleArray.push(point6);
//		  circleArray.push(point8);
//		  circleArray.push(point9);
//		  circleArray.push(point10);
//		  
//		 
//		 d3.selectAll("g").remove();
//		 d3.selectAll("rg").remove();
//		 var drawPolygon1 = $scope.svgContainer.append("g")
//	        .selectAll("polyline")
//	        .data([objectArray])
//	        .enter().append("polyline")
//	        .attr("points",function(d) {
//	        	return d.map(function(d) { return [$scope.scaleX(d.x),$scope.scaleY(d.y)].join(","); }).join(" ");})
//	        .attr("stroke","black")
//	        .attr("fill","url(#mirrorPaleGradient)")
////	        .attr("fill-opacity",0)
//	        .attr("stroke-width",2);
//		 
////		 var gradient = svgContainer.append("svg:defs")
////	 		.append("svg:linearGradient")
////	 		.attr("id", "gradient")
////	 		.attr("x1", "0%")
////	 		.attr("y1", "0%")
////	 		.attr("x2", "100%")
////	 		.attr("y2", "100%")
////	 		.attr("spreadMethod", "pad");
////	 
////	 gradient.append("svg:stop")
////	    .attr("offset", "0%")
////	    .attr("stop-color", " #4AC29A")
////	    .attr("stop-opacity", 1);
////
////	 gradient.append("svg:stop")
////	    .attr("offset", "100%")
////	    .attr("stop-color", " #BDFFF3")
////	    .attr("stop-opacity", 1);
//	 
//	 var mirrorPaleGradient = $scope.svgContainer.append("svg:defs")
//		.append("svg:linearGradient")
//		.attr("id", "mirrorPaleGradient")
//		.attr("x1", "0%")
//		.attr("y1", "0%")
//		.attr("x2", "100%")
//		.attr("y2", "100%")
//		.attr("spreadMethod", "pad");
//
//	 mirrorPaleGradient.append("svg:stop")
//	 	.attr("offset", "0%")
//	 	.attr("stop-color", " #BDFFF3")
//	 	.attr("stop-opacity", 1);
//
//	 mirrorPaleGradient.append("svg:stop")
//	 	.attr("offset", "100%")
//	 	.attr("stop-color", " #4AC29A")
//	 	.attr("stop-opacity", 1);
//	 
//	 var ashGradient = $scope.svgContainer.append("svg:defs")
//		.append("svg:linearGradient")
//		.attr("id", "ashGradient")
//		.attr("x1", "0%")
//		.attr("y1", "0%")
//		.attr("x2", "100%")
//		.attr("y2", "100%")
//		.attr("spreadMethod", "pad");
//
//	 ashGradient.append("svg:stop")
//	 	.attr("offset", "0%")
//	 	.attr("stop-color", "  #bdc3c7")
//	 	.attr("stop-opacity", 1);
//
//	 ashGradient.append("svg:stop")
//	 	.attr("offset", "100%")
//	 	.attr("stop-color", " #2c3e50")
//	 	.attr("stop-opacity", 1);
//	 
//	 var mirrorOfDrawPolygon1 = $scope.svgContainer.append("g")
//	    //.attr("transform","scale(-1/2,1)")
//     .selectAll("polyline")
//     .data([objectArray])
//     .enter().append("polyline")
//     .attr("points",function(d) {
//     	return d.map(function(d) { return [$scope.mirrorScaleX(d.x),$scope.scaleY(d.y)].join(","); }).join(" ");})
//     .attr("stroke","black")
//     .attr("fill","url(#mirrorPaleGradient)")
////     .attr("fill-opacity",0)
//     .attr("stroke-width",2);
//	 
//	 drawPolygon2 = $scope.svgContainer.append("g")
//     .selectAll("polygon")
//     .data([objectArray2])
//     .enter().append("polygon")
//     .attr("points",function(d) {
//     	return d.map(function(d) { return [$scope.scaleX(d.x),$scope.scaleY(d.y)].join(","); }).join(" ");})
//     .attr("stroke","black")
//     .style("fill","url(#ashGradient)")
//   //  .attr("fill-opacity",0)
//     .on("click",highlightBothMold)
//     .attr("stroke-width",2);
//
//	 
//	 var mirrorOfDrawPolygon2 = $scope.svgContainer.append("g")
//     .selectAll("polygon")
//     .data([objectArray2])
//     .enter().append("polygon")
//     .attr("points",function(d) {
//     	return d.map(function(d) { return [$scope.mirrorScaleX(d.x),$scope.scaleY(d.y)].join(","); }).join(" ");})
//     .attr("stroke","black")
//     .attr("fill","url(#ashGradient)")
//   //  .attr("fill-opacity",0)
//     .attr("stroke-width",2);
//	 
//	}
	

	
	return {
	      replace: true,
//	      link: link, 
	      restrict: 'E',
	      scope: {}
	};
});

function highlightBothMold() {
	if(changeColor) {
		drawPolygon2.style("fill", "url(#ashGradient)");
		ldrawPolygon2.style("fill","url(#ashGradient)");
	}else {
		drawPolygon2.style("fill", "red");
		ldrawPolygon2.style("fill", "red");
	test();
	}
	changeColor = !changeColor;
	
}
	 /*var drawCircle = svgContainer.append("g")
	  	.selectAll("dot")
	  	.data(circleArray)
	  	.enter().append("circle")
	  		.attr("r", 5)
	  		.attr("cx", function (d) {return scaleX(d.x); })
	  		.attr("cy", function (d) {return scaleY(d.y); })
	  		.attr("fill", "blue")
	  		.on("mouseover", function(d) {		
	            div.transition()		
	                .duration(200)		
	                .style("opacity", .9);		
	            div	.html(d.point+ "<br/>"  +d.x + "<br/>"  + d.y)	
	                .style("left", (d3.event.pageX) + "px")		
	                .style("top", (d3.event.pageY - 28) + "px");	
	            })					
	        .on("mouseout", function(d) {		
	            div.transition()		
	                .duration(500)		
	                .style("opacity", 0);	
	        });
	 var mirrorOfDrawCircle = svgContainer.append("g")
	  	.selectAll("dot")
	  	.data(circleArray)
	  	.enter().append("circle")
	  		.attr("r", 5)
	  		.attr("cx", function (d) {return mirrorScaleX(d.x); })
	  		.attr("cy", function (d) {return scaleY(d.y); })
	  		.attr("fill", "blue")
	  		.on("mouseover", function(d) {		
	            div.transition()		
	                .duration(200)		
	                .style("opacity", .9);		
	            div	.html(d.point+ "<br/>"  +d.x + "<br/>"  + d.y)	
	                .style("left", (d3.event.pageX) + "px")		
	                .style("top", (d3.event.pageY - 28) + "px");	
	            })					
	        .on("mouseout", function(d) {		
	            div.transition()		
	                .duration(500)		
	                .style("opacity", 0);	
	        });*/


