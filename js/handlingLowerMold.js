/**
 * Created by khanhafizurrahman on 1/6/18.
 */

var respondToLowerMold = function(){
    var respondToLowerMoldDie = function(simPGMLowerDieData, SimPGMDataProviderService, relativeDataForLowerDie, createLowerMoldComponents, lowerMoldDataStructure, curvePointsData, lowerMoldDataC, simPGMLowerMoldProperties ){
        simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
        relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData);
        var diePolygonColor = d3.select('#lowerMoldDieId')[0][0].style.fill;
        var mirrorDiePolygonColor = d3.select('#lowerMoldDieMirrorId')[0][0].style.fill;
        d3.selectAll('#globalSVG .lowerMoldDieClass').remove();
    }

    var respondToLowerMoldInsert = function () {

    }

    var respondToLowerMoldCurve = function () {

    }

    return{
        respondToLowerMoldDie: respondToLowerMoldDie,
        respondToLowerMoldInsert: respondToLowerMoldInsert,
        respondToLowerMoldCurve: respondToLowerMoldCurve
    }
}