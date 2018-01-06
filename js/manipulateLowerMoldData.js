function manipulateLowerMoldDieData(SimPGMDataProviderService){
	var L_M_D_D_upp_Insert = SimPGMDataProviderService.lowerMoldDieData[0].D_upp_Insert; 
	var L_M_D_D_upp_Mold = SimPGMDataProviderService.lowerMoldDieData[0].D_upp_Mold;
	var L_M_D_H_upp_Mold = SimPGMDataProviderService.lowerMoldDieData[0].H_upp_Mold;
	var L_M_D_H_1_upp_Sleeve_1 = SimPGMDataProviderService.upperMoldDieData[0].H_1_upp_Sleeve_1;
	var L_M_D_H_1_upp_Insert = SimPGMDataProviderService.lowerMoldDieData[0].H_1_upp_Insert;
	var L_M_D_D_1_upp_Insert = SimPGMDataProviderService.lowerMoldDieData[0].D_1_upp_Insert;
    
    //*******************************************************************
	  //*********************** point declaration *************************
	  //*******************************************************************
	
	point3 = {"x":L_M_D_D_1_upp_Insert/2, "y": y_RF_surf_upp_Mold-RF_surf_upp_Mold-(L_M_D_H_upp_Mold-H_upp_Insert)};
	point4 = {"x":L_M_D_D_upp_Mold/2, "y": y_RF_surf_upp_Mold-RF_surf_upp_Mold-(L_M_D_H_upp_Mold-H_upp_Insert)};
	point5 = {"x":L_M_D_D_upp_Mold/2, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)};
	point8 = {"x":L_M_D_D_upp_Insert/2, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)};
	point9 = {"x":L_M_D_D_upp_Insert/2, "y": ((y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)-L_M_D_H_1_upp_Insert)};
	point10 = {"x":L_M_D_D_1_upp_Insert/2, "y": ((y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)-L_M_D_H_1_upp_Insert)};
	
	 //*******************************************************************
	//****************** value remove from Arrays **********************
	//*******************************************************************
	  xVal50PointsArray.length = 0;
	  yVal50PointsArray.length = 0;
	  
	  xVal50PointsArray = tempxVal50PointsArray.slice();
	  xVal50PointsArray.push.apply(xVal50PointsArray,[x_RF_surf_upp_Mold,L_M_D_D_1_upp_Insert/2,L_M_D_D_upp_Mold/2,0]);
		  
	  yVal50PointsArray = tempyVal50PointsArray.slice();
	  yVal50PointsArray.push.apply(yVal50PointsArray,[(y_RF_surf_upp_Mold-RF_surf_upp_Mold),
      (y_RF_surf_upp_Mold-RF_surf_upp_Mold-(L_M_D_H_upp_Mold-H_upp_Insert)),
      (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)]);
	  
	  objectArray2.length = 0;
	  objectArray2.push(point3);
	  objectArray2.push(point4);
	  objectArray2.push(point5);
	  objectArray2.push(point8);
	  objectArray2.push(point9);
	  objectArray2.push(point10);
	  
	  return objectArray2;
}

