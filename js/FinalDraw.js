/**
 * Created by khanhafizurrahman on 1/24/18.
 */
var finalOutput = function () {
    var drawEveryThingAfterScaling = function (SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject, scalingObj, eachPolygon, $scope, svgContainer) {
        var transform_X = calculatingFinaltransformInX_N_Y_Direction(SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject).transform_X;
        var transform_Y = calculatingFinaltransformInX_N_Y_Direction(SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject).transform_Y;
        var drawAbleLowerDieData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingLowerDieData(),transform_X,transform_Y)
        var drawAbleMirrorLowerDieData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingMirrorLowerDieData(),transform_X,transform_Y)
        var drawAbleLowerInsertData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingLowerInsertData(),transform_X,transform_Y)
        var drawAbleMirrorLowerInsertData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingMirrorLowerInsertData(),transform_X,transform_Y)
        var drawAbleUpperDieData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingUpperDieData(),transform_X,transform_Y)
        var drawAbleMirrorUpperDieData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingMirrorUpperDieData(),transform_X,transform_Y)
        var drawAbleUpperInsertData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingUpperInsertData(),transform_X,transform_Y)
        var drawAbleMirrorUpperInsertData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingMirrorUpperInsertData(),transform_X,transform_Y)
        renderEveryThingAfterScaling(eachPolygon,drawAbleLowerDieData, $scope, svgContainer, SimPGMDataProviderService, drawAbleMirrorLowerDieData, drawAbleLowerInsertData, drawAbleMirrorLowerInsertData, drawAbleUpperDieData, drawAbleMirrorUpperDieData, drawAbleUpperInsertData, drawAbleMirrorUpperInsertData, transform_X, transform_Y)
    }

    var calculatingFinaltransformInX_N_Y_Direction = function (SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject) {
        var totalDrawHeight = SimPGMDataProviderService.getLowerMoldDieObject().H_Mold + 2 * SimPGMDataProviderService.circleData()[0].radius + .001 + SimPGMDataProviderService.getUpperMoldDieObject().H_Mold;
        totalDrawHeight = scalingFactor * totalDrawHeight;
        var drawBoxHeight = defineSVGdrawPropertiesObject.getViewBoxHeight();
        var transform_Y = (drawBoxHeight/2) - (totalDrawHeight/2);
        var totalDrawWidth = (SimPGMDataProviderService.getLowerMoldDieObject().D_Mold > SimPGMDataProviderService.getUpperMoldDieObject().D_Mold)? SimPGMDataProviderService.getLowerMoldDieObject().D_Mold: SimPGMDataProviderService.getUpperMoldDieObject().D_Mold;
        totalDrawWidth = scalingFactor * totalDrawWidth;
        var drawBoxWidth = defineSVGdrawPropertiesObject.getViewBoxWidth();
        var transform_X = (drawBoxWidth/2) - (totalDrawWidth/2);
        return {"transform_X" : transform_X, "transform_Y": transform_Y};
    }

    var renderEveryThingAfterScaling = function (eachPolygon,drawAbleLowerDieData, $scope, svgContainer, SimPGMDataProviderService, drawAbleMirrorLowerDieData, drawAbleLowerInsertData, drawAbleMirrorLowerInsertData, drawAbleUpperDieData, drawAbleMirrorUpperDieData, drawAbleUpperInsertData, drawAbleMirrorUpperInsertData, transform_X, transform_Y ) {
        var lowerDieColor;
        var lowerMirrorDieColor;
        var lowerInsertColor;
        var lowerMirrorInsertColor;
        var upperDieColor;
        var upperMirrorDieColor;
        var upperInsertColor;
        var upperMirrorInsertColor;
        var circleColor;
        if($('#globalSVG .lowerMoldDieClass').length > 0){
            lowerDieColor = d3.select('#lowerMoldDieId')[0][0].style.fill;
            lowerMirrorDieColor = d3.select('#lowerMoldDieMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldDieClass').remove();
        }else{
            lowerDieColor = null;
            lowerMirrorDieColor = null;
        }
        if($('#globalSVG .lowerMoldInsertClass').length > 0){
            lowerInsertColor = d3.select('#lowerMoldInsertId')[0][0].style.fill;
            lowerMirrorInsertColor = d3.select('#lowerMoldInsertMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldInsertClass').remove();
        }else{
            lowerInsertColor = null;
            lowerMirrorInsertColor = null;
        }

        if($('#globalSVG #circleDrawid').length > 0){
            circleColor = d3.select('#circleDrawid')[0][0].style.fill;
            d3.selectAll('#globalSVG #circleDrawid').remove();
        }
        else{
            circleColor = null;
        }
        if($('#globalSVG .upperMoldDieClass').length > 0){
            upperDieColor = d3.select('#upperMoldDieId')[0][0].style.fill;
            upperMirrorDieColor = d3.select('#upperMoldDieMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .upperMoldDieClass').remove();
        }else{
            upperDieColor = null;
            upperMirrorDieColor = null;
        }
        if($('#globalSVG .upperMoldInsertClass').length > 0){
            upperInsertColor = d3.select('#upperMoldInsertId')[0][0].style.fill;
            upperMirrorInsertColor = d3.select('#upperMoldInsertMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .upperMoldInsertClass').remove();
        }else{
            upperInsertColor = null;
            upperMirrorInsertColor = null;
        }

        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieId','lowerMoldDiePolygon',drawAbleLowerDieData,null,null,SimPGMDataProviderService.getLowerMoldDieObject(),lowerDieColor,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieMirrorId','lowerMoldDieMirrorPolygon',drawAbleMirrorLowerDieData,null,null,SimPGMDataProviderService.getLowerMoldDieObject(),lowerMirrorDieColor,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertId','lowerMoldInsertPolygon',drawAbleLowerInsertData,null,null,SimPGMDataProviderService.getLowerMoldInsertObject(),lowerInsertColor,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertMirrorId','lowerMoldInsertMirrorPolygon',drawAbleMirrorLowerInsertData,null,null,SimPGMDataProviderService.getLowerMoldInsertObject(),lowerMirrorInsertColor,$scope);
        drawCirclePolygon(SimPGMDataProviderService,transform_X,transform_Y,svgContainer,$scope, circleColor);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',drawAbleUpperDieData,null,null,SimPGMDataProviderService.getUpperMoldDieObject(),upperDieColor,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieMirrorId','upperMoldDieMirrorPolygon',drawAbleMirrorUpperDieData,null,null,SimPGMDataProviderService.getUpperMoldDieObject(),upperMirrorDieColor,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertId','upperMoldInsertPolygon',drawAbleUpperInsertData,null,null,SimPGMDataProviderService.getUpperMoldInsertObject(),upperInsertColor,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertMirrorId','upperMoldInsertMirrorPolygon',drawAbleMirrorUpperInsertData,null,null,SimPGMDataProviderService.getUpperMoldInsertObject(),upperMirrorInsertColor,$scope);

    }

    var drawCirclePolygon = function (SimPGMDataProviderService,transform_X,transform_Y,svgContainer,$scope,circleColor) {

        var drawAbleCircleData = [{
            "radius" : SimPGMDataProviderService.getScaleCircleData()[0].radius,
            "x_axis" : SimPGMDataProviderService.getScaleCircleData()[0].x_axis + transform_X,
            "y_axis" : SimPGMDataProviderService.getScaleCircleData()[0].y_axis - transform_Y,
        }]

        var circleComponent = new polygonDefinition();
        var circleComponentProperties = {svgContainer : svgContainer,className : 'circleClass', idName : 'circleDrawid',polygonClassName : null,clickClassId : null, clickClassPolygonName : null, clickClassIdName: null, dataForDrawing: drawAbleCircleData, scaleXPointsFunction: null,scaleYPointsFunction : null,counter : 0, color:circleColor}
        circleComponent.polyComponent(circleComponentProperties);
        var circleComponentClick = new clickEventsToPolygon();
        circleComponentClick.clickToCircle(circleComponentProperties.idName,$scope,SimPGMDataProviderService.circleData());
    }

    var settingLowerDieDataBeforeFinalDraw = function (simPGMLowerDieData,SimPGMDataProviderService,createLowerMoldComponents,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H) {
        simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
        var relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData,'lower');
        var afterScalingFactorRelativeDataForLowerDie = scalingFunc.multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerDie = scalingFunc.multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        SimPGMDataProviderService.setAfterScalingLowerDieData(afterScalingFactorRelativeDataForLowerDie);
        SimPGMDataProviderService.setAfterScalingMirrorLowerDieData(afterScalingFactorRelativeDataForMirrorLowerDie);
    }

    var settingLowerInsertDataBeforeFinalDraw = function (simPGMLowerInsertData, SimPGMDataProviderService, createLowerMoldComponents, lowerMoldDataStructure, curveLowerPointsData, lowerMoldDataC, simPGMLowerMoldProperties, scalingFunc, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H) {
        simPGMLowerInsertData = SimPGMDataProviderService.getLowerMoldInsertObject();
        var relativeDataForLowerCurve = createLowerMoldComponents.createCurve(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,simPGMLowerInsertData);
        var relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData,'lower');
        var combinationofRelativeDataLowerForCurveNInsert = relativeDataForLowerCurve.concat(relativeDataForLowerInsert);
        var afterScalingFactorRelativeDataForLowerInsertNCurveTogether = scalingFunc.multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether = scalingFunc.multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        SimPGMDataProviderService.setAfterScalingLowerInsertData(afterScalingFactorRelativeDataForLowerInsertNCurveTogether);
        SimPGMDataProviderService.setAfterScalingMirrorLowerInsertData(afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether);
    }

    var settingUpperDieDataBeforeFinalDraw = function (SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,relativeDataForCircle, defineSVGdrawPropertiesObject) {
        var simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
        var relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData,'upper');
        var afterScalingFactorRelativeDataForUpperDie = scalingFunc.multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var remainingSpaceforUpperMold = calculateRemainingSpaceForUpperMold(scalingFactor,SimPGMDataProviderService,relativeDataForCircle,defineSVGdrawPropertiesObject);
        var combinationofRelativeDataUpperForCurveNInsert = configureInsertData(SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties);
        var afterScalingFactorRelativeDataForUpperInsertNCurve = scalingFunc.multiplyingEachUpperPointWithScalingFactor(combinationofRelativeDataUpperForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var maxBetweenDie_N_Insert = findMaximumPointBetweenCurveNInsert(afterScalingFactorRelativeDataForUpperDie,afterScalingFactorRelativeDataForUpperInsertNCurve)
        var transformingDelta = maxBetweenDie_N_Insert - remainingSpaceforUpperMold;
        var afterAdjustHeightScalingFactorRelativeDataForUpperDie =scalingFunc.adjustHeightAfterScaling(afterScalingFactorRelativeDataForUpperDie, transformingDelta);
        var afterScalingFactorRelativeDataForMirrorUpperDie = scalingFunc.multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie = scalingFunc.adjustHeightAfterScaling(afterScalingFactorRelativeDataForMirrorUpperDie, transformingDelta);
        SimPGMDataProviderService.setAfterScalingUpperDieData(afterAdjustHeightScalingFactorRelativeDataForUpperDie);
        SimPGMDataProviderService.setAfterScalingMirrorUpperDieData(afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie);
    }

    var settingUpperInsertDataBeforeFinalDraw = function (SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,relativeDataForCircle,defineSVGdrawPropertiesObject) {
        var combinationofRelativeDataUpperForCurveNInsert = configureInsertData(SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties);
        var afterScalingFactorRelativeDataForUpperInsertNCurve = scalingFunc.multiplyingEachUpperPointWithScalingFactor(combinationofRelativeDataUpperForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForUpperDie = configureDieData(SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H);
        var maxBetweenDie_N_Insert = findMaximumPointBetweenCurveNInsert(afterScalingFactorRelativeDataForUpperDie,afterScalingFactorRelativeDataForUpperInsertNCurve);
        var remainingSpaceforUpperMold = calculateRemainingSpaceForUpperMold(scalingFactor,SimPGMDataProviderService,relativeDataForCircle,defineSVGdrawPropertiesObject)
        var transformingDelta = maxBetweenDie_N_Insert - remainingSpaceforUpperMold;
        var afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForUpperInsertNCurve, transformingDelta);
        var afterScalingFactorRelativeDataForMirrorUpperInsertNCurve = scalingFunc.multiplyingEachUpperPointWithScalingFactor(combinationofRelativeDataUpperForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForMirrorUpperInsertNCurve, transformingDelta);
        SimPGMDataProviderService.setAfterScalingUpperInsertData(afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether);
        SimPGMDataProviderService.setAfterScalingMirrorUpperInsertData(afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether);
    }

    var calculateRemainingSpaceForUpperMold = function (scalingFactor,SimPGMDataProviderService,relativeDataForCircle,defineSVGdrawPropertiesObject) {
        var totalDistancebetweenGroundtoUpperMold = scalingFactor * (SimPGMDataProviderService.getLowerMoldDieObject().H_Mold + relativeDataForCircle[0].radius*2 + .001);
        var remainingSpaceforUpperMold = defineSVGdrawPropertiesObject.getViewBoxHeight() - totalDistancebetweenGroundtoUpperMold;
        return remainingSpaceforUpperMold;
    }

    var findMaximumPointBetweenCurveNInsert = function(afterScalingFactorRelativeDataForUpperDie,afterScalingFactorRelativeDataForUpperInsertNCurve){
        var maxBetweenDie_N_Insert = -9999;
        var maxPointOfAfterScalingFactorRelativeDataForUpperDie = Math.max.apply(Math, afterScalingFactorRelativeDataForUpperDie.map(function (currentObj) {
            return currentObj.y;
        }))
        var maxPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve = Math.max.apply(Math, afterScalingFactorRelativeDataForUpperInsertNCurve.map(function (currentObj) {
            return currentObj.y;
        }))
        if(maxPointOfAfterScalingFactorRelativeDataForUpperDie >= maxPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve){
            maxBetweenDie_N_Insert = maxPointOfAfterScalingFactorRelativeDataForUpperDie;
        }else{
            maxBetweenDie_N_Insert = maxPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve;
        }
        return maxBetweenDie_N_Insert;
    }

    var configureDieData = function (SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H) {
        var simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
        var relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData,'upper');
        var afterScalingFactorRelativeDataForUpperDie = scalingFunc.multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        return afterScalingFactorRelativeDataForUpperDie
    }


    var configureInsertData = function (SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties) {
        var simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
        var relativeDataForUpperCurve = createUpperMoldComponents.createCurve(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,simPGMUpperInsertData);
        var relativeDataForUpperInsert = createUpperMoldComponents.createInsert(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperInsertData,'upper');
        var combinationofRelativeDataUpperForCurveNInsert = relativeDataForUpperCurve.concat(relativeDataForUpperInsert);
        return combinationofRelativeDataUpperForCurveNInsert;
    }


    return{
        drawEveryThingAfterScaling: drawEveryThingAfterScaling,
        settingLowerDieDataBeforeFinalDraw: settingLowerDieDataBeforeFinalDraw,
        settingLowerInsertDataBeforeFinalDraw: settingLowerInsertDataBeforeFinalDraw,
        settingUpperDieDataBeforeFinalDraw: settingUpperDieDataBeforeFinalDraw,
        settingUpperInsertDataBeforeFinalDraw: settingUpperInsertDataBeforeFinalDraw
    }
}