function defineGradientColorsforEachPart(svgContainer){
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
		
	var mirrorAshGradient = svgContainer.append("svg:defs")
		.append("svg:linearGradient")
		.attr("id", "mirrorAshGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "100%")
		.attr("y2", "100%")
		.attr("spreadMethod", "pad");
		
		mirrorAshGradient.append("svg:stop")
		.attr("offset", "0%")
		.attr("stop-color", "  #2c3e50")
		.attr("stop-opacity", 1);

		mirrorAshGradient.append("svg:stop")
		.attr("offset", "100%")
		.attr("stop-color", " #bdc3c7")
		.attr("stop-opacity", 1);
		
	 var palegradient = svgContainer.append("svg:defs")
		.append("svg:linearGradient")
		.attr("id", "palegradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "100%")
		.attr("y2", "0%")
		.attr("spreadMethod", "pad");
 
		palegradient.append("svg:stop")
		.attr("offset", "0%")
		.attr("stop-color", " #4AC29A")
		.attr("stop-opacity", 1);

		palegradient.append("svg:stop")
		.attr("offset", "100%")
		.attr("stop-color", " #BDFFF3")
		.attr("stop-opacity", 1);
	
	 var mirrorPalegradient = svgContainer.append("svg:defs")
 		.append("svg:linearGradient")
 		.attr("id", "mirrorPalegradient")
 		.attr("x1", "0%")
 		.attr("y1", "0%")
 		.attr("x2", "100%")
 		.attr("y2", "0%")
 		.attr("spreadMethod", "pad");
 
		mirrorPalegradient.append("svg:stop")
	 	.attr("offset", "0%")
	 	.attr("stop-color", " #BDFFF3")
	 	.attr("stop-opacity", 1);

		mirrorPalegradient.append("svg:stop")
	 	.attr("offset", "100%")
	 	.attr("stop-color", " #4AC29A ")
	 	.attr("stop-opacity", 1);
}