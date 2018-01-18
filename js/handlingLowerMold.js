/**
 * Created by khanhafizurrahman on 1/6/18.
 */

var respondToLowerMold = function(){
    var respondToLowerMoldDie = function(simPGMLowerDieData, SimPGMDataProviderService, createLowerMoldComponents, lowerMoldDataStructure, curveLowerPointsData, curvePointsData, lowerMoldDataC, simPGMLowerMoldProperties, drawWidthDiameter_D, drawwidthHeight_H,  eachPolygon, $scope, svgContainer, simPGMLowerInsertData, simPGMLowerCurveData, callFromDrawMoldDirective){
        simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
        for (var key in simPGMLowerDieData){
            if(typeof (simPGMLowerDieData[key]) === "string"){
                simPGMLowerDieData[key] = parseFloat(simPGMLowerDieData[key])
            }
        }
        simPGMLowerMoldProperties.setD_Mold(simPGMLowerDieData.D_Mold);
        simPGMLowerMoldProperties.setH_Mold(simPGMLowerDieData.H_Mold);
        simPGMLowerMoldProperties.setH_Sleeve_1(simPGMLowerDieData.H_1_Sleeve_1);
        var relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData);
        var scalingFunc = new ScalingGangFunction();
        var width_HeightObj = scalingFunc.getHeightNwidthDivisorObj(SimPGMDataProviderService);
        var scalingFactor = scalingFunc.scalingWidthNHeight(drawWidthDiameter_D,drawwidthHeight_H,width_HeightObj.width,width_HeightObj.height);
        var diePolygonColor = d3.select('#lowerMoldDieId')[0][0].style.fill;
        var mirrorDiePolygonColor = d3.select('#lowerMoldDieMirrorId')[0][0].style.fill;
        d3.selectAll('#globalSVG .lowerMoldDieClass').remove();
        configurationToDrawLowerDie(createLowerMoldComponents,SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData, lowerMoldDataC, simPGMLowerMoldProperties,simPGMLowerDieData, relativeDataForLowerDie, diePolygonColor, mirrorDiePolygonColor, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H,  eachPolygon, $scope, svgContainer);
        if(callFromDrawMoldDirective)
            respondToLowerMoldInsert(simPGMLowerInsertData, SimPGMDataProviderService, createLowerMoldComponents, lowerMoldDataStructure, curvePointsData, lowerMoldDataC, simPGMLowerMoldProperties, simPGMLowerCurveData, curveLowerPointsData, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer );
    }


    var configurationToDrawLowerDie = function (createLowerMoldComponents,SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData, lowerMoldDataC, simPGMLowerMoldProperties,simPGMLowerDieData, relativeDataForLowerDie, diePolygonColor, mirrorDiePolygonColor, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H,  eachPolygon, $scope, svgContainer) {

        var afterScalingFactorRelativeDataForLowerDie = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerDie = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieId','lowerMoldDiePolygon',afterScalingFactorRelativeDataForLowerDie,null,null,simPGMLowerDieData,diePolygonColor,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieMirrorId','lowerMoldDieMirrorPolygon',afterScalingFactorRelativeDataForMirrorLowerDie,null,null,simPGMLowerDieData,mirrorDiePolygonColor,$scope);
    }

    var respondToLowerMoldInsert = function (simPGMLowerInsertData, SimPGMDataProviderService, createLowerMoldComponents, lowerMoldDataStructure, curvePointsData, lowerMoldDataC, simPGMLowerMoldProperties, simPGMLowerCurveData, curveLowerPointsData, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMLowerDieData ) {
        simPGMLowerCurveData = SimPGMDataProviderService.getLowerMoldCurveObject();
        simPGMLowerInsertData = SimPGMDataProviderService.getLowerMoldInsertObject();
        for (var key in simPGMLowerInsertData){
            if(typeof (simPGMLowerInsertData[key]) === "string"){
                simPGMLowerInsertData[key] = parseFloat(simPGMLowerInsertData[key])
            }
        }
        simPGMLowerMoldProperties.setD_Insert(simPGMLowerInsertData.D_Insert);
        simPGMLowerMoldProperties.setH_Insert(simPGMLowerInsertData.H_Insert);
        simPGMLowerMoldProperties.setH_1_Insert(simPGMLowerInsertData.H_1_Insert);
        simPGMLowerMoldProperties.setD_1_Insert(simPGMLowerInsertData.D_1_Insert);
        var relativeDataForLowerCurve = createLowerMoldComponents.createCurve(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,simPGMLowerCurveData);
        var relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData);
        var combinationofRelativeDataLowerForCurveNInsert = relativeDataForLowerInsert.concat(relativeDataForLowerCurve);
        var scalingFunc = new ScalingGangFunction();
        var width_HeightObj = scalingFunc.getHeightNwidthDivisorObj(SimPGMDataProviderService);
        var scalingFactor = scalingFunc.scalingWidthNHeight(drawWidthDiameter_D,drawwidthHeight_H,width_HeightObj.width,width_HeightObj.height);
        var circleData = scalingFunc.multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var insertPolygonColor = d3.select('#lowerMoldInsertId')[0][0].style.fill;
        var mirrorInsertPolygonColor = d3.select('#lowerMoldInsertMirrorId')[0][0].style.fill;
        d3.selectAll('#globalSVG .lowerMoldInsertClass').remove();
        configurationToDrawLowerInsert(combinationofRelativeDataLowerForCurveNInsert, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMLowerInsertData, insertPolygonColor, mirrorInsertPolygonColor, circleData);
        respondToLowerMoldDie(simPGMLowerDieData, SimPGMDataProviderService, createLowerMoldComponents, lowerMoldDataStructure, curveLowerPointsData, curvePointsData, lowerMoldDataC, simPGMLowerMoldProperties, drawWidthDiameter_D, drawwidthHeight_H,  eachPolygon, $scope, svgContainer, simPGMLowerInsertData, simPGMLowerCurveData, false)
    }

    var drawCircle = function(svgContainer,circleData){
        console.log('drawCircle',circleData);
        svgContainer.selectAll("circle")
                    .data(circleData)
                    .enter()
                    .append("circle")
                    .attr("cx",function (d) { return d.x})
                    .attr("cy",function (d) { return d.y})
                    .attr("r", 5)
                    .attr("id", "insertCircleId")
                    .attr("fill", "yellow")
    }

    var configurationToDrawLowerInsert = function (combinationofRelativeDataLowerForCurveNInsert, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMLowerInsertData, insertPolygonColor, mirrorInsertPolygonColor, circleData ) {
        var afterScalingFactorRelativeDataForLowerInsertNCurveTogether = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether = new ScalingGangFunction().multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var max_X_Value = Math.max.apply(null,afterScalingFactorRelativeDataForLowerInsertNCurveTogether.map(function (currentObject) {
            return currentObject.x;
        }));
        var min_X_Value = Math.min.apply(null,afterScalingFactorRelativeDataForLowerInsertNCurveTogether.map(function (currentObject) {
            return currentObject.x;
        }));
        var max_Y_Value = Math.max.apply(null,afterScalingFactorRelativeDataForLowerInsertNCurveTogether.map(function (currentObject) {
            return currentObject.y;
        }));
        var min_Y_Value = Math.min.apply(null,afterScalingFactorRelativeDataForLowerInsertNCurveTogether.map(function (currentObject) {
            return currentObject.y;
        }));

        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertMirrorId','lowerMoldInsertMirrorPolygon',afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether,null,null,simPGMLowerInsertData,insertPolygonColor,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertId','lowerMoldInsertPolygon',afterScalingFactorRelativeDataForLowerInsertNCurveTogether,null,null,simPGMLowerInsertData,mirrorInsertPolygonColor,$scope);
        //drawCircle(svgContainer,circleData);
    }

    var respondToLowerMoldCurve = function () {

    }

    return{
        respondToLowerMoldDie: respondToLowerMoldDie,
        respondToLowerMoldInsert: respondToLowerMoldInsert,
        respondToLowerMoldCurve: respondToLowerMoldCurve
    }
}