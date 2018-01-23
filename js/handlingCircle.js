/**
 * Created by khanhafizurrahman on 1/22/18.
 */
var respondToCircle = function() {
    var respondAfterClickCircle = function (relativeDataForCircle,SimPGMDataProviderService,drawWidthDiameter_D,drawwidthHeight_H,svgContainer,$scope) {
        relativeDataForCircle = SimPGMDataProviderService.circleData();
        (typeof relativeDataForCircle[0].radius ==="string")? relativeDataForCircle[0].radius = parseFloat(relativeDataForCircle[0].radius): relativeDataForCircle[0].radius;
        var scalingFunc = new ScalingGangFunction();
        var width_HeightObj = scalingFunc.getHeightNwidthDivisorObj(SimPGMDataProviderService);
        var scalingFactor = scalingFunc.scalingWidthNHeight(drawWidthDiameter_D,drawwidthHeight_H,width_HeightObj.width,width_HeightObj.height);
        console.log(scalingFactor);
        var circleColor = d3.select('#circleDrawid')[0][0].style.fill;
        d3.selectAll('#globalSVG #circleDrawid').remove();
        var afterScalingFactorRelativeDataforCircle = scalingFunc.multiplyingEachCirclePointWithScalingFactor(relativeDataForCircle,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H);
        var circleComponent = new polygonDefinition();
        var circleComponentProperties = {svgContainer : svgContainer,className : 'circleClass', idName : 'circleDrawid',polygonClassName : null,clickClassId : null, clickClassPolygonName : null, clickClassIdName: null, dataForDrawing: afterScalingFactorRelativeDataforCircle, scaleXPointsFunction: null,scaleYPointsFunction : null,counter : 0, color: circleColor}
        circleComponent.polyComponent(circleComponentProperties);
        var circleComponentClick = new clickEventsToPolygon();
        circleComponentClick.clickToCircle(circleComponentProperties.idName,$scope,relativeDataForCircle);
    }
    return{
        respondAfterClickCircle: respondAfterClickCircle
    }

}