function manipulateLowerMoldInsertData(SimPGMDataProviderService){
	var L_M_I_D_upp_Insert = SimPGMDataProviderService.lowerMoldInsertData[0].D_upp_Insert; 
	var L_M_I_D_upp_Mold = SimPGMDataProviderService.lowerMoldInsertData[0].D_upp_Mold;
	var L_M_I_H_upp_Mold = SimPGMDataProviderService.lowerMoldInsertData[0].H_upp_Mold;
	var L_M_I_H_1_upp_Sleeve_1 = SimPGMDataProviderService.lowerMoldInsertData[0].H_1_upp_Sleeve_1;
	var L_M_I_H_1_upp_Insert = SimPGMDataProviderService.lowerMoldInsertData[0].H_1_upp_Insert;
	var L_M_I_D_1_upp_Insert = SimPGMDataProviderService.lowerMoldInsertData[0].D_1_upp_Insert;
	
	point1 = {"x":x_RF_surf_upp_Mold, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold)};
	point2 = {"x":L_M_I_D_1_upp_Insert/2, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold)};
	point3 = {"x":L_M_I_D_1_upp_Insert/2, "y": y_RF_surf_upp_Mold-RF_surf_upp_Mold-(L_M_I_H_upp_Mold-H_upp_Insert)}; 
	point10 = {"x":L_M_I_D_1_upp_Insert/2, "y": ((y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)-L_M_I_H_1_upp_Insert)};
	point9 = {"x":L_M_I_D_upp_Insert/2, "y": ((y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)-L_M_I_H_1_upp_Insert)};
	point8 = {"x":L_M_I_D_upp_Insert/2, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)};
	point6 = {"x":0, "y": (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)};
	
	xVal50PointsArray.length = 0;
	yVal50PointsArray.length = 0;
	
	xVal50PointsArray = tempxVal50PointsArray.slice();
	xVal50PointsArray.push.apply(xVal50PointsArray,[x_RF_surf_upp_Mold,L_M_I_D_1_upp_Insert/2,L_M_I_D_upp_Mold/2,0]);
	
	yVal50PointsArray = tempyVal50PointsArray.slice();
	yVal50PointsArray.push.apply(yVal50PointsArray,[(y_RF_surf_upp_Mold-RF_surf_upp_Mold),
    (y_RF_surf_upp_Mold-RF_surf_upp_Mold-(L_M_I_H_upp_Mold-H_upp_Insert)),
    (y_RF_surf_upp_Mold-RF_surf_upp_Mold+H_upp_Insert)]);
	
	objectArray.length = 0;
	objectArray = tempArrayforFiftyPoints.slice();
	objectArray.push(point1);
	objectArray.push(point2);
	objectArray.push(point3);
	objectArray.push(point10);
	objectArray.push(point9);
	objectArray.push(point8);
	objectArray.push(point6);
	
	return objectArray;
}

function manipulateLowerCurveParameterData(SimPGMDataProviderService){
	var L_M_C_D_surf_upp_Mold = SimPGMDataProviderService.lowerMoldCurveData[0].D_surf_upp_Mold; 
	var L_M_C_R_surf_upp_Mold = SimPGMDataProviderService.lowerMoldCurveData[0].R_surf_upp_Mold; 
	var L_M_C_K_surf_upp_Mold = SimPGMDataProviderService.lowerMoldCurveData[0].K_surf_upp_Mold; 
	var L_M_C_A2_surf_upp_Mold = SimPGMDataProviderService.lowerMoldCurveData[0].A2_surf_upp_Mold; 
	var L_M_C_A4_surf_upp_Mold = SimPGMDataProviderService.lowerMoldCurveData[0].A4_surf_upp_Mold; 
	var L_M_C_A6_surf_upp_Mold = SimPGMDataProviderService.lowerMoldCurveData[0].A6_surf_upp_Mold; 
	var L_M_C_A8_surf_upp_Mold = SimPGMDataProviderService.lowerMoldCurveData[0].A8_surf_upp_Mold; 
	var L_M_C_A10_surf_upp_Mold = SimPGMDataProviderService.lowerMoldCurveData[0].A10_surf_upp_Mold; 
	var L_M_C_A12_surf_upp_Mold = SimPGMDataProviderService.lowerMoldCurveData[0].A12_surf_upp_Mold; 
	var L_M_C_A14_surf_upp_Mold = SimPGMDataProviderService.lowerMoldCurveData[0].A14_surf_upp_Mold; 
	var L_M_C_A16_surf_upp_Mold = SimPGMDataProviderService.lowerMoldCurveData[0].A16_surf_upp_Mold; 
	var L_M_C_A18_surf_upp_Mold = SimPGMDataProviderService.lowerMoldCurveData[0].A18_surf_upp_Mold; 
	var L_M_C_A20_surf_upp_Mold = SimPGMDataProviderService.lowerMoldCurveData[0].A20_surf_upp_Mold; 
	generatingCoordinates(L_M_C_D_surf_upp_Mold,L_M_C_R_surf_upp_Mold,L_M_C_K_surf_upp_Mold,L_M_C_A2_surf_upp_Mold,L_M_C_A4_surf_upp_Mold,
													L_M_C_A6_surf_upp_Mold,L_M_C_A8_surf_upp_Mold,L_M_C_A10_surf_upp_Mold,L_M_C_A12_surf_upp_Mold,L_M_C_A14_surf_upp_Mold,
													L_M_C_A16_surf_upp_Mold,L_M_C_A18_surf_upp_Mold,L_M_C_A20_surf_upp_Mold); 
	console.log(L_M_C_D_surf_upp_Mold);
	return tempArrayforFiftyPoints;
}