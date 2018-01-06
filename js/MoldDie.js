/**
 * 
 */

angular.module('myApp').directive('molddiedraw',function ($compile){
	var link = function ($scope, $el, $attrs) {
		console.log($el);
//		var svgContainer = d3.select($el[0]).append("svg")
//	    .attr("width", 700 )
//	    .attr("height",302 );
		
		moldDieData = manipulateData();
		console.log(moldDieData);
		var drawMoldDie = $scope.svgContainer.append("g")
	     .selectAll("polygon")
	     .data([moldDieData])
	     .enter().append("polygon")
	     .attr("points",function(d) {
	     	return d.map(function(d) { return [$scope.scaleX(d.x),$scope.scaleY(d.y)].join(","); }).join(" ");})
	     .attr("stroke","black")
	     .style("fill","url(#ashGradient)")
	   //  .attr("fill-opacity",0)
	     .on("click",highlightBothMold)
	     .attr("stroke-width",2)
		
		//$compile($el.contents())($scope);
	}
	
	return {
		replace: true,
		link : link,
		restrict : 'E'
	};
})


function manipulateData(){
	D_upp_Insert = 0.044;
    D_upp_Mold = 0.064;
    H_upp_Mold = 0.015;
    H_1_upp_Sleeve_1 = 0.04;
    H_1_upp_Insert = 0.004;
    D_1_upp_Insert = 0.036;
    
    //*******************************************************************
	  //*********************** point declaration *************************
	  //*******************************************************************
	
	point3 = {"x":D_1_upp_Insert/2, "y": y_RF_surf_upp_Mold-RF_surf_upp_Mold-(H_upp_Mold-H_upp_Insert)};
	point4 = {"x":D_upp_Mold/2, "y": y_RF_surf_upp_Mold-RF_surf_upp_Mold-(H_upp_Mold-H_upp_Insert)};
	point5 = {"x":D_upp_Mold/2, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)};
	point8 = {"x":D_upp_Insert/2, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)};
	point9 = {"x":D_upp_Insert/2, "y": ((y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)-H_1_upp_Insert)};
	point10 = {"x":D_1_upp_Insert/2, "y": ((y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)-H_1_upp_Insert)};
	
	 //*******************************************************************
	//****************** value remove from Arrays **********************
	//*******************************************************************
	  xVal50PointsArray.length = 0;
	  yVal50PointsArray.length = 0;
	  objectArray.length = 0;
	  objectArray2.length = 0;
	  circleArray. length = 0;
	  
	  xVal50PointsArray = tempxVal50PointsArray.slice();
	  xVal50PointsArray.push.apply(xVal50PointsArray,[x_RF_surf_upp_Mold,D_1_upp_Insert/2,D_upp_Mold/2,0]);
		  
	  yVal50PointsArray = tempyVal50PointsArray.slice();
	  yVal50PointsArray.push.apply(yVal50PointsArray,[(y_RF_surf_upp_Mold-RF_surf_upp_Mold),
      (y_RF_surf_upp_Mold-RF_surf_upp_Mold-(H_upp_Mold-H_upp_Insert)),
      (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)]);
	  
	  objectArray2.push(point3);
	  objectArray2.push(point4);
	  objectArray2.push(point5);
	  objectArray2.push(point8);
	  objectArray2.push(point9);
	  objectArray2.push(point10);
	  
	  return objectArray2;
}