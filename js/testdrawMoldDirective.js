/**
 * svn phase 1 er somoi thakbe ei file ta which is basically svn 0 te drawMoldDirective.js
 */

myModule.directive('drawCompleteMold',function (SimPGMDataProviderService){
	var link = function ($scope, $element, attrs){
	var svgContainer = d3.select($element[0]).append("svg")
			.attr("preserveAspectRatio","xMinYMin meet").attr("viewBox", "0 0 580 667").classed("svg-content-responsive",true).attr("id","globalSVG")
			.style("border", "1px solid black");
	var curveParameterData = manipulatecurveParameterData(SimPGMDataProviderService);
	var upperMoldInsertData = manipulateUpperMoldInsertdata(SimPGMDataProviderService);
	var moldDieData = manipulateUpperMoldDieData(SimPGMDataProviderService);	
	var circleData = SimPGMDataProviderService.circleData;
	var lowerMoldDieData = manipulateLowerMoldDieData(SimPGMDataProviderService);
	
	defineGradientColorsforEachPart(svgContainer);
		
	function drawUpperMoldDie(){
		var upperMoldOriginalDie = svgContainer.append("g").attr("class","upperMoldDie")
			.selectAll("polygon")
		    .data([moldDieData])
		    .enter().append("polygon").attr("class","UMDieDraw")
		    .attr("points",function(d) {
		    	return d.map(function(d) { return [scaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
		    .attr("stroke","black")
		    .attr("stroke-width",2)
			.style("fill",function(){
				if(SimPGMDataProviderService.upperMoldDieCounter == 0){
					return "url(#ashGradient)";
				}else{
					return "red"
				};
			});

		
		
		var upperMoldMirrorDie = svgContainer.append("g").attr("class","upperMoldDie")
		.selectAll("polygon")
	    .data([moldDieData])
	    .enter().append("polygon").attr("class","UMDieDraw")
	    .attr("points",function(d) {
	    	return d.map(function(d) { return [mirrorScaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
	    .attr("stroke","black")
	    .attr("stroke-width",2)
		.style("fill",function(){
			if(SimPGMDataProviderService.upperMoldDieCounter == 0){
				SimPGMDataProviderService.upperMoldDieCounter += 1;
				return "url(#mirrorAshGradient)";
			}else{
				return "red"
			};
		});
	}
	    
	drawUpperMoldDie();
	
	function drawUpperMoldDieClickEvent(){
		  $('#globalSVG .upperMoldDie').on('click',function () {
			  $scope.upperMoldDieInputShow = !$scope.upperMoldDieInputShow;
			  $scope.$apply();
			  if($scope.upperMoldDieInputShow)
				 d3.selectAll('#globalSVG .upperMoldDie .UMDieDraw').style("fill" , "red");
			  else 
				 d3.selectAll('#globalSVG .upperMoldDie .UMDieDraw').style("fill" , "url(#ashGradient)");    
			});
	}
	
	drawUpperMoldDieClickEvent();	          
	 
	 $scope.$on ('handleUpperMoldDieDataBroadcast',function (){
		 moldDieData = manipulateUpperMoldDieData(SimPGMDataProviderService);
		 d3.selectAll('#globalSVG .upperMoldDie').remove();
		 drawUpperMoldDie();
		 drawUpperMoldDieClickEvent();
	 });
	
	 function drawUpperMoldInsert(){
		 upperMoldOriginalInsert = svgContainer.append("g").attr("class","upperMoldInsert")
		        .selectAll("polyline")
		        .data([upperMoldInsertData])
		        .enter().append("polyline")
		        .attr("id","upperMoldOriginalInsert")
		        .attr("points",function(d) {
		        	return d.map(function(d) { return [scaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
		        .attr("stroke","black")
		        .attr("stroke-width",2);
				
		 upperMoldMirrorInsert = svgContainer.append("g").attr("class","upperMoldInsert")
		        .selectAll("polyline")
		        .data([upperMoldInsertData])
		        .enter().append("polyline")
		        .attr("id","upperMoldMirrorInsert")
		        .attr("points",function(d) {
		        	return d.map(function(d) { return [mirrorScaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
		        .attr("stroke","black")
		        .attr("stroke-width",2); 
		 
		 // logic behind here is: after inserting value the color is changed to its original color from red
		 if(SimPGMDataProviderService.upperMoldInsertCounter == 0){
			 upperMoldOriginalInsert.style("fill","url(#palegradient)");
			 upperMoldMirrorInsert.style("fill","url(#mirrorPalegradient)");
			 SimPGMDataProviderService.upperMoldInsertCounter += 1;
		 }else {
			 upperMoldOriginalInsert.style("fill","red");
			 upperMoldMirrorInsert.style("fill","red");
		 }
	 }
	 drawUpperMoldInsert();
	 
	 $('#globalSVG .upperMoldInsert').on('click',function () {
		 console.log('clicked');
		 $scope.upperMoldInsertInputShow = !$scope.upperMoldInsertInputShow;
		 $scope.$apply();
		 //i think i dont need this if
		 // if($scope.upperMoldInsertInputShow){
			 // d3.selectAll('#globalSVG .upperMoldInsert #upperMoldOriginalInsert').style("fill" , "red"); 
			 // d3.selectAll('#globalSVG .upperMoldInsert #upperMoldMirrorInsert').style("fill" , "red"); 
		 // }	 
		 // else{
			 // d3.selectAll('#globalSVG .upperMoldInsert #upperMoldOriginalInsert').style("fill" , "url(#palegradient)"); 
			 // d3.selectAll('#globalSVG .upperMoldInsert #upperMoldMirrorInsert').style("fill" , "url(#mirrorPalegradient)"); 
		 // }
        	 
	 });
	 
	$scope.$on ('handleUpperMoldInsertDataBroadcast',function (){
		upperMoldInsertData =  manipulateUpperMoldInsertdata(SimPGMDataProviderService);
		d3.selectAll('#globalSVG .upperMoldInsert').remove();
		drawUpperMoldInsert();
		if(document.getElementById('curveParametersID').style.fill != "red"){
			SimPGMDataProviderService.curveDataCounter = 0;
		}
		d3.selectAll('#globalSVG .curveParametersClass').remove();
		drawCurveParameters();
		 
		 $('#globalSVG .upperMoldInsert').on('click',function () {
	         $scope.upperMoldInsertInputShow = !$scope.upperMoldInsertInputShow;
	         $scope.$apply();
	         if($scope.upperMoldInsertInputShow){
				 d3.selectAll('#globalSVG .upperMoldInsert #upperMoldOriginalInsert').style("fill" , "red"); 
				 d3.selectAll('#globalSVG .upperMoldInsert #upperMoldMirrorInsert').style("fill" , "red"); 
			 }	 
			 else{
				 d3.selectAll('#globalSVG .upperMoldInsert #upperMoldOriginalInsert').style("fill" , "url(#palegradient)"); 
				 d3.selectAll('#globalSVG .upperMoldInsert #upperMoldMirrorInsert').style("fill" , "url(#mirrorPalegradient)"); 
			 }
	     });
		 
		 $('#globalSVG .curveParametersClass').on('click',function () {
			$scope.upperMoldCurveShow = !$scope.upperMoldCurveShow;
			$scope.$apply();
			if($scope.upperMoldCurveShow){
				d3.selectAll('#globalSVG .curveParametersClass #curveParametersID').style("fill" , "red"); 
				d3.selectAll('#globalSVG .curveParametersClass #curveParametersMirrorID').style("fill" , "red"); 
			}	 
			else{
				d3.selectAll('#globalSVG .curveParametersClass #curveParametersID').style("fill" , "yellow"); 
				d3.selectAll('#globalSVG .curveParametersClass #curveParametersMirrorID').style("fill" , "yellow"); 
			}
        	 
		});
	 });
	
	 
	function drawCurveParameters(){
		console.log('drawCurveParameters');
		curveParameters = svgContainer.append("g").attr("class","curveParametersClass")
		        .selectAll("polyline")
		        .data([curveParameterData])
		        .enter().append("polyline")
		        .attr("id","curveParametersID")
		        .attr("points",function(d) {
		        	return d.map(function(d) { return [scaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
		        .attr("stroke","black")
		        .attr("stroke-width",2)
				.style("fill","yellow");
				
		curveMirrorParameters = svgContainer.append("g").attr("class","curveParametersClass")
		        .selectAll("polyline")
		        .data([curveParameterData])
		        .enter().append("polyline")
		        .attr("id","curveParametersMirrorID")
		        .attr("points",function(d) {
		        	return d.map(function(d) { return [mirrorScaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
		        .attr("stroke","black")
		        .attr("stroke-width",2)
				.style("fill","yellow"); 	

		if(SimPGMDataProviderService.curveDataCounter == 0){
			 curveParameters.style("fill","yellow");
			 curveMirrorParameters.style("fill","yellow");
			 SimPGMDataProviderService.curveDataCounter += 1;
		 }else {
			 curveParameters.style("fill","red");
			 curveMirrorParameters.style("fill","red");
		 }
	 }
	 
	drawCurveParameters(); 
	
	 $('#globalSVG .curveParametersClass').on('click',function () {
		 $scope.upperMoldCurveShow = !$scope.upperMoldCurveShow;
		 $scope.$apply();
		 // if($scope.upperMoldCurveShow){
			 // d3.selectAll('#globalSVG .curveParametersClass #curveParametersID').style("fill" , "red"); 
			 // d3.selectAll('#globalSVG .curveParametersClass #curveParametersMirrorID').style("fill" , "red"); 
		 // }	 
		 // else{
			 // d3.selectAll('#globalSVG .curveParametersClass #curveParametersID').style("fill" , "yellow"); 
			 // d3.selectAll('#globalSVG .curveParametersClass #curveParametersMirrorID').style("fill" , "yellow"); 
		 // }
        	 
	 });
	 
	$scope.$on ('handleUpperMoldCurveDataBroadcast',function (){
		console.log('handlingUpperMoldCurveBroadcast');
		curveParameterData = manipulatecurveParameterData(SimPGMDataProviderService);
		upperMoldInsertData = manipulateUpperMoldInsertdata(SimPGMDataProviderService);
		// if the uppermold insert is already selected then we ensure that its color is red otherwise the color is palegradient
		if(document.getElementById('upperMoldOriginalInsert').style.fill != "red"){
			SimPGMDataProviderService.upperMoldInsertCounter = 0;
		}
		d3.selectAll('#globalSVG .upperMoldInsert').remove();
		drawUpperMoldInsert();
		
		
		d3.selectAll('#globalSVG .curveParametersClass').remove();
		drawCurveParameters();
		
		 $('#globalSVG .upperMoldInsert').on('click',function () {
			 $scope.upperMoldInsertInputShow = !$scope.upperMoldInsertInputShow;
			 $scope.$apply();
			 // i need this otherwise after several click color does not show in proper order 
			 if($scope.upperMoldInsertInputShow){
				 d3.selectAll('#globalSVG .upperMoldInsert #upperMoldOriginalInsert').style("fill" , "red"); 
				 d3.selectAll('#globalSVG .upperMoldInsert #upperMoldMirrorInsert').style("fill" , "red"); 
			 }	 
			 else{
				 d3.selectAll('#globalSVG .upperMoldInsert #upperMoldOriginalInsert').style("fill" , "url(#palegradient)"); 
				 d3.selectAll('#globalSVG .upperMoldInsert #upperMoldMirrorInsert').style("fill" , "url(#mirrorPalegradient)"); 
			 }
		});
		
		 $('#globalSVG .curveParametersClass').on('click',function () {
			 $scope.upperMoldCurveShow = !$scope.upperMoldCurveShow;
			 $scope.$apply();
			 if($scope.upperMoldCurveShow){
				 d3.selectAll('#globalSVG .curveParametersClass #curveParametersID').style("fill" , "red"); 
				 d3.selectAll('#globalSVG .curveParametersClass #curveParametersMirrorID').style("fill" , "red"); 
			 }	 
			 else{
				 d3.selectAll('#globalSVG .curveParametersClass #curveParametersID').style("fill" , "yellow"); 
				 d3.selectAll('#globalSVG .curveParametersClass #curveParametersMirrorID').style("fill" , "yellow"); 
			 }
		 });
 });
	 
	function drawCircle(){
		var drawCircle = svgContainer
			.selectAll("circle")
			.data(circleData)
			.enter()
			.append("circle").attr("id","circle1")
			.attr("cx",function(d) {return scaleX(d.x_axis);})
			.attr("cy",function(d) {return circleScaleY(d.y_axis);})
			.attr("r",function(d) {return d.radius;})
			.attr("fill","green")
			.style("height","100px");
			
		if(SimPGMDataProviderService.circleCounter == 0) {
			drawCircle.style("fill", "green")
			SimPGMDataProviderService.circleCounter += 1;
		}	
		else
			drawCircle.style("fill", "red")
	} 

	drawCircle();
	 $('#globalSVG #circle1').on('click',function () {
		 $scope.circleInputShow = !$scope.circleInputShow;
		 $scope.$apply();
		 if($scope.circleInputShow)
			 d3.selectAll('#globalSVG #circle1').style("fill" , "red"); 
		 else 
			 d3.selectAll('#globalSVG #circle1').style("fill" , function(d) {return d.color;});  
			 
	 });
	 
	 $scope.$on ('handlecircleDataBroadcast',function (){
		 circleData = SimPGMDataProviderService.circleData;
		 d3.selectAll('#globalSVG #circle1').remove();
		 drawCircle();
		 $('#globalSVG #circle1').on('click',function () {
			 $scope.circleInputShow = !$scope.circleInputShow;
			 $scope.$apply();
			 if($scope.circleInputShow)
				 d3.selectAll('#globalSVG #circle1').style("fill" , "red"); 
			 else 
				 d3.selectAll('#globalSVG #circle1').style("fill" , function(d) {return d.color;});  
				 
		 });
	 });
	
	function drawLowerMoldDie(){
		var lowerMoldOriginalDie = svgContainer.append("g").attr("class","lowerMoldDie")
			.attr("transform","translate(" + 0 + "," + 45 +")")
			.selectAll("polygon")
		    .data([lowerMoldDieData])
		    .enter().append("polygon")
		    .attr("class","LMDieDraw")
		    .attr("points",function(d) {
		    	return d.map(function(d) { return [scaleX(d.x),mirrorScaleY(d.y)].join(","); }).join(" ");})
		    .attr("stroke","black")
		    .attr("stroke-width",2);
		
		lowerMoldMirrorDie = svgContainer.append("g").attr("class","lowerMoldDie")
			.attr("transform","translate(" + 0 + "," + 45 +")")
			.selectAll("polygon")
			.data([lowerMoldDieData])
			.enter().append("polygon")
			.attr("class","LMDieDraw")
			.attr("points",function(d) {
				return d.map(function(d) { return [mirrorScaleX(d.x),mirrorScaleY(d.y)].join(","); }).join(" ");})
			.attr("stroke","black")
			.attr("stroke-width",2);
		
		if(SimPGMDataProviderService.lowerMoldDieCounter == 0){
			lowerMoldOriginalDie.style("fill","url(#ashGradient)");
			lowerMoldMirrorDie.style("fill","url(#ashGradient)");
			SimPGMDataProviderService.lowerMoldDieCounter += 1;
		 }else {
			 lowerMoldOriginalDie.style("fill","´red");
			 lowerMoldMirrorDie.style("fill","red");
		 }	
	}
	drawLowerMoldDie();
	
    $('#globalSVG .lowerMoldDie').on('click',function () {
		console.log('lowerMoldDie clicked');
		$scope.lowerMoldDieInputShow = !$scope.lowerMoldDieInputShow;
		$scope.$apply();
		if($scope.lowerMoldDieInputShow)
       	 	d3.selectAll('#globalSVG .lowerMoldDie .LMDieDraw').style("fill" , "red");
		else 
       	 	d3.selectAll('#globalSVG .lowerMoldDie .LMDieDraw').style("fill" , "url(#ashGradient)"); 
	});
		          
	 
	 $scope.$on ('handleLowerMoldDieDataBroadcast',function (){
		lowerMoldDieData = manipulateLowerMoldDieData(SimPGMDataProviderService);
		d3.selectAll('#globalSVG .lowerMoldDie').remove();
		drawLowerMoldDie();
		 
		$('#globalSVG .lowerMoldDie').on('click',function () {
			$scope.lowerMoldDieInputShow = !$scope.lowerMoldDieInputShow;
			$scope.$apply();
			if($scope.upperMoldDieInputShow)
	        	 d3.selectAll('#globalSVG .lowerMoldDie .LMDieDraw').style("fill" , "red");
			else 
	        	 d3.selectAll('#globalSVG .lowerMoldDie .LMDieDraw').style("fill" , "url(#ashGradient)"); 
		});
	 });
	 
	 var lowerMoldInsertData = manipulateLowerMoldInsertData(SimPGMDataProviderService);
	 function drawLowerMoldInsert(){
		var lowerMoldOriginalInsert = svgContainer.append("g").attr("class","lowerMoldInsert")
				.attr("transform","translate(" + 0 + "," + 45 +")")
		        .selectAll("polyline")
		        .data([lowerMoldInsertData])
		        .enter().append("polyline")
		        .attr("id","lowerMoldOriginalInsert")
		        .attr("points",function(d) {
		        	return d.map(function(d) { return [scaleX(d.x),mirrorScaleY(d.y)].join(","); }).join(" ");})
		        .attr("stroke","black")
		        .attr("fill","url(#palegradient)")
		        .attr("stroke-width",2);
				
		var lowerMoldMirrorInsert = svgContainer.append("g").attr("class","lowerMoldInsert")
				.attr("transform","translate(" + 0 + "," + 45 +")")
		        .selectAll("polyline")
		        .data([lowerMoldInsertData])
		        .enter().append("polyline")
		        .attr("id","lowerMoldMirrorInsert")
		        .attr("points",function(d) {
		        	return d.map(function(d) { return [mirrorScaleX(d.x),mirrorScaleY(d.y)].join(","); }).join(" ");})
		        .attr("stroke","black")
		        .attr("fill","url(#mirrorPalegradient)")
		        .attr("stroke-width",2); 
		
		 if(SimPGMDataProviderService.lowerMoldInsertCounter == 0){
			 lowerMoldOriginalInsert.style("fill","url(#palegradient)");
			 lowerMoldMirrorInsert.style("fill","url(#mirrorPalegradient)");
			 SimPGMDataProviderService.lowerMoldInsertCounter += 1;
		 }else {
			 lowerMoldOriginalInsert.style("fill","red");
			 lowerMoldMirrorInsert.style("fill","red");
		 }
	 }
	drawLowerMoldInsert();
	 
	 $('#globalSVG .lowerMoldInsert').on('click',function () {
		$scope.lowerMoldInsertInputShow = !$scope.lowerMoldInsertInputShow;
		$scope.$apply();
		if($scope.lowerMoldInsertInputShow){
			 d3.selectAll('#globalSVG .lowerMoldInsert #lowerMoldOriginalInsert').style("fill" , "red"); 
			 d3.selectAll('#globalSVG .lowerMoldInsert #lowerMoldMirrorInsert').style("fill" , "red"); 
		 }	 
		 else{
			 d3.selectAll('#globalSVG .lowerMoldInsert #lowerMoldOriginalInsert').style("fill" , "url(#palegradient)"); 
			 d3.selectAll('#globalSVG .lowerMoldInsert #lowerMoldMirrorInsert').style("fill" , "url(#mirrorPalegradient)"); 
		 }
	});
	
	$scope.$on ('handleLowerMoldInsertDataBroadcast',function (){
		lowerMoldInsertData =  manipulateLowerMoldInsertData(SimPGMDataProviderService);
		d3.selectAll('#globalSVG .lowerMoldInsert').remove();
		drawLowerMoldInsert();
		 
		 $('#globalSVG .lowerMoldInsert').on('click',function () {
	         $scope.lowerMoldInsertInputShow = !$scope.lowerMoldInsertInputShow;
	         $scope.$apply();
	     	if($scope.lowerMoldInsertInputShow){
				 d3.selectAll('#globalSVG .lowerMoldInsert #lowerMoldOriginalInsert').style("fill" , "red"); 
				 d3.selectAll('#globalSVG .lowerMoldInsert #lowerMoldMirrorInsert').style("fill" , "red"); 
			 }	 
			 else{
				 d3.selectAll('#globalSVG .lowerMoldInsert #lowerMoldOriginalInsert').style("fill" , "url(#palegradient)"); 
				 d3.selectAll('#globalSVG .lowerMoldInsert #lowerMoldMirrorInsert').style("fill" , "url(#mirrorPalegradient)"); 
			 }
	     });
	 });
	}	
	return {
		link : link
	}
})

