/**
 * 
 */

var myModule = angular.module("mySimPGMWebApp",[]);

var xVal50PointsArray = [];
var tempxVal50PointsArray = [];
var yVal50PointsArray = [];
var tempyVal50PointsArray = [];
var objectArray = [];
var objectArray2 = [];
var tempArrayforFiftyPoints = [];

var D_surf_upp_Mold		=	10.74;
var N_surf_upp_Mold		=	50 ;

var RF_surf_upp_Mold    =   0;
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
var D_upp_Sleeve_1      =   32      *1e-3;
var H_upp_Sleeve_1      =   15      *1e-3 ;  
var H_1_upp_Sleeve_1    =   4       *1e-3;   //#d
var D_upp_Mold		    =	64	*1e-3;   //#b
var H_upp_Mold		    =	15	*1e-3;   //#c 


//*** variable declaration of coordinates of the last point among 50
var x_RF_surf_upp_Mold = 0;
var y_RF_surf_upp_Mold = 0;

///*** previousCircleValue is for drawing a circle where bottom part is fixed
// var previousCircleValue = {};

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
function generatingCoordinates(D_surf_upp_Mold, R_surf_upp_Mold, K_surf_upp_Mold, A2_surf_upp_Mold, A4_surf_upp_Mold, A6_surf_upp_Mold,
								A8_surf_upp_Mold, A10_surf_upp_Mold, A12_surf_upp_Mold, A14_surf_upp_Mold, A16_surf_upp_Mold, A18_surf_upp_Mold,  A20_surf_upp_Mold ) {
// function generatingCoordinates() {
	tempxVal50PointsArray.length = 0;
	tempArrayforFiftyPoints.length = 0;
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
	    }
	   
	   var individualobject = {"x": (x_surf_1_upp_Mold)*1e-3, "y": y_surf_1_upp_Mold*1e-3};
	    if(i == 0){
	    	object1 = individualobject;
	    }
	   tempxVal50PointsArray.push(x_surf_1_upp_Mold*1e-3);
	   tempyVal50PointsArray.push(y_surf_1_upp_Mold*1e-3);
	   tempArrayforFiftyPoints.push(individualobject);    
	}
}

 // generatingCoordinates(D_surf_upp_Mold, R_surf_upp_Mold, K_surf_upp_Mold, A2_surf_upp_Mold, A4_surf_upp_Mold, A6_surf_upp_Mold,
								 // A8_surf_upp_Mold, A10_surf_upp_Mold, A12_surf_upp_Mold, A14_surf_upp_Mold, A16_surf_upp_Mold, A18_surf_upp_Mold,  A20_surf_upp_Mold );
// generatingCoordinates();

//*******************************************************************
//****************** find min & max value **********************
//*******************************************************************
xVal50PointsArray.push.apply(xVal50PointsArray,[x_RF_surf_upp_Mold,D_1_upp_Insert/2,D_upp_Mold/2,0]);
yVal50PointsArray.push.apply(yVal50PointsArray,[(y_RF_surf_upp_Mold-RF_surf_upp_Mold),
		                     (y_RF_surf_upp_Mold-RF_surf_upp_Mold-(H_upp_Mold-H_upp_Insert)),
		                     (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)]);

//*******************************************************************
//****************** scaleX & scaleY **********************
//*******************************************************************
var scaleX = d3.scale.linear()
.domain([Math.min.apply(null,xVal50PointsArray),Math.max.apply(null,xVal50PointsArray)])
.range([290,522]);


var scaleY = d3.scale.linear()
.domain([Math.min.apply(null,yVal50PointsArray),Math.max.apply(null,yVal50PointsArray)])
.range([305,50]);

var mirrorScaleX = d3.scale.linear()
.domain([Math.min.apply(null,xVal50PointsArray),Math.max.apply(null,xVal50PointsArray)])
.range([290,58]);

var circleScaleY = d3.scale.linear()
.domain([Math.min.apply(null,yVal50PointsArray),Math.max.apply(null,yVal50PointsArray)])
.range([355,111]);

var mirrorScaleY = d3.scale.linear()
.domain([Math.min.apply(null,yVal50PointsArray),Math.max.apply(null,yVal50PointsArray)])
.range([402,657]);
