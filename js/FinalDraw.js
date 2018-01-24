/**
 * Created by khanhafizurrahman on 1/24/18.
 */
var finalOutput = function () {
    var drawEveryThingAfterScaling = function (SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject, scalingObj, eachPolygon, $scope, svgContainer) {
        var totalDrawHeight = SimPGMDataProviderService.getLowerMoldDieObject().H_Mold + 2 * SimPGMDataProviderService.circleData()[0].radius + .001 + SimPGMDataProviderService.getUpperMoldDieObject().H_Mold;
        totalDrawHeight = scalingFactor * totalDrawHeight;
        var drawBoxHeight = defineSVGdrawPropertiesObject.getViewBoxHeight();
        var transform_Y = (drawBoxHeight/2) - (totalDrawHeight/2);
        var totalDrawWidth = (SimPGMDataProviderService.getLowerMoldDieObject().D_Mold > SimPGMDataProviderService.getUpperMoldDieObject().D_Mold)? SimPGMDataProviderService.getLowerMoldDieObject().D_Mold: SimPGMDataProviderService.getUpperMoldDieObject().D_Mold;
        totalDrawWidth = scalingFactor * totalDrawWidth;
        var drawBoxWidth = defineSVGdrawPropertiesObject.getViewBoxWidth();
        var transform_X = (drawBoxWidth/2) - (totalDrawWidth/2);
        var drawAbleLowerDieData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingLowerDieData(),transform_X,transform_Y)
        var drawAbleMirrorLowerDieData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingMirrorLowerDieData(),transform_X,transform_Y)
        var drawAbleLowerInsertData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingLowerInsertData(),transform_X,transform_Y)
        var drawAbleMirrorLowerInsertData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingMirrorLowerInsertData(),transform_X,transform_Y)
        var drawAbleCircleData = [{
            "radius" : SimPGMDataProviderService.getScaleCircleData()[0].radius,
            "x_axis" : SimPGMDataProviderService.getScaleCircleData()[0].x_axis + transform_X,
            "y_axis" : SimPGMDataProviderService.getScaleCircleData()[0].y_axis - transform_Y,
        }]

        var circleComponent = new polygonDefinition();
        var circleComponentProperties = {svgContainer : svgContainer,className : 'circleClass', idName : 'circleDrawid',polygonClassName : null,clickClassId : null, clickClassPolygonName : null, clickClassIdName: null, dataForDrawing: drawAbleCircleData, scaleXPointsFunction: null,scaleYPointsFunction : null,counter : 0}
        circleComponent.polyComponent(circleComponentProperties);
        var circleComponentClick = new clickEventsToPolygon();
        circleComponentClick.clickToCircle(circleComponentProperties.idName,$scope,SimPGMDataProviderService.circleData());
        var drawAbleUpperDieData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingUpperDieData(),transform_X,transform_Y)
        var drawAbleMirrorUpperDieData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingMirrorUpperDieData(),transform_X,transform_Y)
        var drawAbleUpperInsertData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingUpperInsertData(),transform_X,transform_Y)
        var drawAbleMirrorUpperInsertData = scalingObj.transformEveryPoints(SimPGMDataProviderService.getAfterScalingMirrorUpperInsertData(),transform_X,transform_Y)
        renderEveryThingAfterScaling(eachPolygon,drawAbleLowerDieData, $scope, svgContainer, SimPGMDataProviderService, drawAbleMirrorLowerDieData, drawAbleLowerInsertData, drawAbleMirrorLowerInsertData, drawAbleUpperDieData, drawAbleMirrorUpperDieData, drawAbleUpperInsertData, drawAbleMirrorUpperInsertData)
        console.log(SimPGMDataProviderService.getAfterScalingLowerDieData());
        console.log(SimPGMDataProviderService.getAfterScalingLowerInsertData());
        console.log(SimPGMDataProviderService.getAfterScalingLowerDieData()[0] , SimPGMDataProviderService.getAfterScalingLowerInsertData()[53], Object.is(SimPGMDataProviderService.getAfterScalingLowerDieData()[0] ))
    }

    var renderEveryThingAfterScaling = function (eachPolygon,drawAbleLowerDieData, $scope, svgContainer, SimPGMDataProviderService, drawAbleMirrorLowerDieData, drawAbleLowerInsertData, drawAbleMirrorLowerInsertData, drawAbleUpperDieData, drawAbleMirrorUpperDieData, drawAbleUpperInsertData, drawAbleMirrorUpperInsertData ) {
        var lowerDieColor;
        var lowerMirrorDieColor;
        var lowerInsertColor;
        var lowerMirrorInsertColor;
        var upperDieColor;
        var upperMirrorDieColor;
        var upperInsertColor;
        var upperMirrorInsertColor;
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
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',drawAbleUpperDieData,null,null,SimPGMDataProviderService.getUpperMoldDieObject(),upperDieColor,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieMirrorId','upperMoldDieMirrorPolygon',drawAbleMirrorUpperDieData,null,null,SimPGMDataProviderService.getUpperMoldDieObject(),upperMirrorDieColor,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertId','upperMoldInsertPolygon',drawAbleUpperInsertData,null,null,SimPGMDataProviderService.getUpperMoldInsertObject(),upperInsertColor,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertMirrorId','upperMoldInsertMirrorPolygon',drawAbleMirrorUpperInsertData,null,null,SimPGMDataProviderService.getUpperMoldInsertObject(),upperMirrorInsertColor,$scope);

    }
    return{
        drawEveryThingAfterScaling: drawEveryThingAfterScaling
    }
}