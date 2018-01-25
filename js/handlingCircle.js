/**
 * Created by khanhafizurrahman on 1/22/18.
 */
var respondToCircle = function() {
    var respondAfterClickCircle = function (relativeDataForCircle,SimPGMDataProviderService,drawWidthDiameter_D,drawwidthHeight_H,svgContainer,$scope,lastObjectToDrawEverything,defineSVGdrawPropertiesObject,scalingObj,eachPolygon,simPGMLowerDieData,createLowerMoldComponents,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,scalingFunc,simPGMLowerInsertData,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties) {
        relativeDataForCircle = SimPGMDataProviderService.circleData();
        console.log(relativeDataForCircle[0]);
        (typeof relativeDataForCircle[0].radius ==="string")? relativeDataForCircle[0].radius = parseFloat(relativeDataForCircle[0].radius): relativeDataForCircle[0].radius;

        var width_HeightObj = scalingObj.getHeightNwidthDivisorObj(SimPGMDataProviderService);
        var scalingFactor = scalingObj.scalingWidthNHeight(drawWidthDiameter_D,drawwidthHeight_H,width_HeightObj.width,width_HeightObj.height);
        var afterScalingFactorRelativeDataforCircle = scalingObj.multiplyingEachCirclePointWithScalingFactor(relativeDataForCircle,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H);
        SimPGMDataProviderService.setScaleCircleData(afterScalingFactorRelativeDataforCircle);
        lastObjectToDrawEverything.settingLowerDieDataBeforeFinalDraw(simPGMLowerDieData,SimPGMDataProviderService,createLowerMoldComponents,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H);
        lastObjectToDrawEverything.settingLowerInsertDataBeforeFinalDraw(simPGMLowerInsertData, SimPGMDataProviderService, createLowerMoldComponents, lowerMoldDataStructure, curveLowerPointsData, lowerMoldDataC, simPGMLowerMoldProperties, scalingFunc, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H);
        lastObjectToDrawEverything.settingUpperDieDataBeforeFinalDraw(SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,relativeDataForCircle, defineSVGdrawPropertiesObject);
        lastObjectToDrawEverything.settingUpperInsertDataBeforeFinalDraw(SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,relativeDataForCircle,defineSVGdrawPropertiesObject);
        lastObjectToDrawEverything.drawEveryThingAfterScaling(SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject, scalingObj, eachPolygon, $scope, svgContainer);
    }
    return{
        respondAfterClickCircle: respondAfterClickCircle
    }

}