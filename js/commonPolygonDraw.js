// *upperMoldDie
// *upperMoldDieMirror
// *upperMoldInsert
// *upperMoldInsertMirror
// *upperMoldCurve
// *circleDraw
// *lowerMoldDie
// *lowerMoldDieMirror
// *lowerMoldInsert
// *lowerMoldInsertMirror
// *lowerMoldCurve

function drawDieandInsert(SimPGMDataProviderService,svgContainer,nameOfParts, relativeData,$scope){
	console.log('drawDieandInsert started where name of part is ' + nameOfParts);
	configurationForDrawing(SimPGMDataProviderService,svgContainer,nameOfParts, relativeData,$scope);
	console.log('drawDieandInsert ended!!!');
}

function configurationForDrawing(SimPGMDataProviderService,svgContainer,nameOfParts, relativeData,$scope){
	console.log('configurationForDrawing started!!!');
	var currentPartsDrawing = nameOfParts;
	var className = nameOfParts + 'class';	
	// className for both the parts including mirror or not will be same
	if(className.includes('Mirror'))
		className = className.replace('Mirror','');
	var idName = nameOfParts + 'id';
	var polygonClassName = nameOfParts + 'polygon';
	var currentCounter = CounterManipulation(nameOfParts,SimPGMDataProviderService);
	// need to provide different polygon draw for circle
	if(nameOfParts.includes('circle')){
		drawingMiddleOfThePolygon(SimPGMDataProviderService,svgContainer,relativeData,currentPartsDrawing,className,relativeData,idName,polygonClassName,currentCounter,nameOfParts);
		specificPartCircleEvents(idName,$scope);
	}else{
		drawingParts(SimPGMDataProviderService,svgContainer,relativeData,currentPartsDrawing,className,relativeData,idName,polygonClassName,currentCounter,nameOfParts);
		specificPartclickEvents(nameOfParts,className,polygonClassName,$scope,idName);
	}
	console.log('configurationForDrawing ended for name of parts' + nameOfParts);
}
function drawingMiddleOfThePolygon(SimPGMDataProviderService,svgContainer,relativeData,currentPartsDrawing,className,relativeData,idName,polygonClassName,currentCounter,nameOfParts){
	currentPartsDrawing = svgContainer
							.selectAll("circle")
							.data(relativeData)
							.enter()
							.append("circle")
							.attr("id", idName)
							.attr("cx", function(d) {return scaleX(d.x_axis);})
							.attr("cy", function(d) {return circleScaleY(d.y_axis);})
							.attr("r", function(d) {return d.radius;})
							.style("fill",function(){
								if(SimPGMDataProviderService.circleCounter == 0){
									SimPGMDataProviderService.circleCounter +=1;
									return "green";
								}else
									return "red";
							})
}
function drawingParts(SimPGMDataProviderService,svgContainer,relativeData,currentPartsDrawing,className,relativeData,idName,polygonClassName,currentCounter,nameOfParts) {
	console.log('drawingParts started!!!');
	currentPartsDrawing = svgContainer.append("g")
							.attr("class", className)
							.selectAll("polygon")
							.data([relativeData])
							.enter()
							.append("polyline")
							.attr("id",idName)
							.attr("class",polygonClassName)
							.attr("points",scalingDataforDrawing(relativeData,nameOfParts))
							.attr("stroke","black")
							.attr("stroke-width",2)
							.style("fill",fillingStyle(nameOfParts,SimPGMDataProviderService,currentCounter));
	
	console.log('drawingParts ended!!!');							
}

function CounterManipulation(nameOfParts,SimPGMDataProviderService) {
	console.log('CounterManipulation started!!!');
	var counter = 0;
	var nameofPartsForCounterManipulation = '';
	(nameOfParts.includes('Mirror')) ? nameofPartsForCounterManipulation = nameOfParts.replace('Mirror','') : nameofPartsForCounterManipulation = nameOfParts
	switch(nameofPartsForCounterManipulation) {
		case "upperMoldDie"    	  : counter = SimPGMDataProviderService.upperMoldDieCounter; break;
		case "upperMoldInsert"    : counter = SimPGMDataProviderService.upperMoldInsertCounter; break;
		case "upperMoldCurve"     : counter = SimPGMDataProviderService.upperCurveDataCounter; break;
		case "lowerMoldDie"    	  : counter = SimPGMDataProviderService.lowerMoldDieCounter; break;
		case "lowerMoldInsert"    : counter = SimPGMDataProviderService.lowerMoldInsertCounter; break;
		case "lowerMoldCurve"     : counter = SimPGMDataProviderService.lowerCurveDataCounter; break;
	}
	console.log('CounterManipulation ended with counter--  ' + counter);
	return counter;
}

