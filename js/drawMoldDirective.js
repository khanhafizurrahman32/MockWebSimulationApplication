/**
 *
 */

myModule.directive('drawCompleteMold',function (SimPGMDataProviderService){
	var link = function ($scope, $element, attrs){

        var defineSVGdrawPropertiesObject = defineSVGProperties();
        // .attr(width) or .attr(height) dile responsive thake na
        var svgContainer = d3.select($element[0]).append("svg")
            .attr("preserveAspectRatio","xMidYMid meet")
            .attr("viewBox",defineSVGdrawPropertiesObject.getViewBoxMinXpoint() + " " +
                            defineSVGdrawPropertiesObject.getViewBoxMinYpoint() + " " +
                            defineSVGdrawPropertiesObject.getViewBoxWidth() + " " +
                            defineSVGdrawPropertiesObject.getViewBoxHeight())
            .classed("svg-content-responsive",true).attr("id","globalSVG")
            .style("border", "1px solid black");

        defineGradientColorsforEachPart(svgContainer);

        var eachPolygon = new drawPolygons();
        var upperMoldDataC = new moldDataCreation();
        var upperMoldDataStructure = new defDataStr();
        var curvePointsData = new generatingCoordinates();
        var simPGMUpperMoldProperties = new moldPropertiesDef();
        simPGMUpperMoldProperties.settingProp(35*1e-3, 32*1e-3, 15*1e-3, 8*1e-3, 0, 32*1e-3, 15*1e-3, 4*1e-3, 64*1e-3, 15*1e-3);
        var createUpperMoldComponents = new createIndividualMold();
        var allPolygonHandleBroadcast = new afterAngularBroadcast ();
        var upperMD = new upperMoldDirective();
        var upperMB = new respondToUpperMold ();
        var lowerMD = new lowerMoldDirective();
        var lowerMB = new respondToLowerMold ();
        var scalingObj = new ScalingGangFunction();

        SimPGMDataProviderService.setUpperMoldCurveObject(32,-100,0,0,0,0,0,0,0,0,0,0,0);
        var simPGMUpperCurveData = SimPGMDataProviderService.getUpperMoldCurveObject();
        SimPGMDataProviderService.setUpperMoldInsertObject(0.044,0.064,0.015,0.04,0.015,0.004,0.036);
        var simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
        SimPGMDataProviderService.setUpperMoldDieObject(0.044,0.064,0.015,0.04,0.004,0.036);
        var simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();

        var drawWidthDiameter_D = 464;
        var drawwidthHeight_H = 607;


        var lowerMoldDataC = new moldDataCreation();
        var lowerMoldDataStructure = new defDataStr();
        var curveLowerPointsData = new generatingCoordinates();
        var simPGMLowerMoldProperties = new moldPropertiesDef();
        simPGMLowerMoldProperties.settingProp(35*1e-3, 32*1e-3, 15*1e-3, 8*1e-3, 0, 32*1e-3, 15*1e-3, 4*1e-3, 64*1e-3, 15*1e-3);
        var createLowerMoldComponents = new createIndividualMold();

        SimPGMDataProviderService.setLowerMoldInsertObject(0.044,0.064,0.015,0.04,0.015,0.004,0.036,32,-100,0,0,0,0,0,0,0,0,0,0,0);
        var simPGMLowerInsertData = SimPGMDataProviderService.getLowerMoldInsertObject();
        SimPGMDataProviderService.setLowerMoldDieObject(0.044,0.064,0.015,0.04,0.004,0.036);
        var simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
        SimPGMDataProviderService.setCircleData(0,.0768,.0069);//0.00000001
        var relativeDataForCircle = SimPGMDataProviderService.circleData();
        var widthDivisor = simPGMUpperDieData.D_Mold;
        var heightDivisor = simPGMUpperDieData.H_Mold + .001 + 2* relativeDataForCircle[0].radius + simPGMLowerDieData.H_Mold;
        var scalingFactor = scalingObj.scalingWidthNHeight(drawWidthDiameter_D,drawwidthHeight_H,widthDivisor,heightDivisor);
        lowerMD.configurationForLowerMold(createLowerMoldComponents,SimPGMDataProviderService, lowerMoldDataStructure, curveLowerPointsData, lowerMoldDataC, simPGMLowerMoldProperties, simPGMLowerInsertData, simPGMLowerDieData, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer);


        var afterScalingFactorRelativeDataforCircle = new ScalingGangFunction().multiplyingEachCirclePointWithScalingFactor(relativeDataForCircle,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H);
        var circleComponent = new polygonDefinition();
        var circleComponentProperties = {svgContainer : svgContainer,className : 'circleClass', idName : 'circleDrawid',polygonClassName : null,clickClassId : null, clickClassPolygonName : null, clickClassIdName: null, dataForDrawing: afterScalingFactorRelativeDataforCircle, scaleXPointsFunction: null,scaleYPointsFunction : null,counter : 0}
        circleComponent.polyComponent(circleComponentProperties);
        var circleComponentClick = new clickEventsToPolygon();
        circleComponentClick.clickToCircle(circleComponentProperties.idName,$scope);
        var totalDistancebetweenGroundtoUpperMold = scalingFactor * (simPGMUpperDieData.H_Mold + relativeDataForCircle[0].radius*2 + .001);


        upperMD.configurationForUpperMold(createUpperMoldComponents, SimPGMDataProviderService, upperMoldDataStructure, curvePointsData, simPGMUpperCurveData, upperMoldDataC, simPGMUpperMoldProperties, simPGMUpperInsertData, simPGMUpperDieData, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, defineSVGdrawPropertiesObject, totalDistancebetweenGroundtoUpperMold, eachPolygon, $scope, svgContainer);


        $scope.$on('handleLowerMoldDieDataBroadcast',function () {
            lowerMB.respondToLowerMoldDie(simPGMLowerDieData, SimPGMDataProviderService, createLowerMoldComponents, lowerMoldDataStructure, curveLowerPointsData, curvePointsData, lowerMoldDataC, simPGMLowerMoldProperties, drawWidthDiameter_D, drawwidthHeight_H,  eachPolygon, $scope, svgContainer, simPGMLowerInsertData, true );
        })

        $scope.$on('handleLowerMoldInsertDataBroadcast',function () {
           lowerMB.respondToLowerMoldInsert(simPGMLowerInsertData, SimPGMDataProviderService, createLowerMoldComponents, lowerMoldDataStructure, curvePointsData, lowerMoldDataC, simPGMLowerMoldProperties, curveLowerPointsData, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMLowerDieData);
        })

        $scope.$on ('handleLowerMoldCurveDataBroadcast',function (){
           // may be we dont need to capture it individually, backup in handlingBroadcast
        })

        $scope.$on('handlecircleDataBroadcast',function () {
            relativeDataForCircle = SimPGMDataProviderService.circleData();
            var circleColor = d3.select('#circleDrawid')[0][0].style.fill;
            d3.selectAll('#globalSVG #circleDrawid').remove();
        })

        $scope.$on('handleUpperMoldDieDataBroadcast',function () {
            upperMB.respondToUpperMoldDie(simPGMUpperDieData, SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curvePointsData, upperMoldDataC, simPGMUpperMoldProperties, eachPolygon, $scope, scalingFactor, relativeDataForCircle, defineSVGdrawPropertiesObject, drawWidthDiameter_D, drawwidthHeight_H, svgContainer, eachPolygon)
        })

        $scope.$on('handleUpperMoldInsertDataBroadcast',function () {
            upperMB.respondToLowerMoldInsert(SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curvePointsData, upperMoldDataC, simPGMUpperMoldProperties);
        })


        $scope.$on ('handleUpperMoldCurveDataBroadcast',function (){
            allPolygonHandleBroadcast.upperCurveDataBroadcast($scope,SimPGMDataProviderService,createUpperMoldComponents,eachPolygon,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,scaleXUpperFunction,scaleYUpperFunction,mirrorScaleXUpperFunction,svgContainer);
        })

    }

	return {
		link : link
	}
})





