/**
 * Created by khanhafizurrahman on 1/24/18.
 */
var finalOutput = function () {
    var drawEveryThingAfterScaling = function (SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject, scalingObj, eachPolygon, $scope, svgContainer) {
        var transform_X = calculatingFinaltransformInX_N_Y_Direction(SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject).transform_X;
        var transform_Y = calculatingFinaltransformInX_N_Y_Direction(SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject).transform_Y;
        console.log(transform_Y);
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
        var totalDrawHeight = findHeightLowerMoldPlusCircle(SimPGMDataProviderService) + (scalingFactor* .001) +  findMaximumHeightBetween_U_CurveNInsert(SimPGMDataProviderService);
        var drawBoxHeight = defineSVGdrawPropertiesObject.getViewBoxHeight();
        var transform_Y = (drawBoxHeight/2) - (totalDrawHeight/2);
        var totalDrawWidth = Math.max.apply(Math,[SimPGMDataProviderService.getLowerMoldDieObject().D_Mold,SimPGMDataProviderService.getUpperMoldDieObject().D_Mold]);
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

    var settingCircleDataBeforeFinalDraw = function (SimPGMDataProviderService,scalingObj,scalingFactor, drawWidthDiameter_D, drawwidthHeight_H) {
        var relativeDataForCircle = SimPGMDataProviderService.circleData();
        var afterScalingFactorRelativeDataforCircle = scalingObj.multiplyingEachCirclePointWithScalingFactor(relativeDataForCircle,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H);
        SimPGMDataProviderService.setScaleCircleData(afterScalingFactorRelativeDataforCircle);
    }

    var settingUpperDieDataBeforeFinalDraw = function (SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,relativeDataForCircle, defineSVGdrawPropertiesObject) {
        var simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
        console.log(curveUpperPointsData.y_RF_surf_fin_Mold);
        var relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData,'upper');
        relativeDataForUpperDie = shiftingUpperMold(SimPGMDataProviderService,changingYPoints(relativeDataForUpperDie))
        var afterScalingFactorRelativeDataForUpperDie = scalingFunc.multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorUpperDie = scalingFunc.multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');

        SimPGMDataProviderService.setAfterScalingUpperDieData(afterScalingFactorRelativeDataForUpperDie);
        SimPGMDataProviderService.setAfterScalingMirrorUpperDieData(afterScalingFactorRelativeDataForMirrorUpperDie);
    }

    var settingUpperInsertDataBeforeFinalDraw = function (SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,relativeDataForCircle,defineSVGdrawPropertiesObject) {
        var combinationofRelativeDataUpperForCurveNInsert = configureInsertData(SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties);
        combinationofRelativeDataUpperForCurveNInsert = shiftingUpperMold(SimPGMDataProviderService,changingYPoints(combinationofRelativeDataUpperForCurveNInsert));
        var afterScalingFactorRelativeDataForUpperInsertNCurve = scalingFunc.multiplyingEachUpperPointWithScalingFactor(combinationofRelativeDataUpperForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorUpperInsertNCurve = scalingFunc.multiplyingEachUpperPointWithScalingFactor(combinationofRelativeDataUpperForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        SimPGMDataProviderService.setAfterScalingUpperInsertData(afterScalingFactorRelativeDataForUpperInsertNCurve);
        SimPGMDataProviderService.setAfterScalingMirrorUpperInsertData(afterScalingFactorRelativeDataForMirrorUpperInsertNCurve);
    }

    var changingYPoints = function (currentObjectArray) {
        var newUpperMoldPoints = [];
        var changingYPositions = currentObjectArray.map(function (currentObject) {
            return -currentObject.y ;
        });

        for (var i in currentObjectArray){
            newUpperMoldPoints.push({x : currentObjectArray[i].x, y: changingYPositions[i]})
        }

        return newUpperMoldPoints;
    }

    var shiftingUpperMold = function (SimPGMDataProviderService,currentObjectArray) {
        var centrePoint = SimPGMDataProviderService.getCentrePoints();
        var circleDiameter = 2 * SimPGMDataProviderService.circleData()[0].radius;
        var shiftingPosition = centrePoint.y + circleDiameter + 0.001;
        var newUpperMoldPoints = [];
        var changingYPositions = currentObjectArray.map(function (currentObject) {
            return currentObject.y - shiftingPosition ;
        });

        for (var i in currentObjectArray){
            newUpperMoldPoints.push({x : currentObjectArray[i].x, y: changingYPositions[i]})
        }

        return newUpperMoldPoints;
    }
    var calculateRemainingSpaceForUpperMold = function (scalingFactor,SimPGMDataProviderService) {
        var circleYPosition =  calculateMaxCircleYPoint(SimPGMDataProviderService);
        var scalableSimPGm_L_DieData =  SimPGMDataProviderService.getAfterScalingLowerDieData();
        var scalableSimPGm_L_InsertData =  SimPGMDataProviderService.getAfterScalingLowerInsertData();
        var maxYSimPGM_L_DieData = Math.max.apply(Math, scalableSimPGm_L_DieData.map(function (currentObj) {
            return currentObj.y;
        }));
        var minYSimPGM_L_DieData = Math.min.apply(Math, scalableSimPGm_L_DieData.map(function (currentObj) {
            return currentObj.y;
        }));
        var heightOfSimPGM_L_DieData = maxYSimPGM_L_DieData - minYSimPGM_L_DieData;
        var maxYSimPGM_L_InsertData = Math.max.apply(Math, scalableSimPGm_L_InsertData.map(function (currentObj) {
            return currentObj.y;
        }))
        var minYSimPGM_L_InsertData = Math.min.apply(Math, scalableSimPGm_L_InsertData.map(function (currentObj) {
            return currentObj.y;
        }))
        var heightOfSimPGM_L_InsertData = maxYSimPGM_L_InsertData - minYSimPGM_L_InsertData;
        var maxAmongthree = Math.max.apply(Math,[circleYPosition,heightOfSimPGM_L_DieData,heightOfSimPGM_L_InsertData]);
        return maxAmongthree;
    }


    var findMaximumHeightBetween_U_CurveNInsert = function(SimPGMDataProviderService){
        var afterScalingFactorRelativeDataForUpperDie = SimPGMDataProviderService.getAfterScalingUpperDieData();
        var afterScalingFactorRelativeDataForUpperInsertNCurve = SimPGMDataProviderService.getAfterScalingUpperInsertData();
        var maxPointOfAfterScalingFactorRelativeDataForUpperDie = Math.max.apply(Math, afterScalingFactorRelativeDataForUpperDie.map(function (currentObj) {
            return currentObj.y;
        }))
        var minPointOfAfterScalingFactorRelativeDataForUpperDie = Math.min.apply(Math, afterScalingFactorRelativeDataForUpperDie.map(function (currentObj) {
            return currentObj.y;
        }))
        var heightOf_U_Die = maxPointOfAfterScalingFactorRelativeDataForUpperDie - minPointOfAfterScalingFactorRelativeDataForUpperDie;
        var maxPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve = Math.max.apply(Math, afterScalingFactorRelativeDataForUpperInsertNCurve.map(function (currentObj) {
            return currentObj.y;
        }))

        var minPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve = Math.min.apply(Math, afterScalingFactorRelativeDataForUpperInsertNCurve.map(function (currentObj) {
            return currentObj.y;
        }))

        var heightOf_U_Insert = maxPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve - minPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve;
        return Math.max.apply(Math,[heightOf_U_Die,heightOf_U_Insert]);
    }

        var findMaximumPointBetween_U_CurveNInsert = function(afterScalingFactorRelativeDataForUpperDie,afterScalingFactorRelativeDataForUpperInsertNCurve ){
        var maxPointOfAfterScalingFactorRelativeDataForUpperDie = Math.max.apply(Math, afterScalingFactorRelativeDataForUpperDie.map(function (currentObj) {
            return currentObj.y;
        }))
        var maxPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve = Math.max.apply(Math, afterScalingFactorRelativeDataForUpperInsertNCurve.map(function (currentObj) {
            return currentObj.y;
        }))
        return Math.max.apply(Math,[maxPointOfAfterScalingFactorRelativeDataForUpperDie,maxPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve]);
    }

    var findHeightLowerMoldPlusCircle = function(SimPGMDataProviderService){
        var circleYPosition =  calculateMaxCircleYPoint(SimPGMDataProviderService);
        var scalableSimPGm_L_DieData =  SimPGMDataProviderService.getAfterScalingLowerDieData();
        var scalableSimPGm_L_InsertData =  SimPGMDataProviderService.getAfterScalingLowerInsertData();
        var maxYSimPGM_L_DieData = Math.max.apply(Math, scalableSimPGm_L_DieData.map(function (currentObj) {
            return currentObj.y;
        }));
        var minYSimPGM_L_DieData = Math.min.apply(Math, scalableSimPGm_L_DieData.map(function (currentObj) {
            return currentObj.y;
        }));
        var heightOfSimPGM_L_DieData = maxYSimPGM_L_DieData - minYSimPGM_L_DieData;
        var maxYSimPGM_L_InsertData = Math.max.apply(Math, scalableSimPGm_L_InsertData.map(function (currentObj) {
            return currentObj.y;
        }))
        var minYSimPGM_L_InsertData = Math.min.apply(Math, scalableSimPGm_L_InsertData.map(function (currentObj) {
            return currentObj.y;
        }))
        var heightOfSimPGM_L_InsertData = maxYSimPGM_L_InsertData - minYSimPGM_L_InsertData;
        var maxAmongthree = Math.max.apply(Math,[circleYPosition,heightOfSimPGM_L_DieData,heightOfSimPGM_L_InsertData]);
        var maxbetween_L_DieNInsert = Math.max.apply(Math,[maxYSimPGM_L_InsertData, maxYSimPGM_L_DieData]);
        var heightConsistOFLowerMoldNCircle = maxbetween_L_DieNInsert - maxAmongthree;
        return heightConsistOFLowerMoldNCircle;

    }

    var calculateMaxCircleYPoint = function (SimPGMDataProviderService) {
        return SimPGMDataProviderService.getScaleCircleData()[0].y_axis - SimPGMDataProviderService.getScaleCircleData()[0].radius;
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
        settingUpperInsertDataBeforeFinalDraw: settingUpperInsertDataBeforeFinalDraw,
        findHeightLowerMoldPlusCircle: findHeightLowerMoldPlusCircle,
        calculateRemainingSpaceForUpperMold: calculateRemainingSpaceForUpperMold,
        findMaximumPointBetween_U_CurveNInsert: findMaximumPointBetween_U_CurveNInsert,
        settingCircleDataBeforeFinalDraw: settingCircleDataBeforeFinalDraw
    }
}