function scalingDataforDrawing(d,nameOfParts){
	console.log('scalingDataforDrawing started with data ' + d);
	
	if((nameOfParts.includes("upper")) && (nameOfParts.includes("Mirror")))
		return d.map(function(d) { return [scaleX(d.x),scaleY(d.y)].join(","); }).join(" ");
	if(nameOfParts.includes("upper"))
		return d.map(function(d) { return [mirrorScaleX(d.x),scaleY(d.y)].join(","); }).join(" ");	
	if((nameOfParts.includes("lower")) && (nameOfParts.includes("Mirror")))
		return d.map(function(d) { return [scaleX(d.x),mirrorScaleY(d.y)].join(","); }).join(" ");
	if(nameOfParts.includes("lower"))
		return d.map(function(d) { return [mirrorScaleX(d.x),mirrorScaleY(d.y)].join(","); }).join(" ");	
	
	console.log('scalingDataforDrawing ended with data ' + d);
}
function fillingStyle(nameOfParts,SimPGMDataProviderService,currentCounter){
	console.log('fillingStyle started!!!');
	var color = "";
	if (nameOfParts.includes("Mirror")){
		incrementCounter(nameOfParts,SimPGMDataProviderService);
		color = mirrorPartsFillingStyle(nameOfParts,currentCounter,color);
	}
	else 
		color = originalPartsFillingStyle(nameOfParts,currentCounter,color);
	console.log('fillingStyle ended with color--  ' + color);
	return color;
}

function incrementCounter(nameOfParts,SimPGMDataProviderService){
	console.log('incrementCounter started where name of parts is ' + nameOfParts);
	switch(nameOfParts) {
		case "upperMoldDieMirror" : SimPGMDataProviderService.upperMoldDieCounter +=1; break;
		case "upperMoldInsertMirror" : SimPGMDataProviderService.upperMoldInsertCounter +=1; break;
		case "upperMoldCurveMirror" : SimPGMDataProviderService.upperCurveDataCounter +=1; break;
		case "lowerMoldDieMirror" : SimPGMDataProviderService.lowerMoldDieCounter +=1; break;
		case "lowerMoldInsertMirror" : SimPGMDataProviderService.lowerMoldInsertCounter +=1; break;
		case "lowerMoldCurveMirror" : SimPGMDataProviderService.lowerCurveDataCounter +=1; break;
	}
	console.log('incrementCounter ended for nameOfParts' + nameOfParts);
}

function originalPartsFillingStyle(nameOfParts,currentCounter,color){
	console.log('originalPartsFillingStyle started!!!');
	if (nameOfParts.includes("Die"))
		(currentCounter == 0) ? color = "url(#ashGradient)" : color = "red";
	if (nameOfParts.includes("Insert"))
		(currentCounter == 0) ? color = "url(#palegradient)" : color = "red";
	if (nameOfParts.includes("Curve"))
		(currentCounter == 0) ? color = "url(#palegradient)" : color = "red";
	console.log('originalPartsFillingStyle ended with color--  ' + color);
	return color;
}

function mirrorPartsFillingStyle(nameOfParts,currentCounter,color){
	console.log('mirrorPartsFillingStyle started!!!');
	if (nameOfParts.includes("Die"))
		(currentCounter == 0) ? color = "url(#mirrorAshGradient)" : color = "red";
	if (nameOfParts.includes("Insert"))
		(currentCounter == 0) ? color = "url(#mirrorPalegradient)" : color = "red";
	if (nameOfParts.includes("Curve"))
		(currentCounter == 0) ? color = "url(#mirrorPalegradient)" : color = "red";
	console.log('mirrorPartsFillingStyle ended with color--  ' + color);
	return color;
}	

