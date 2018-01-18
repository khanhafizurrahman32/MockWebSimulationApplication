/**
 * Created by khanhafizurrahman on 1/6/18.
 */

var upperMoldDirective = function(){
    var configurationForUpperMold = function (createUpperMoldComponents, SimPGMDataProviderService, upperMoldDataStructure, curvePointsData, simPGMUpperCurveData, upperMoldDataC, simPGMUpperMoldProperties, simPGMUpperInsertData, simPGMUpperDieData, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, defineSVGdrawPropertiesObject, totalDistancebetweenGroundtoUpperMold, eachPolygon, $scope, svgContainer ) {
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
        drawUpperMold(svgContainer, eachPolygon, afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether, simPGMUpperInsertData, $scope, afterAdjustHeightScalingFactorRelativeDataForUpperDie, simPGMUpperDieData, afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie, afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether);
    }

    var drawUpperMold = function (svgContainer, eachPolygon, afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether, simPGMUpperInsertData, $scope, afterAdjustHeightScalingFactorRelativeDataForUpperDie, simPGMUpperDieData, afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie, afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether) {
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertMirrorId','upperMoldInsertMirrorPolygon',afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether,null,null,simPGMUpperInsertData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',afterAdjustHeightScalingFactorRelativeDataForUpperDie,null,null,simPGMUpperDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieMirrorId','upperMoldDieMirrorPolygon',afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie,null,null,simPGMUpperDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertId','upperMoldInsertPolygon',afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether,null,null,simPGMUpperInsertData,null,$scope);
    }

    var mergeInsert_n_DieData = function (obj1, obj2) {
        var obj3 = {};
        var mergeArray = [];
        for (var attrname in obj1){ obj3[attrname] = obj1[attrname]; }
        for (var attrname in obj2){
            if (obj3.hasOwnProperty(attrname)){
                if (obj3[attrname] < obj2[attrname]){
                    obj3[attrname] = obj2[attrname];
                }
            }
        }
        for (var attrname in obj3) {mergeArray.push(obj3[attrname])}
        return mergeArray;
    }

    return {
        configurationForUpperMold: configurationForUpperMold,
        mergeInsert_n_DieData: mergeInsert_n_DieData
    }
}