/**
 * 
 */
<<<<<<< HEAD
var myModule = angular.module("mySimPGMWebApp",[]);


myModule.controller('upperMoldDieInputController',['$scope','SimPGMDataProviderService', function($scope,SimPGMDataProviderService){

=======


myModule.controller('upperMoldDieInputController',['$scope','SimPGMDataProviderService', function($scope,SimPGMDataProviderService){
	$scope.upperMoldDieDataC = SimPGMDataProviderService.upperMoldDieData;
	
>>>>>>> db2980f34217dae08fbeea6752fe7677a7c24690
	$scope.$watch('upperMoldDieDataC', function(data){
		SimPGMDataProviderService.prepForMoldDataBroadcast('upperMoldDieData',data);
	},true);

}]);


myModule.controller('upperMoldInsertInputController',['$scope','SimPGMDataProviderService', function($scope,SimPGMDataProviderService){
	
<<<<<<< HEAD
=======
	$scope.upperMoldInsertDataC = SimPGMDataProviderService.upperMoldInsertData;
	
>>>>>>> db2980f34217dae08fbeea6752fe7677a7c24690
		$scope.$watch('upperMoldInsertDataC', function(data){
			SimPGMDataProviderService.prepForMoldDataBroadcast('upperMoldInsertData',data);
		},true);

}]);

myModule.controller('upperMoldCurveController',['$scope','SimPGMDataProviderService', function($scope, SimPGMDataProviderService){
<<<<<<< HEAD
=======
	$scope.upperMoldCurveDataC = SimPGMDataProviderService.upperMoldCurveData;
>>>>>>> db2980f34217dae08fbeea6752fe7677a7c24690
	
	 $scope.$watch('upperMoldCurveDataC', function(data) {
		 SimPGMDataProviderService.prepForMoldDataBroadcast('upperMoldCurveData', data);
	 }, true);
<<<<<<< HEAD
	 
	 $scope.multiplyUpperCurveParameterbyMinus1 = function () {
		$scope.upperMoldCurveDataC.R_surf_Mold = -1*$scope.upperMoldCurveDataC.R_surf_Mold;
		$scope.upperMoldCurveDataC.A2_surf_Mold = -1*$scope.upperMoldCurveDataC.A2_surf_Mold;
		$scope.upperMoldCurveDataC.A4_surf_Mold = -1*$scope.upperMoldCurveDataC.A4_surf_Mold;
		$scope.upperMoldCurveDataC.A6_surf_Mold = -1*$scope.upperMoldCurveDataC.A6_surf_Mold;
		$scope.upperMoldCurveDataC.A8_surf_Mold = -1*$scope.upperMoldCurveDataC.A8_surf_Mold;
		$scope.upperMoldCurveDataC.A10_surf_Mold = -1*$scope.upperMoldCurveDataC.A10_surf_Mold;
		$scope.upperMoldCurveDataC.A12_surf_Mold = -1*$scope.upperMoldCurveDataC.A12_surf_Mold;
		$scope.upperMoldCurveDataC.A14_surf_Mold = -1*$scope.upperMoldCurveDataC.A14_surf_Mold;
		$scope.upperMoldCurveDataC.A16_surf_Mold = -1*$scope.upperMoldCurveDataC.A16_surf_Mold;
		$scope.upperMoldCurveDataC.A18_surf_Mold = -1*$scope.upperMoldCurveDataC.A18_surf_Mold;
		$scope.upperMoldCurveDataC.A20_surf_Mold = -1*$scope.upperMoldCurveDataC.A20_surf_Mold;
	 };
=======
>>>>>>> db2980f34217dae08fbeea6752fe7677a7c24690
	
}]);
myModule.controller('circleInputController',['$scope','SimPGMDataProviderService', function($scope,SimPGMDataProviderService){
	
<<<<<<< HEAD
	$scope.circleDataC = SimPGMDataProviderService.circleData();
	$scope.circleScaleY;
	$scope.testA = 5;
    $scope.$watch('circleDataC', function(data,oldValue){
		var differenceInCircularRadius = data[0].radius - oldValue[0].radius;

        // - because of the drawing y axis is invert ... plus moves to down and - moves to up
        if(differenceInCircularRadius != 0 ){

            // data[0].y_axis = $scope.circleScaleY.invert($scope.circleScaleY(data[0].y_axis) - differenceInCircularRadius);

		}
        // - because of the drawing y axis is invert ... plus moves to down and - moves to up
        SimPGMDataProviderService.prepForMoldDataBroadcast('circleData',data,oldValue);
    },true);
		
}]);

myModule.controller('lowerMoldDieInputController',['$scope','SimPGMDataProviderService', function($scope,SimPGMDataProviderService){

    $scope.$watch('lowerMoldDieDataC', function(data){
        SimPGMDataProviderService.prepForMoldDataBroadcast('lowerMoldDieData',data);
    },true);
=======
	$scope.circleDataC = SimPGMDataProviderService.circleData;
	
		$scope.$watch('circleDataC', function(data,oldValue){
			var differenceInCircularRadius = data[0].radius - oldValue[0].radius;
			if(differenceInCircularRadius != 0)
				// - because of the drawing y axis is invert ... plus moves to down and - moves to up 
				data[0].y_axis = circleScaleY.invert(circleScaleY(data[0].y_axis) - differenceInCircularRadius);
			
			SimPGMDataProviderService.prepForMoldDataBroadcast('circleData',data);
		},true);

}]);

myModule.controller('lowerMoldDieInputController',['$scope','SimPGMDataProviderService', function($scope,SimPGMDataProviderService){
	
	$scope.lowerMoldDieDataC = SimPGMDataProviderService.lowerMoldDieData;
	
		$scope.$watch('lowerMoldDieDataC', function(data){
			SimPGMDataProviderService.prepForMoldDataBroadcast('lowerMoldDieData',data);
		},true);
>>>>>>> db2980f34217dae08fbeea6752fe7677a7c24690

}]);

myModule.controller('lowerMoldInsertInputController',['$scope','SimPGMDataProviderService', function($scope,SimPGMDataProviderService){
	
<<<<<<< HEAD
    $scope.$watch('lowerMoldInsertDataC', function(data){

        SimPGMDataProviderService.prepForMoldDataBroadcast('lowerMoldInsertData',data);
    },true);
=======
	$scope.lowerMoldInsertDataC = SimPGMDataProviderService.lowerMoldInsertData;
	
		$scope.$watch('lowerMoldInsertDataC', function(data){
			SimPGMDataProviderService.prepForMoldDataBroadcast('lowerMoldInsertData',data);
		},true);
>>>>>>> db2980f34217dae08fbeea6752fe7677a7c24690

}]);

myModule.controller('lowerMoldCurveController',['$scope','SimPGMDataProviderService', function($scope, SimPGMDataProviderService){
<<<<<<< HEAD
	
	 $scope.$watch('lowerMoldCurveDataC', function(data) {
		 SimPGMDataProviderService.prepForMoldDataBroadcast('lowerMoldCurveData', data);
	 }, true);
	 
	 $scope.multiplyLowerCurveParameterbyMinus1 = function () {
		$scope.lowerMoldCurveDataC.R_surf_Mold = -1*$scope.lowerMoldCurveDataC.R_surf_Mold;
		$scope.lowerMoldCurveDataC.A2_surf_Mold = -1*$scope.lowerMoldCurveDataC.A2_surf_Mold;
		$scope.lowerMoldCurveDataC.A4_surf_Mold = -1*$scope.lowerMoldCurveDataC.A4_surf_Mold;
		$scope.lowerMoldCurveDataC.A6_surf_Mold = -1*$scope.lowerMoldCurveDataC.A6_surf_Mold;
		$scope.lowerMoldCurveDataC.A8_surf_Mold = -1*$scope.lowerMoldCurveDataC.A8_surf_Mold;
		$scope.lowerMoldCurveDataC.A10_surf_Mold = -1*$scope.lowerMoldCurveDataC.A10_surf_Mold;
		$scope.lowerMoldCurveDataC.A12_surf_Mold = -1*$scope.lowerMoldCurveDataC.A12_surf_Mold;
		$scope.lowerMoldCurveDataC.A14_surf_Mold = -1*$scope.lowerMoldCurveDataC.A14_surf_Mold;
		$scope.lowerMoldCurveDataC.A16_surf_Mold = -1*$scope.lowerMoldCurveDataC.A16_surf_Mold;
		$scope.lowerMoldCurveDataC.A18_surf_Mold = -1*$scope.lowerMoldCurveDataC.A18_surf_Mold;
		$scope.lowerMoldCurveDataC.A20_surf_Mold = -1*$scope.lowerMoldCurveDataC.A20_surf_Mold;
	 };
=======
	$scope.lowerMoldCurveDataC = SimPGMDataProviderService.lowerMoldCurveData;
	
	 $scope.$watch('lowerMoldCurveDataC', function(data) {
		 console.log('lowerMoldCurveDataC watched!!!');
		 SimPGMDataProviderService.prepForMoldDataBroadcast('lowerMoldCurveData', data);
	 }, true);
>>>>>>> db2980f34217dae08fbeea6752fe7677a7c24690
	
}]);