/**
 * Created by khanhafizurrahman on 1/6/18.
 */

var lowerMoldDirective = function(){
    var setAfterDrawingValues = [];

    var configurationForLowerMold = function (createLowerMoldComponents,SimPGMDataProviderService, lowerMoldDataStructure, curveLowerPointsData,lowerMoldDataC, simPGMLowerMoldProperties, simPGMLowerInsertData, simPGMLowerDieData, scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,eachPolygon,$scope,svgContainer ) {
        var relativeDataForLowerCurve = createLowerMoldComponents.createCurve(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,simPGMLowerInsertData);
        var relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData,'lower');
        var combinationofRelativeDataLowerForCurveNInsert = relativeDataForLowerCurve.concat(relativeDataForLowerInsert);
        var relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData,'lower');

        var afterScalingFactorRelativeDataForLowerDie = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerDie = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var afterScalingFactorRelativeDataForLowerInsertNCurveTogether = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        SimPGMDataProviderService.setAfterScalingLowerDieData(afterScalingFactorRelativeDataForLowerDie);
        SimPGMDataProviderService.setAfterScalingMirrorLowerDieData(afterScalingFactorRelativeDataForMirrorLowerDie);
        SimPGMDataProviderService.setAfterScalingLowerInsertData(afterScalingFactorRelativeDataForLowerInsertNCurveTogether);
        SimPGMDataProviderService.setAfterScalingMirrorLowerInsertData(afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether);
        //drawLowerMold(svgContainer,eachPolygon,afterScalingFactorRelativeDataForLowerDie,simPGMLowerDieData,$scope,afterScalingFactorRelativeDataForMirrorLowerDie,afterScalingFactorRelativeDataForLowerInsertNCurveTogether,simPGMLowerInsertData, afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether);

        //setAfterDrawing(afterScalingFactorRelativeDataForLowerDie,afterScalingFactorRelativeDataForMirrorLowerDie,afterScalingFactorRelativeDataForLowerInsertNCurveTogether,afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether);
    }

    var drawLowerMold = function (svgContainer,eachPolygon,afterScalingFactorRelativeDataForLowerDie,simPGMLowerDieData,$scope,afterScalingFactorRelativeDataForMirrorLowerDie,afterScalingFactorRelativeDataForLowerInsertNCurveTogether,simPGMLowerInsertData, afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether) {
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieId','lowerMoldDiePolygon',afterScalingFactorRelativeDataForLowerDie,null,null,simPGMLowerDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieMirrorId','lowerMoldDieMirrorPolygon',afterScalingFactorRelativeDataForMirrorLowerDie,null,null,simPGMLowerDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertMirrorId','lowerMoldInsertMirrorPolygon',afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether,null,null,simPGMLowerInsertData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertId','lowerMoldInsertPolygon',afterScalingFactorRelativeDataForLowerInsertNCurveTogether,null,null,simPGMLowerInsertData,null,$scope);

    }

    var setAfterDrawing = function (afterScalingFactorRelativeDataForLowerDie,afterScalingFactorRelativeDataForMirrorLowerDie,afterScalingFactorRelativeDataForLowerInsertNCurveTogether,afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether) {

        var heightOfDie = Math.max.apply(Math, afterScalingFactorRelativeDataForLowerDie.map(function (currentObj) {
            return currentObj.y;
        })) - Math.min.apply(Math, afterScalingFactorRelativeDataForLowerDie.map(function (currentObj) {
                return currentObj.y;
            }));
        console.log(heightOfDie);
    }

    var getAfterDrawing = function () {
        return setAfterDrawingValues;
    }
    return {
        configurationForLowerMold: configurationForLowerMold,
        getAfterDrawing: getAfterDrawing
    }
}




