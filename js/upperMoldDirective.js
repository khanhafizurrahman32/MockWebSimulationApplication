/**
 * Created by khanhafizurrahman on 1/6/18.
 */

var upperMoldDirective = function(){
    var configurationForUpperMold = function (createUpperMoldComponents, SimPGMDataProviderService, upperMoldDataStructure, curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties, simPGMUpperInsertData, simPGMUpperDieData, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, defineSVGdrawPropertiesObject, totalDistancebetweenGroundtoUpperMold, eachPolygon, $scope, svgContainer) {
        var relativeDataForUpperCurve = createUpperMoldComponents.createCurve(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,simPGMUpperInsertData);
        var relativeDataForUpperInsert = createUpperMoldComponents.createInsert(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperInsertData, 'upper');
        var combinantionofRelativeDataForCurveNInsert = relativeDataForUpperInsert.concat(relativeDataForUpperCurve);
        var relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData, 'upper');
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
        // drawUpperMold(svgContainer, eachPolygon, afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether, simPGMUpperInsertData, $scope, afterAdjustHeightScalingFactorRelativeDataForUpperDie, simPGMUpperDieData, afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie, afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether);
        drawUpperMold(svgContainer, eachPolygon, afterScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether, simPGMUpperInsertData, $scope, afterScalingFactorRelativeDataForUpperDie, simPGMUpperDieData, afterScalingFactorRelativeDataForMirrorUpperDie, afterScalingFactorRelativeDataForUpperInsertNCurveTogether);
    }

    var drawUpperMold = function (svgContainer, eachPolygon, afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether, simPGMUpperInsertData, $scope, afterAdjustHeightScalingFactorRelativeDataForUpperDie, simPGMUpperDieData, afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie, afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether) {
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertMirrorId','upperMoldInsertMirrorPolygon',afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether,null,null,simPGMUpperInsertData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',afterAdjustHeightScalingFactorRelativeDataForUpperDie,null,null,simPGMUpperDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieMirrorId','upperMoldDieMirrorPolygon',afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie,null,null,simPGMUpperDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertId','upperMoldInsertPolygon',afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether,null,null,simPGMUpperInsertData,null,$scope);
    }


    return {
        configurationForUpperMold: configurationForUpperMold,
    }
}