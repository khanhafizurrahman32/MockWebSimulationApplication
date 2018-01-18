/**
 * Created by khanhafizurrahman on 1/6/18.
 */

var respondToUpperMold = function(){
    var respondToUpperMoldDie = function(simPGMUpperDieData, SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curvePointsData, upperMoldDataC, simPGMUpperMoldProperties, eachPolygon, $scope, scalingFactor, relativeDataForCircle, defineSVGdrawPropertiesObject, drawWidthDiameter_D, drawwidthHeight_H, svgContainer, eachPolygon ){
        simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
        var relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData);
        console.log(relativeDataForUpperDie);
        var diePolygonColor = d3.select('#upperMoldDieId')[0][0].style.fill;
        var mirrorDiePolygonColor =d3.select('#upperMoldDieMirrorId')[0][0].style.fill;
        d3.selectAll('#globalSVG .upperMoldDieClass').remove();
        configurationToDrawUpperDie(scalingFactor, simPGMUpperDieData, relativeDataForCircle, defineSVGdrawPropertiesObject, relativeDataForUpperDie, drawWidthDiameter_D, drawwidthHeight_H, svgContainer, $scope, eachPolygon, diePolygonColor, mirrorDiePolygonColor);

    }

    var configurationToDrawUpperDie = function (scalingFactor, simPGMUpperDieData, relativeDataForCircle, defineSVGdrawPropertiesObject, relativeDataForUpperDie, drawWidthDiameter_D, drawwidthHeight_H, svgContainer, $scope, eachPolygon, diePolygonColor,mirrorDiePolygonColor) {
        var totalDistancebetweenGroundtoUpperMold = scalingFactor * (simPGMUpperDieData.H_Mold + relativeDataForCircle[0].radius*2 + .001);
        var remainingSpaceforUpperMold = defineSVGdrawPropertiesObject.getViewBoxHeight() - totalDistancebetweenGroundtoUpperMold;
        var afterScalingFactorRelativeDataForUpperDie = new ScalingGangFunction().multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var adjustRatioForUpperWithRest = remainingSpaceforUpperMold - Math.max.apply(Math, afterScalingFactorRelativeDataForUpperDie.map(function (currentObj) {
                return currentObj.y;
        }))
        var afterAdjustHeightScalingFactorRelativeDataForUpperDie = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForUpperDie, adjustRatioForUpperWithRest);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',afterAdjustHeightScalingFactorRelativeDataForUpperDie,null,null,simPGMUpperDieData,diePolygonColor, $scope);
        var afterScalingFactorRelativeDataForMirrorUpperDie = new ScalingGangFunction().multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForMirrorUpperDie, adjustRatioForUpperWithRest);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieMirrorId','upperMoldDieMirrorPolygon',afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie,null,null,simPGMUpperDieData,mirrorDiePolygonColor,$scope);
    }

    var respondToUpperMoldInsert = function (SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curvePointsData, upperMoldDataC, simPGMUpperMoldProperties) {
        var simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
        for(var key in simPGMUpperInsertData){
            if(typeof (simPGMUpperInsertData[key])){
                simPGMUpperInsertData[key] = parseFloat(simPGMUpperInsertData[key]);
            }
        }
        var relativeDataForUpperInsert = createUpperMoldComponents.createInsert(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperInsertData);
        var insertPolygonColor = d3.select('#upperMoldInsertId')[0][0].style.fill;
        var mirrorInsertPolygonColor = d3.select('#upperMoldInsertMirrorId')[0][0].style.fill;
        d3.selectAll('#globalSVG .upperMoldInsertClass').remove();
        var curvePolygonColor = d3.select('#upperMoldCurveId')[0][0].style.fill;
        var mirrorCurvePolygonColor = d3.select('#upperMoldCurveMirrorId')[0][0].style.fill;
        d3.selectAll('#globalSVG .upperMoldCurveClass').remove();
    }

    var respondToUpperMoldCurve = function () {

    }

    return{
        respondToUpperMoldDie: respondToUpperMoldDie,
        respondToUpperMoldInsert: respondToUpperMoldInsert,
        respondToUpperMoldCurve: respondToUpperMoldCurve
    }
}
