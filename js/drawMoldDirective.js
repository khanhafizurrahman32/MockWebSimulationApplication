/**

 *

 * 
2980f34217dae08fbeea6752fe7677a7c24690
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
        var createUpperMoldComponents = new createIndividualMold();
        var allPolygonHandleBroadcast = new afterAngularBroadcast ();

        SimPGMDataProviderService.setUpperMoldCurveObject(32,-100,0,0,0,0,0,0,0,0,0,0,0);
        var simPGMUpperCurveData = SimPGMDataProviderService.getUpperMoldCurveObject();
        SimPGMDataProviderService.setUpperMoldInsertObject(0.044,0.064,0.015,0.04,0.015,0.004,0.036);
        var simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
        SimPGMDataProviderService.setUpperMoldDieObject(0.044,0.064,0.015,0.04,0.004,0.036);
        var simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
        var drawWidthDiameter_D = 464;
        var drawwidthHeight_H = 607;
        var scalingFactor = new ScalingGangFunction().scalingWidthNHeight(drawWidthDiameter_D,drawwidthHeight_H);

        var lowerMoldDataC = new moldDataCreation();
        var lowerMoldDataStructure = new defDataStr();
        var curveLowerPointsData = new generatingCoordinates();
        var simPGMLowerMoldProperties = new moldPropertiesDef();
        var createLowerMoldComponents = new createIndividualMold();

        SimPGMDataProviderService.setLowerMoldCurveObject(32,-100,0,0,0,0,0,0,0,0,0,0,0);
        var simPGMLowerCurveData = SimPGMDataProviderService.getLowerMoldCurveObject();
        SimPGMDataProviderService.setLowerMoldInsertObject(0.044,0.064,0.015,0.04,0.015,0.004,0.036);
        var simPGMLowerInsertData = SimPGMDataProviderService.getLowerMoldInsertObject();
        SimPGMDataProviderService.setLowerMoldDieObject(0.044,0.064,0.015,0.04,0.004,0.036);
        var simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
        var relativeDataForLowerCurve = createLowerMoldComponents.createCurve(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,simPGMLowerCurveData);
        var relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData);
        var combinationofRelativeDataLowerForCurveNInsert = relativeDataForLowerInsert.concat(relativeDataForLowerCurve);

        var relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData);
        var afterScalingFactorRelativeDataForLowerDie = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerDie = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var afterScalingFactorRelativeDataForLowerInsertNCurveTogether = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieId','lowerMoldDiePolygon',afterScalingFactorRelativeDataForLowerDie,null,null,simPGMLowerDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieMirrorClass','lowerMoldDieMirrorId','lowerMoldDieMirrorPolygon',afterScalingFactorRelativeDataForMirrorLowerDie,null,null,simPGMLowerDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertId','lowerMoldInsertPolygon',afterScalingFactorRelativeDataForLowerInsertNCurveTogether,null,null,simPGMLowerInsertData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertMirrorClass','lowerMoldInsertMirrorId','lowerMoldInsertMirrorPolygon',afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether,null,null,simPGMLowerInsertData,null,$scope);


        SimPGMDataProviderService.setCircleData(0,.0768,.0069);//0.00000001
        var relativeDataForCircle = SimPGMDataProviderService.circleData();
        var afterScalingFactorRelativeDataforCircle = new ScalingGangFunction().multiplyingEachCirclePointWithScalingFactor(relativeDataForCircle,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H);
        var circleComponent = new polygonDefinition();
        var circleComponentProperties = {svgContainer : svgContainer,className : 'circleClass', idName : 'circleDrawid',polygonClassName : null,clickClassId : null, clickClassPolygonName : null, clickClassIdName: null, dataForDrawing: afterScalingFactorRelativeDataforCircle, scaleXPointsFunction: null,scaleYPointsFunction : null,counter : 0}
        circleComponent.polyComponent(circleComponentProperties);
        var circleComponentClick = new clickEventsToPolygon();
        var totalDistancebetweenGroundtoUpperMold = scalingFactor * (simPGMUpperDieData.H_Mold + relativeDataForCircle[0].radius*2 + .001);

        var relativeDataForUpperCurve = createUpperMoldComponents.createCurve(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,simPGMUpperCurveData);
        var relativeDataForUpperInsert = createUpperMoldComponents.createInsert(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperInsertData);
        var combinantionofRelativeDataForCurveNInsert = relativeDataForUpperInsert.concat(relativeDataForUpperCurve);
        var relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData);
        var afterScalingFactorRelativeDataForUpperInsertNCurveTogether = new ScalingGangFunction().multiplyingEachUpperPointWithScalingFactor(combinantionofRelativeDataForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether = new ScalingGangFunction().multiplyingEachUpperPointWithScalingFactor(combinantionofRelativeDataForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var afterScalingFactorRelativeDataForUpperDie = new ScalingGangFunction().multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorUpperDie = new ScalingGangFunction().multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var remainingSpaceforUpperMold = defineSVGdrawPropertiesObject.getViewBoxHeight() - totalDistancebetweenGroundtoUpperMold;
        var adjustRatioForUpperWithRest = remainingSpaceforUpperMold - Math.max.apply(Math, afterScalingFactorRelativeDataForUpperDie.map(function (currentObj) {
                return currentObj.y;
            }))

        var afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForUpperInsertNCurveTogether, adjustRatioForUpperWithRest);
        var afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether, adjustRatioForUpperWithRest);
        var afterAdjustHeightScalingFactorRelativeDataForUpperDie = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForUpperDie, adjustRatioForUpperWithRest);
        var afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForMirrorUpperDie, adjustRatioForUpperWithRest);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',afterAdjustHeightScalingFactorRelativeDataForUpperDie,null,null,simPGMUpperDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieMirrorId','upperMoldDieMirrorPolygon',afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie,null,null,simPGMUpperDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertId','upperMoldInsertPolygon',afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether,null,null,simPGMUpperInsertData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertMirrorId','upperMoldInsertMirrorPolygon',afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether,null,null,simPGMUpperInsertData,null,$scope);
        $scope.$on('handleLowerMoldDieDataBroadcast',function () {
            simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
            relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData);
            var diePolygonColor = d3.select('#lowerMoldDieId')[0][0].style.fill;
            var mirrorDiePolygonColor = d3.select('#lowerMoldDieMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldDieClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieId','lowerMoldDiePolygon',relativeDataForLowerDie,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerDieData,diePolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieMirrorId','lowerMoldDieMirrorPolygon',relativeDataForLowerDie,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerDieData,mirrorDiePolygonColor,$scope);
        })
        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertId','lowerMoldInsertPolygon',relativeDataForLowerInsert,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,null,$scope);
        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertMirrorId','lowerMoldInsertMirrorPolygon',relativeDataForLowerInsert,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,null,$scope);
        $scope.$on('handleLowerMoldInsertDataBroadcast',function () {
            simPGMLowerInsertData = SimPGMDataProviderService.getLowerMoldInsertObject();
            relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData);
            var insertPolygonColor = d3.select('#lowerMoldInsertId')[0][0].style.fill;
            var mirrorInsertPolygonColor = d3.select('#lowerMoldInsertMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldInsertClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertId','lowerMoldInsertPolygon',relativeDataForLowerInsert,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,insertPolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertMirrorId','lowerMoldInsertMirrorPolygon',relativeDataForLowerInsert,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,mirrorInsertPolygonColor,$scope);
            var curvePolygonColor = d3.select('#lowerMoldCurveId')[0][0].style.fill;
            var mirrorCurvePolygonColor = d3.select('#lowerMoldCurveMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldCurveClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveId','lowerMoldCurvePolygon',relativeDataForLowerCurve,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,curvePolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveMirrorId','lowerMoldCurveMirrorPolygon',relativeDataForLowerCurve,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,mirrorCurvePolygonColor,$scope);
        })

        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveId','lowerMoldCurvePolygon',relativeDataForLowerCurve,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,null,$scope);
        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveMirrorId','lowerMoldCurveMirrorPolygon',relativeDataForLowerCurve,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,null,$scope);
        $scope.$on ('handleLowerMoldCurveDataBroadcast',function (){
            simPGMLowerCurveData = SimPGMDataProviderService.getLowerMoldCurveObject();
            relativeDataForLowerCurve = createLowerMoldComponents.createCurve(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,simPGMLowerCurveData);
            simPGMLowerInsertData = SimPGMDataProviderService.getLowerMoldInsertObject();
            relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData);
            simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
            relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData);
            var diePolygonColor = d3.select('#lowerMoldDieId')[0][0].style.fill;
            var mirrorDiePolygonColor = d3.select('#lowerMoldDieMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldDieClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieId','lowerMoldDiePolygon',relativeDataForLowerDie,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerDieData,diePolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieMirrorId','lowerMoldDieMirrorPolygon',relativeDataForLowerDie,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerDieData,mirrorDiePolygonColor,$scope);

            var insertPolygonColor = d3.select('#lowerMoldInsertId')[0][0].style.fill;
            var mirrorInsertPolygonColor = d3.select('#lowerMoldInsertMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldInsertClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertId','lowerMoldInsertPolygon',relativeDataForLowerInsert,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,insertPolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertMirrorId','lowerMoldInsertMirrorPolygon',relativeDataForLowerInsert,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,mirrorInsertPolygonColor,$scope);

            var curvePolygonColor = d3.select('#lowerMoldCurveId')[0][0].style.fill;
            var mirrorCurvePolygonColor = d3.select('#lowerMoldCurveMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldCurveClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveId','lowerMoldCurvePolygon',relativeDataForLowerCurve,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,curvePolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveMirrorId','lowerMoldCurveMirrorPolygon',relativeDataForLowerCurve,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,mirrorCurvePolygonColor,$scope);
        })

        $scope.$on('handlecircleDataBroadcast',function () {
            relativeDataForCircle = SimPGMDataProviderService.circleData();
            var circleColor = d3.select('#circleDrawid')[0][0].style.fill;
            d3.selectAll('#globalSVG #circleDrawid').remove();
        })



        $scope.$on('handleUpperMoldDieDataBroadcast',function () {
            simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
            relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData);
            var diePolygonColor = d3.select('#upperMoldDieId')[0][0].style.fill;
            var mirrorDiePolygonColor =d3.select('#upperMoldDieMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .upperMoldDieClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',relativeDataForUpperDie,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperDieData,diePolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieMirrorId','upperMoldDieMirrorPolygon',relativeDataForUpperDie,mirrorScaleXUpperFunction,scaleYUpperFunction,simPGMUpperDieData,mirrorDiePolygonColor,$scope);
        })

        $scope.$on('handleUpperMoldInsertDataBroadcast',function () {
            var simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
            for(var key in simPGMUpperInsertData){
                if(typeof (simPGMUpperInsertData[key])){
                    simPGMUpperInsertData[key] = parseFloat(simPGMUpperInsertData[key]);
                }
            }
            relativeDataForUpperInsert = createUpperMoldComponents.createInsert(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperInsertData);
            var insertPolygonColor = d3.select('#upperMoldInsertId')[0][0].style.fill;
            var mirrorInsertPolygonColor = d3.select('#upperMoldInsertMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .upperMoldInsertClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertId','upperMoldInsertPolygon',relativeDataForUpperInsert,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperInsertData,insertPolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertMirrorId','upperMoldInsertMirrorPolygon',relativeDataForUpperInsert,mirrorScaleXUpperFunction,scaleYUpperFunction,simPGMUpperInsertData,mirrorInsertPolygonColor,$scope);
            var curvePolygonColor = d3.select('#upperMoldCurveId')[0][0].style.fill;
            var mirrorCurvePolygonColor = d3.select('#upperMoldCurveMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .upperMoldCurveClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'upperMoldCurveClass','upperMoldCurveId','upperMoldCurvePolygon',relativeDataForUpperCurve,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperCurveData,curvePolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'upperMoldCurveClass','upperMoldCurveMirrorId','upperMoldCurveMirrorPolygon',relativeDataForUpperCurve,mirrorScaleXUpperFunction,scaleYUpperFunction,simPGMUpperCurveData,mirrorCurvePolygonColor,$scope);
        })


        $scope.$on ('handleUpperMoldCurveDataBroadcast',function (){
            allPolygonHandleBroadcast.upperCurveDataBroadcast($scope,SimPGMDataProviderService,createUpperMoldComponents,eachPolygon,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,scaleXUpperFunction,scaleYUpperFunction,mirrorScaleXUpperFunction,svgContainer);
        })

    }

	return {
		link : link
	}
})