function specificPartCircleEvents(idName,$scope){
	var clickClassId = '#globalSVG #'+idName;
	console.log(clickClassId);
	$(clickClassId).on('click', function (){
		console.log('clicked!!!');
		$scope.circleInputShow = !$scope.circleInputShow;
		$scope.$apply();
		($scope.circleInputShow) ? 	d3.selectAll(clickClassId).style("fill","red") :
									d3.selectAll(clickClassId).style("fill","green");
	});
}
function specificPartclickEvents(nameOfParts,className,polygonClassName,$scope,idName){
	console.log('specificPartclickEvents started with className ' + className + ' & id name ' + idName);	
	var clickClassName = '#globalSVG .'+className;
	var clickClassPolygonName = clickClassName + ' .' + polygonClassName;
	// got complicated if i do with the uniform class name: better to work with uniform polygon name.... 
	if(clickClassPolygonName.includes('Mirror')){
		var originalClass = clickClassPolygonName.replace('Mirror','');
		var mirrorClass = clickClassPolygonName;
	}else {
		var originalClass = clickClassPolygonName;
		var mirrorClass = [clickClassPolygonName.slice(0,(clickClassPolygonName.length-7)),"Mirror",clickClassPolygonName.slice((clickClassPolygonName.length-7),clickClassPolygonName.length)].join('');
	}
	var clickClassIdName = clickClassName + ' #' + idName; 
	$(clickClassIdName).on('click', function (){
		console.log('clicked!!!');
		var showornotInput = showHideInputShow(nameOfParts,$scope);			
		$scope.$apply();
		d3.selectAll(originalClass).style("fill", fillAfterClickEvents(showornotInput,nameOfParts));
		d3.selectAll(mirrorClass).style("fill", fillAfterClickEvents(showornotInput,nameOfParts));	
	});
	console.log('specificPartclickEvents ended!!!');
}

function showHideInputShow(nameOfParts,$scope){
	var nameOfPartsForShowHideInputShow = '';
	var inputFlagValue = false;
	(nameOfParts.includes('Mirror')) ? 	nameOfPartsForShowHideInputShow = nameOfParts.replace('Mirror','') :
										nameOfPartsForShowHideInputShow = nameOfParts;
	switch(nameOfPartsForShowHideInputShow) {
		case "upperMoldDie" : 
			$scope.upperMoldDieInputShow = !$scope.upperMoldDieInputShow;
			inputFlagValue = $scope.upperMoldDieInputShow;
			break;
		case "upperMoldInsert" : 
			$scope.upperMoldInsertInputShow = !$scope.upperMoldInsertInputShow;
			inputFlagValue = $scope.upperMoldInsertInputShow;
			break;
		case "upperMoldCurve" : 
			$scope.upperMoldCurveShow = !$scope.upperMoldCurveShow;
			inputFlagValue = $scope.upperMoldCurveShow;
			break;
		case "lowerMoldDie" : 
			$scope.lowerMoldDieInputShow = !$scope.lowerMoldDieInputShow;
			inputFlagValue = $scope.lowerMoldDieInputShow;
			break;
		case "lowerMoldInsert" : 
			$scope.lowerMoldInsertInputShow = !$scope.lowerMoldInsertInputShow;
			inputFlagValue = $scope.lowerMoldInsertInputShow;
			break;
		case "lowerMoldCurve" : 
			$scope.lowerMoldCurveShow = !$scope.lowerMoldCurveShow;
			inputFlagValue = $scope.lowerMoldCurveShow;
			break;
	}
	console.log('showHideInputShow ended with inputFlagValue--  ' + inputFlagValue);
	return inputFlagValue;
}

function fillAfterClickEvents(showornotInput,nameOfParts){
	console.log('fillAfterClickEvents with in with nameOfParts ' + nameOfParts);
	if(showornotInput){
		return "red";
	}
	else{
		if(nameOfParts.includes("Die"))
			if(nameOfParts.includes('Mirror'))
				return "url(#mirrorAshGradient)"
			else 
				return "url(#ashGradient)";
		if(nameOfParts.includes("Insert"))
			if(nameOfParts.includes('Mirror')) 
				return "url(#mirrorPalegradient)" 
			else
				return "url(#palegradient)";
			if(nameOfParts.includes("Curve"))
				if(nameOfParts.includes('Mirror')) 
					return "url(#mirrorPalegradient)" 
				else
					return "url(#palegradient)";		
	}
}