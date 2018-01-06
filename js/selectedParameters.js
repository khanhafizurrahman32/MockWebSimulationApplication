/**
 * 
 */

myModule.directive('selectedParameters',['SimPGMDataProviderService',function(SimPGMDataProviderService){
	var controller = function ($scope){
		$scope.upperMoldDieData = SimPGMDataProviderService.upperMoldDieData;
		 $scope.$on ('handleUpperMoldDieDataBroadcast',function (){
			 $scope.upperMoldDieData = SimPGMDataProviderService.upperMoldDieData;
		 });
		 
		 $scope.upperMoldInsertData = SimPGMDataProviderService.upperMoldInsertData;
		 $scope.$on ('handleUpperMoldInsertDataBroadcast',function (){
			 $scope.upperMoldInsertData = SimPGMDataProviderService.upperMoldInsertData;
		 });
		 
		 $scope.lowerMoldDieData = SimPGMDataProviderService.lowerMoldDieData;
		 $scope.$on ('handleLowerMoldDieDataBroadcast',function (){
			 $scope.lowerMoldDieData = SimPGMDataProviderService.lowerMoldDieData;
		 });
		 
		 $scope.lowerMoldInsertData = SimPGMDataProviderService.lowerMoldInsertData;
		 $scope.$on ('handleLowerMoldInsertDataBroadcast',function (){
			 $scope.lowerMoldInsertData = SimPGMDataProviderService.lowerMoldInsertData;
		 });
	}
	return{
		restrict : 'E',
		templateUrl: 'html/selectedParameter.html',
		controller: controller
	};
}])