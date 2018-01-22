/**
 * Created by khanhafizurrahman on 1/6/18.
 */

var lowerMoldDirective = function(){
    var configurationForLowerMold = function (createLowerMoldComponents,SimPGMDataProviderService, lowerMoldDataStructure, curveLowerPointsData,lowerMoldDataC, simPGMLowerMoldProperties, simPGMLowerInsertData, simPGMLowerDieData, scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,eachPolygon,$scope,svgContainer ) {
        var relativeDataForLowerCurve = createLowerMoldComponents.createCurve(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,simPGMLowerInsertData);
        var relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData,'lower');
        var combinationofRelativeDataLowerForCurveNInsert = relativeDataForLowerCurve.concat(relativeDataForLowerInsert);
        var relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData,'lower');

        var afterScalingFactorRelativeDataForLowerDie = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerDie = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var afterScalingFactorRelativeDataForLowerInsertNCurveTogether = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        drawLowerMold(svgContainer,eachPolygon,afterScalingFactorRelativeDataForLowerDie,simPGMLowerDieData,$scope,afterScalingFactorRelativeDataForMirrorLowerDie,afterScalingFactorRelativeDataForLowerInsertNCurveTogether,simPGMLowerInsertData, afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether);

    }

    var drawLowerMold = function (svgContainer,eachPolygon,afterScalingFactorRelativeDataForLowerDie,simPGMLowerDieData,$scope,afterScalingFactorRelativeDataForMirrorLowerDie,afterScalingFactorRelativeDataForLowerInsertNCurveTogether,simPGMLowerInsertData, afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether) {
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieId','lowerMoldDiePolygon',afterScalingFactorRelativeDataForLowerDie,null,null,simPGMLowerDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieMirrorId','lowerMoldDieMirrorPolygon',afterScalingFactorRelativeDataForMirrorLowerDie,null,null,simPGMLowerDieData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertMirrorId','lowerMoldInsertMirrorPolygon',afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether,null,null,simPGMLowerInsertData,null,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertId','lowerMoldInsertPolygon',afterScalingFactorRelativeDataForLowerInsertNCurveTogether,null,null,simPGMLowerInsertData,null,$scope);

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
        configurationForLowerMold: configurationForLowerMold,
        mergeInsert_n_DieData: mergeInsert_n_DieData
    }
}