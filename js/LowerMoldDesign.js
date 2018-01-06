/**
 * http://stackoverflow.com/questions/19090194/how-can-d3-select-multiple-shapes-with-shared-attributes-from-a-group
 */

angular.module('myApp').directive('lowermolddraw',function (){
	var link = function ($scope, $el, $attrs) {
		
		var div = d3.select("body").append("div")	
	    .attr("class", "tooltip")				
	    .style("opacity", 0);
		
		var svgContainer = d3.select($el[0]).append("svg")
	    .attr("width", 700 )
	    .attr("height",302 )
	    .attr("transform", "translate (0, -48)");
		//*******************************************************************
		//****************** dynamic updates values *************************
		//*******************************************************************
		D_upp_Insert = 0.044;
	    D_upp_Mold = 0.064;
	    H_upp_Mold = 0.015;
	    H_1_upp_Sleeve_1 = 0.04;
	    H_1_upp_Insert = 0.004;
	    D_1_upp_Insert = 0.036;
		
		  //*******************************************************************
		  //*********************** point declaration *************************
		  //*******************************************************************
	    point1 = {"x":x_RF_surf_upp_Mold , "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold)};
	    point2 = {"x":D_1_upp_Insert/2, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold)};
	    point3 = {"x":D_1_upp_Insert/2, "y": y_RF_surf_upp_Mold-RF_surf_upp_Mold-(H_upp_Mold-H_upp_Insert)};
	    point4 = {"x":D_upp_Mold/2, "y": y_RF_surf_upp_Mold-RF_surf_upp_Mold-(H_upp_Mold-H_upp_Insert)};
	    point5 = {"x":D_upp_Mold/2, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)};
	    point6 = {"x":0, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)};
	  // x&y of point 7 is zero
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
		  
		//*******************************************************************
			//****************** value insertion in Arrays **********************
			//******************************************************************* 
	    xVal50PointsArray = tempxVal50PointsArray.slice();
		xVal50PointsArray.push.apply(xVal50PointsArray,[x_RF_surf_upp_Mold,D_1_upp_Insert/2,D_upp_Mold/2,0]);
		  
		yVal50PointsArray = tempyVal50PointsArray.slice();
		yVal50PointsArray.push.apply(yVal50PointsArray,[(y_RF_surf_upp_Mold-RF_surf_upp_Mold),
            (y_RF_surf_upp_Mold-RF_surf_upp_Mold-(H_upp_Mold-H_upp_Insert)),
            (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)]);
		
		objectArray = tempArrayforFiftyPoints.slice();
		objectArray.push(point1);
		  objectArray.push(point2);
		  objectArray.push(point3);
		  objectArray.push(point10);
		  objectArray.push(point9);
		  objectArray.push(point8);
		  objectArray.push(point6);

		  objectArray2.push(point3);
		  objectArray2.push(point4);
		  objectArray2.push(point5);
		  objectArray2.push(point8);
		  objectArray2.push(point9);
		  objectArray2.push(point10);

		  object1["point"] = "point7";
		  point1["point"] = "point1";
		  point2["point"] = "point2";
		  point3["point"] = "point3";
		  point4["point"] = "point4";
		  point5["point"] = "point5";
		  point6["point"] = "point6";
		  point8["point"] = "point8";
		  point9["point"] = "point9";
		  point10["point"] = "point10";

		  circleArray.push(object1);
		  circleArray.push(object50);
		  circleArray.push(point1);
		  circleArray.push(point2);
		  circleArray.push(point3);
		  circleArray.push(point4);
		  circleArray.push(point5);
		  circleArray.push(point6);
		  circleArray.push(point8);
		  circleArray.push(point9);
		  circleArray.push(point10);
		  
		 var scaleX = d3.scale.linear()
		  .domain([Math.min.apply(null,xVal50PointsArray),Math.max.apply(null,xVal50PointsArray)])
		  .range([350,600]);
		 
		 var scaleY = d3.scale.linear()
		   .domain([Math.min.apply(null,yVal50PointsArray),Math.max.apply(null,yVal50PointsArray)])
		   .range([50,300]);
		 
		 var mirrorScaleX = d3.scale.linear()
		  .domain([Math.min.apply(null,xVal50PointsArray),Math.max.apply(null,xVal50PointsArray)])
		  .range([350,100]);
		 
		 var drawPolygon1 = svgContainer.append("g")
	        .selectAll("polyline")
	        .data([objectArray])
	        .enter().append("polyline")
	        .attr("points",function(d) {
	        	return d.map(function(d) { return [scaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
	        .attr("stroke","black")
	        .attr("fill","url(#gradient)")
//	        .attr("fill-opacity",0)
	        .attr("stroke-width",2);
		 
		 var gradient = svgContainer.append("svg:defs")
	 		.append("svg:linearGradient")
	 		.attr("id", "gradient")
	 		.attr("x1", "0%")
	 		.attr("y1", "0%")
	 		.attr("x2", "100%")
	 		.attr("y2", "100%")
	 		.attr("spreadMethod", "pad");
	 
	 gradient.append("svg:stop")
	    .attr("offset", "0%")
	    .attr("stop-color", " #4AC29A")
	    .attr("stop-opacity", 1);

	 gradient.append("svg:stop")
	    .attr("offset", "100%")
	    .attr("stop-color", " #BDFFF3")
	    .attr("stop-opacity", 1);
	 
	 var mirrorPaleGradient = svgContainer.append("svg:defs")
		.append("svg:linearGradient")
		.attr("id", "mirrorPaleGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "100%")
		.attr("y2", "100%")
		.attr("spreadMethod", "pad");

	 mirrorPaleGradient.append("svg:stop")
	 	.attr("offset", "0%")
	 	.attr("stop-color", " #BDFFF3")
	 	.attr("stop-opacity", 1);

	 mirrorPaleGradient.append("svg:stop")
	 	.attr("offset", "100%")
	 	.attr("stop-color", " #4AC29A")
	 	.attr("stop-opacity", 1);
	 
	 var ashGradient = svgContainer.append("svg:defs")
		.append("svg:linearGradient")
		.attr("id", "ashGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "100%")
		.attr("y2", "100%")
		.attr("spreadMethod", "pad");

	 ashGradient.append("svg:stop")
	 	.attr("offset", "0%")
	 	.attr("stop-color", "  #bdc3c7")
	 	.attr("stop-opacity", 1);

	 ashGradient.append("svg:stop")
	 	.attr("offset", "100%")
	 	.attr("stop-color", " #2c3e50")
	 	.attr("stop-opacity", 1);
	 
	 var mirrorOfDrawPolygon1 = svgContainer.append("g")
	    //.attr("transform","scale(-1/2,1)")
     .selectAll("polyline")
     .data([objectArray])
     .enter().append("polyline")
     .attr("points",function(d) {
     	return d.map(function(d) { return [mirrorScaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
     .attr("stroke","black")
     .attr("fill","url(#mirrorPaleGradient)")
//     .attr("fill-opacity",0)
     .attr("stroke-width",2);
	 
	 ldrawPolygon2 = svgContainer.append("g")
     .selectAll("polygon")
     .data([objectArray2])
     .enter().append("polygon")
     .attr("points",function(d) {
     	return d.map(function(d) { return [scaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
     .attr("stroke","black")
     .attr("fill","url(#ashGradient)")
   //  .attr("fill-opacity",0)
     .attr("stroke-width",2);

	 
	 var mirrorOfDrawPolygon2 = svgContainer.append("g")
     .selectAll("polygon")
     .data([objectArray2])
     .enter().append("polygon")
     .attr("points",function(d) {
     	return d.map(function(d) { return [mirrorScaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
     .attr("stroke","black")
     .attr("fill","url(#ashGradient)")
   //  .attr("fill-opacity",0)
     .attr("stroke-width",2);
	 
	/* var drawCircle = svgContainer.append("g")
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
	}
	return {
		template: '<div class="...[classes]..."></div>',
	      replace: true,
	      link: link, 
	      restrict: 'E'
	};
});
