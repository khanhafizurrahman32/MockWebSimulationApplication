/**
 * Created by khanhafizurrahman on 11/17/17.
 */

var afterAngularBroadcast = function () {
    var upperCurveDataBroadcast = function ($scope,SimPGMDataProviderService,createUpperMoldComponents,eachPolygon,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,scaleXUpperFunction,scaleYUpperFunction,mirrorScaleXUpperFunction,svgContainer) {
            var simPGMUpperCurveData = SimPGMDataProviderService.getUpperMoldCurveObject();
            var relativeDataForUpperCurve = createUpperMoldComponents.createCurve(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,simPGMUpperCurveData);
            var simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
            var relativeDataForUpperInsert = createUpperMoldComponents.createInsert(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperInsertData);
            var simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
            var relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData);

            var diePolygonColor = d3.select('#upperMoldDieId')[0][0].style.fill;
            var mirrorDiePolygonColor = d3.select('#upperMoldDieMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .upperMoldDieClass').remove();
            eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',relativeDataForUpperDie,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperDieData,diePolygonColor,$scope);
            eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieMirrorId','upperMoldDieMirrorPolygon',relativeDataForUpperDie,mirrorScaleXUpperFunction,scaleYUpperFunction,simPGMUpperDieData,mirrorDiePolygonColor,$scope);

            var insertPolygonColor = d3.select('#upperMoldInsertId')[0][0].style.fill;
            var mirrorInsertPolygonColor = d3.select('#upperMoldInsertMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .upperMoldInsertClass').remove();
            eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertId','upperMoldInsertPolygon',relativeDataForUpperInsert,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperInsertData,insertPolygonColor,$scope);
            eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertMirrorId','upperMoldInsertMirrorPolygon',relativeDataForUpperInsert,mirrorScaleXUpperFunction,scaleYUpperFunction,simPGMUpperInsertData,mirrorInsertPolygonColor,$scope);

            var curvePolygonColor = d3.select('#upperMoldCurveId')[0][0].style.fill;
            d3.selectAll('#globalSVG .upperMoldCurveClass').remove();
            eachPolygon.drawEachPolygon(svgContainer,'upperMoldCurveClass','upperMoldCurveId','upperMoldCurvePolygon',relativeDataForUpperCurve,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperCurveData,curvePolygonColor,$scope);
            eachPolygon.drawEachPolygon(svgContainer,'upperMoldCurveClass','upperMoldCurveMirrorId','upperMoldCurveMirrorPolygon',relativeDataForUpperCurve,mirrorScaleXUpperFunction,scaleYUpperFunction,simPGMUpperCurveData,curvePolygonColor,$scope);

    }

    return{
        upperCurveDataBroadcast : upperCurveDataBroadcast
    }
}