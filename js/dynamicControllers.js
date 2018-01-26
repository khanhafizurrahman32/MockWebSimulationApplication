/**
 *
 */
var myModule = angular.module("mySimPGMWebApp",[]);


myModule.controller('upperMoldDieInputController',['$scope','SimPGMDataProviderService', function($scope,SimPGMDataProviderService){

    $scope.$watch('upperMoldDieDataC', function(data){
        console.log(data)
        SimPGMDataProviderService.prepForMoldDataBroadcast('upperMoldDieData',data);
    },true);

}]);


myModule.controller('upperMoldInsertInputController',['$scope','SimPGMDataProviderService', function($scope,SimPGMDataProviderService){

    $scope.$watch('upperMoldInsertDataC', function(data,oldData){
        for(var key in data){
            for(var propertyName in data){
                if(data.hasOwnProperty(propertyName) && oldData.hasOwnProperty(propertyName)){
                    if (data[propertyName] !== oldData[propertyName]){
                        SimPGMDataProviderService.setChangePropertyName(propertyName);
                    }
                }
            }
        }
        SimPGMDataProviderService.prepForMoldDataBroadcast('upperMoldInsertData',data);
    },true);

    $scope.multiplyupperCurveInInsertParameterbyMinus1 = function () {

        $scope.upperMoldInsertDataC.R_surf_Mold = -1*$scope.upperMoldInsertDataC.R_surf_Mold;
        $scope.upperMoldInsertDataC.A2_surf_Mold = -1*$scope.upperMoldInsertDataC.A2_surf_Mold;
        $scope.upperMoldInsertDataC.A4_surf_Mold = -1*$scope.upperMoldInsertDataC.A4_surf_Mold;
        $scope.upperMoldInsertDataC.A6_surf_Mold = -1*$scope.upperMoldInsertDataC.A6_surf_Mold;
        $scope.upperMoldInsertDataC.A8_surf_Mold = -1*$scope.upperMoldInsertDataC.A8_surf_Mold;
        $scope.upperMoldInsertDataC.A10_surf_Mold = -1*$scope.upperMoldInsertDataC.A10_surf_Mold;
        $scope.upperMoldInsertDataC.A12_surf_Mold = -1*$scope.upperMoldInsertDataC.A12_surf_Mold;
        $scope.upperMoldInsertDataC.A14_surf_Mold = -1*$scope.upperMoldInsertDataC.A14_surf_Mold;
        $scope.upperMoldInsertDataC.A16_surf_Mold = -1*$scope.upperMoldInsertDataC.A16_surf_Mold;
        $scope.upperMoldInsertDataC.A18_surf_Mold = -1*$scope.upperMoldInsertDataC.A18_surf_Mold;
        $scope.upperMoldInsertDataC.A20_surf_Mold = -1*$scope.upperMoldInsertDataC.A20_surf_Mold;
    };

}]);

myModule.controller('upperMoldCurveController',['$scope','SimPGMDataProviderService', function($scope, SimPGMDataProviderService){

    $scope.$watch('upperMoldCurveDataC', function(data) {
        SimPGMDataProviderService.prepForMoldDataBroadcast('upperMoldCurveData', data);
    }, true);

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

}]);
myModule.controller('circleInputController',['$scope','SimPGMDataProviderService', function($scope,SimPGMDataProviderService){

    $scope.circleDataC = SimPGMDataProviderService.circleData();
    $scope.circleScaleY;
    $scope.$watch('circleDataC', function(data,oldValue){
        data[0].y_axis = - (data[0].radius);
        console.log(data);
        // var differenceInCircularRadius = data[0].radius - oldValue[0].radius;
        //
        // // - because of the drawing y axis is invert ... plus moves to down and - moves to up
        // if(differenceInCircularRadius != 0 ){
        //
        //     data[0].y_axis = data[0].y_axis - differenceInCircularRadius;
        //
        // }
        SimPGMDataProviderService.prepForMoldDataBroadcast('circleData',data,oldValue,'circle');
    },true);

}]);

myModule.controller('lowerMoldDieInputController',['$scope','SimPGMDataProviderService', function($scope,SimPGMDataProviderService){

    $scope.$watch('lowerMoldDieDataC', function(data){
        SimPGMDataProviderService.prepForMoldDataBroadcast('lowerMoldDieData',data);
    },true);

}]);

myModule.controller('lowerMoldInsertInputController',['$scope','SimPGMDataProviderService', function($scope,SimPGMDataProviderService){

    $scope.$watch('lowerMoldInsertDataC', function(data,oldData){
        for(var key in data){
            for(var propertyName in data){
                if(data.hasOwnProperty(propertyName) && oldData.hasOwnProperty(propertyName)){
                    if (data[propertyName] !== oldData[propertyName]){
                        SimPGMDataProviderService.setChangePropertyName(propertyName);
                        //console.log(propertyName);
                        //data['changedTextBoxName'] = propertyName;
                    }
                }
            }
        }
        SimPGMDataProviderService.prepForMoldDataBroadcast('lowerMoldInsertData',data,oldData,'lowerMoldInsertInputController');
    },true);

    $scope.multiplyLowerCurveInInsertParameterbyMinus1 = function () {

        $scope.lowerMoldInsertDataC.R_surf_Mold = -1*$scope.lowerMoldInsertDataC.R_surf_Mold;
        $scope.lowerMoldInsertDataC.A2_surf_Mold = -1*$scope.lowerMoldInsertDataC.A2_surf_Mold;
        $scope.lowerMoldInsertDataC.A4_surf_Mold = -1*$scope.lowerMoldInsertDataC.A4_surf_Mold;
        $scope.lowerMoldInsertDataC.A6_surf_Mold = -1*$scope.lowerMoldInsertDataC.A6_surf_Mold;
        $scope.lowerMoldInsertDataC.A8_surf_Mold = -1*$scope.lowerMoldInsertDataC.A8_surf_Mold;
        $scope.lowerMoldInsertDataC.A10_surf_Mold = -1*$scope.lowerMoldInsertDataC.A10_surf_Mold;
        $scope.lowerMoldInsertDataC.A12_surf_Mold = -1*$scope.lowerMoldInsertDataC.A12_surf_Mold;
        $scope.lowerMoldInsertDataC.A14_surf_Mold = -1*$scope.lowerMoldInsertDataC.A14_surf_Mold;
        $scope.lowerMoldInsertDataC.A16_surf_Mold = -1*$scope.lowerMoldInsertDataC.A16_surf_Mold;
        $scope.lowerMoldInsertDataC.A18_surf_Mold = -1*$scope.lowerMoldInsertDataC.A18_surf_Mold;
        $scope.lowerMoldInsertDataC.A20_surf_Mold = -1*$scope.lowerMoldInsertDataC.A20_surf_Mold;
    };
}]);

myModule.controller('lowerMoldCurveController',['$scope','SimPGMDataProviderService', function($scope, SimPGMDataProviderService){

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

}]);