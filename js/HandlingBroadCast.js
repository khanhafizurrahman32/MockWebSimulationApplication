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

    var backupLowerMoldCurveDataBroadcast = function () {
        simPGMLowerCurveData = SimPGMDataProviderService.getLowerMoldCurveObject();
        relativeDataForLowerCurve = createLowerMoldComponents.createCurve(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,simPGMLowerCurveData);
        simPGMLowerInsertData = SimPGMDataProviderService.getLowerMoldInsertObject();
        relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData);
        simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
        relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData);
        var diePolygonColor = d3.select('#lowerMoldDieId')[0][0].style.fill;
        var mirrorDiePolygonColor = d3.select('#lowerMoldDieMirrorId')[0][0].style.fill;
        d3.selectAll('#globalSVG .lowerMoldDieClass').remove();
        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieId','lowerMoldDiePolygon',relativeDataForLowerDie,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerDieData,diePolygonColor,$scope);
        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieMirrorId','lowerMoldDieMirrorPolygon',relativeDataForLowerDie,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerDieData,mirrorDiePolygonColor,$scope);

        var insertPolygonColor = d3.select('#lowerMoldInsertId')[0][0].style.fill;
        var mirrorInsertPolygonColor = d3.select('#lowerMoldInsertMirrorId')[0][0].style.fill;
        d3.selectAll('#globalSVG .lowerMoldInsertClass').remove();
        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertId','lowerMoldInsertPolygon',relativeDataForLowerInsert,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,insertPolygonColor,$scope);
        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertMirrorId','lowerMoldInsertMirrorPolygon',relativeDataForLowerInsert,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,mirrorInsertPolygonColor,$scope);

        var curvePolygonColor = d3.select('#lowerMoldCurveId')[0][0].style.fill;
        var mirrorCurvePolygonColor = d3.select('#lowerMoldCurveMirrorId')[0][0].style.fill;
        d3.selectAll('#globalSVG .lowerMoldCurveClass').remove();
        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveId','lowerMoldCurvePolygon',relativeDataForLowerCurve,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,curvePolygonColor,$scope);
        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveMirrorId','lowerMoldCurveMirrorPolygon',relativeDataForLowerCurve,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,mirrorCurvePolygonColor,$scope);
    }

    return{
        upperCurveDataBroadcast : upperCurveDataBroadcast
    }
}