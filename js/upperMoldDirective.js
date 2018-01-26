/**
 * Created by khanhafizurrahman on 1/6/18.
 */

var upperMoldDirective = function(){
    var configurationForUpperMold = function (createUpperMoldComponents, SimPGMDataProviderService, upperMoldDataStructure, curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties, simPGMUpperInsertData, simPGMUpperDieData, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, defineSVGdrawPropertiesObject, totalDistancebetweenGroundtoUpperMold, eachPolygon, $scope, svgContainer, shiftingYOrdinates) {
        var relativeDataForUpperCurve = createUpperMoldComponents.createCurve(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,simPGMUpperInsertData);
        var relativeDataForUpperInsert = createUpperMoldComponents.createInsert(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperInsertData, 'upper');
        var combinantionofRelativeDataForCurveNInsert = relativeDataForUpperCurve.concat(relativeDataForUpperInsert);
        var relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData, 'upper');
        relativeDataForUpperDie = shiftingYOrdinates.shiftingUpperMold(SimPGMDataProviderService,changingYPoints(relativeDataForUpperDie))
        combinantionofRelativeDataForCurveNInsert = shiftingYOrdinates.shiftingUpperMold(SimPGMDataProviderService,changingYPoints(combinantionofRelativeDataForCurveNInsert));

        //console.log(changingYPoints(relativeDataForUpperDie));
        // relativeDataForUpperDie = shiftingYOrdinates.shiftingUpperMold(SimPGMDataProviderService,changingYPoints(relativeDataForUpperDie))
        // combinantionofRelativeDataForCurveNInsert = shiftingYOrdinates.shiftingUpperMold(SimPGMDataProviderService,changingYPoints(combinantionofRelativeDataForCurveNInsert))

        var afterScalingFactorRelativeDataForUpperInsertNCurveTogether = new ScalingGangFunction().multiplyingEachUpperPointWithScalingFactor(combinantionofRelativeDataForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether = new ScalingGangFunction().multiplyingEachUpperPointWithScalingFactor(combinantionofRelativeDataForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var afterScalingFactorRelativeDataForUpperDie = new ScalingGangFunction().multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorUpperDie = new ScalingGangFunction().multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');

        SimPGMDataProviderService.setAfterScalingUpperDieData(afterScalingFactorRelativeDataForUpperDie);
        SimPGMDataProviderService.setAfterScalingMirrorUpperDieData(afterScalingFactorRelativeDataForMirrorUpperDie);
        SimPGMDataProviderService.setAfterScalingUpperInsertData(afterScalingFactorRelativeDataForUpperInsertNCurveTogether);
        SimPGMDataProviderService.setAfterScalingMirrorUpperInsertData(afterScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether);
        // var remainingSpaceforUpperMold = defineSVGdrawPropertiesObject.getViewBoxHeight() - totalDistancebetweenGroundtoUpperMold;
        // var maxPointOfAfterScalingFactorRelativeDataForUpperDie = Math.max.apply(Math, afterScalingFactorRelativeDataForUpperDie.map(function (currentObj) {
        //     return currentObj.y;
        // }))
        // var maxPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve = Math.max.apply(Math, afterScalingFactorRelativeDataForUpperInsertNCurveTogether.map(function (currentObj) {
        //     return currentObj.y;
        // }))
        // var maxBetweenDie_N_Insert = Math.max.apply(Math,[maxPointOfAfterScalingFactorRelativeDataForUpperDie, maxPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve]);
        // var transformingDelta = maxBetweenDie_N_Insert - remainingSpaceforUpperMold;
        // var afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForUpperInsertNCurveTogether, transformingDelta);
        // var afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether, transformingDelta);
        // var afterAdjustHeightScalingFactorRelativeDataForUpperDie = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForUpperDie, transformingDelta);
        // var afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForMirrorUpperDie, transformingDelta);
        //drawUpperMold(svgContainer, eachPolygon, afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether, simPGMUpperInsertData, $scope, afterAdjustHeightScalingFactorRelativeDataForUpperDie, simPGMUpperDieData, afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie, afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether);
        // SimPGMDataProviderService.setAfterScalingUpperDieData(afterAdjustHeightScalingFactorRelativeDataForUpperDie);
        // SimPGMDataProviderService.setAfterScalingMirrorUpperDieData(afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie);
        // SimPGMDataProviderService.setAfterScalingUpperInsertData(afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether);
        // SimPGMDataProviderService.setAfterScalingMirrorUpperInsertData(afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether);

    }

    var drawUpperMold = function (svgContainer, eachPolygon, afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether, simPGMUpperInsertData, $scope, afterAdjustHeightScalingFactorRelativeDataForUpperDie, simPGMUpperDieData, afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie, afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether) {
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',afterAdjustHeightScalingFactorRelativeDataForUpperDie,null,null,simPGMUpperDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieMirrorId','upperMoldDieMirrorPolygon',afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie,null,null,simPGMUpperDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertId','upperMoldInsertPolygon',afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether,null,null,simPGMUpperInsertData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertMirrorId','upperMoldInsertMirrorPolygon',afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether,null,null,simPGMUpperInsertData,null,$scope);
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
    return {
        configurationForUpperMold: configurationForUpperMold,
    }
}