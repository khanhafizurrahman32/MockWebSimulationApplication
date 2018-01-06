/**
 * 
 */

myModule.controller('ControllerOne',['$scope', function ($scope ) {
	
}])

myModule.factory('SimPGMDataProviderService',['$rootScope',function($rootScope){
	var sharedValueService = {};
	counterInitialisation(sharedValueService);
	dataInitialisationForEachPortion(sharedValueService);										  
	sharedValueService.nameOfbroadcast = '';
	
	sharedValueService.prepForMoldDataBroadcast = function (nameOfData, currentData){
		console.log('simpgm ' +nameOfData);
		this.nameOfbroadcast = nameOfData +  'Broadcast';
		switch(nameOfData){
			case "upperMoldDieData" : this.upperMoldDieData = currentData.slice();
									  $rootScope.$broadcast('handleUpperMoldDieDataBroadcast'); break;
			
			case "upperMoldInsertData" : this.upperMoldInsertData = currentData.slice();
									  $rootScope.$broadcast('handleUpperMoldInsertDataBroadcast'); break;
									  
			case "upperMoldCurveData" : this.upperMoldCurveData = currentData.slice();
									  $rootScope.$broadcast('handleUpperMoldCurveDataBroadcast');break;
									  
			case "circleData" : this.circleData = currentData.slice();
									  $rootScope.$broadcast('handlecircleDataBroadcast'); break;	
									  
			case "lowerMoldDieData" : this.lowerMoldDieData = currentData.slice();
									  $rootScope.$broadcast('handleLowerMoldDieDataBroadcast'); break;
									  
			case "lowerMoldInsertData" : this.lowerMoldInsertData = currentData.slice();
									  $rootScope.$broadcast('handleLowerMoldInsertDataBroadcast'); break;
									  
		    case "lowerMoldCurveData" : this.lowerMoldCurveData = currentData.slice();
										$rootScope.$broadcast('handleLowerMoldCurveDataBroadcast');break;
		}
	}
	return sharedValueService;
}])

function counterInitialisation(sharedValueService) {
	sharedValueService.upperMoldDieCounter = 0;
	sharedValueService.upperMoldInsertCounter = 0;
	sharedValueService.lowerMoldDieCounter = 0;
	sharedValueService.lowerMoldInsertCounter = 0;
	sharedValueService.circleCounter = 0;
	sharedValueService.upperCurveDataCounter = 0;
	sharedValueService.lowerCurveDataCounter = 0;
}

function dataInitialisationForEachPortion(sharedValueService){
	sharedValueService.upperMoldDieData = [{"D_upp_Insert": 0.044,  "D_upp_Mold":0.064, "H_upp_Mold":0.015, "H_1_upp_Sleeve_1":0.04, "H_1_upp_Insert":0.004,
		"D_1_upp_Insert" : 0.036}];
	
	sharedValueService.upperMoldInsertData =  [{"D_upp_Insert": 0.044,  "D_upp_Mold":0.064, "H_upp_Mold":0.015, "H_1_upp_Sleeve_1":0.04, "H_1_upp_Insert":0.004,
		"D_1_upp_Insert" : 0.036}];
	
	sharedValueService.upperMoldCurveData = [{"D_surf_upp_Mold": 10.74, "R_surf_upp_Mold": -12.5, "K_surf_upp_Mold": -6.84734e-1, "A2_surf_upp_Mold": 0,
											  "A4_surf_upp_Mold": 7.0626e-4, "A6_surf_upp_Mold": -3.36564e-5, "A8_surf_upp_Mold": 1.27834e-6, "A10_surf_upp_Mold": -3.47264e-8,
											  "A12_surf_upp_Mold": 0, "A14_surf_upp_Mold": 0, "A16_surf_upp_Mold": 0, "A18_surf_upp_Mold":0, "A20_surf_upp_Mold": 0}];
											  
	sharedValueService.circleData =  [{"x_axis": 0.00001, "y_axis": 0.00000001 , "radius": 45}];
	
	sharedValueService.lowerMoldDieData = [{"D_upp_Insert": 0.044,  "D_upp_Mold":0.064, "H_upp_Mold":0.015, "H_1_upp_Sleeve_1":0.04, "H_1_upp_Insert":0.004,
		"D_1_upp_Insert" : 0.036}];
	
	sharedValueService.lowerMoldInsertData = [{"D_upp_Insert": 0.044,  "D_upp_Mold":0.064, "H_upp_Mold":0.015, "H_1_upp_Sleeve_1":0.04, "H_1_upp_Insert":0.004,
		"D_1_upp_Insert" : 0.036}];
	
	sharedValueService.lowerMoldCurveData = [{"D_surf_upp_Mold": 10.74, "R_surf_upp_Mold": -12.5, "K_surf_upp_Mold": -6.84734e-1, "A2_surf_upp_Mold": 0,
											  "A4_surf_upp_Mold": 7.0626e-4, "A6_surf_upp_Mold": -3.36564e-5, "A8_surf_upp_Mold": 1.27834e-6, "A10_surf_upp_Mold": -3.47264e-8,
											  "A12_surf_upp_Mold": 0, "A14_surf_upp_Mold": 0, "A16_surf_upp_Mold": 0, "A18_surf_upp_Mold":0, "A20_surf_upp_Mold": 0}];
}