/**
 * Created by khanhafizurrahman on 1/6/18.
 */

var lowerMoldDirective = function(){
    var configurationForLowerMold = function (createLowerMoldComponents,SimPGMDataProviderService, lowerMoldDataStructure, curveLowerPointsData, simPGMLowerCurveData,lowerMoldDataC, simPGMLowerMoldProperties, simPGMLowerInsertData, simPGMLowerDieData, scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,eachPolygon,$scope,svgContainer ) {
        var relativeDataForLowerCurve = createLowerMoldComponents.createCurve(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,simPGMLowerCurveData);
        var relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData);
        var combinationofRelativeDataLowerForCurveNInsert = relativeDataForLowerInsert.concat(relativeDataForLowerCurve);
        var relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData);

        var afterScalingFactorRelativeDataForLowerDie = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerDie = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var afterScalingFactorRelativeDataForLowerInsertNCurveTogether = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        drawLowerMold(svgContainer,eachPolygon,afterScalingFactorRelativeDataForLowerDie,simPGMLowerDieData,$scope,afterScalingFactorRelativeDataForMirrorLowerDie,afterScalingFactorRelativeDataForLowerInsertNCurveTogether,simPGMLowerInsertData, afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether);

    }

    var drawLowerMold = function (svgContainer,eachPolygon,afterScalingFactorRelativeDataForLowerDie,simPGMLowerDieData,$scope,afterScalingFactorRelativeDataForMirrorLowerDie,afterScalingFactorRelativeDataForLowerInsertNCurveTogether,simPGMLowerInsertData, afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether) {
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieId','lowerMoldDiePolygon',afterScalingFactorRelativeDataForLowerDie,null,null,simPGMLowerDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieMirrorClass','lowerMoldDieMirrorId','lowerMoldDieMirrorPolygon',afterScalingFactorRelativeDataForMirrorLowerDie,null,null,simPGMLowerDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertId','lowerMoldInsertPolygon',afterScalingFactorRelativeDataForLowerInsertNCurveTogether,null,null,simPGMLowerInsertData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertMirrorClass','lowerMoldInsertMirrorId','lowerMoldInsertMirrorPolygon',afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether,null,null,simPGMLowerInsertData,null,$scope);

    }
    return {
        configurationForLowerMold: configurationForLowerMold
    }
}