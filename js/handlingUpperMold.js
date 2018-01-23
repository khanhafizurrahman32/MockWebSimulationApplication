/**
 * Created by khanhafizurrahman on 1/6/18.
 */

var respondToUpperMold = function(){
    var respondToUpperMoldDie = function(SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, curvePointsData, upperMoldDataC, simPGMUpperMoldProperties, eachPolygon, $scope, scalingFactor, relativeDataForCircle, defineSVGdrawPropertiesObject, drawWidthDiameter_D, drawwidthHeight_H, svgContainer, simPGMUpperInsertData, callFromDrawMoldDirective ){
        var simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
        for (var key in simPGMUpperDieData){
            if(typeof (simPGMUpperDieData[key]) === "string"){
                if(parseFloat(simPGMUpperDieData[key]) !== 0)
                    simPGMUpperDieData[key] = parseFloat(simPGMUpperDieData[key])
            }
        }
        simPGMUpperMoldProperties.setD_Mold(simPGMUpperDieData.D_Mold);
        simPGMUpperMoldProperties.setH_Mold(simPGMUpperDieData.H_Mold);
        simPGMUpperMoldProperties.setH_1_Sleeve_1(simPGMUpperDieData.H_1_Sleeve_1);
        simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
        // not sure about the below line
        SimPGMDataProviderService.setUpperMoldInsertObject(simPGMUpperInsertData.D_Insert,simPGMUpperDieData.D_Mold,simPGMUpperDieData.H_Mold,simPGMUpperInsertData.H_1_Sleeve_1,simPGMUpperInsertData.H_Insert,simPGMUpperInsertData.H_1_Insert,simPGMUpperInsertData.D_1_Insert,simPGMUpperInsertData.D_surf_Mold,simPGMUpperInsertData.R_surf_Mold,simPGMUpperInsertData.K_surf_Mold,simPGMUpperInsertData.A2_surf_Mold,simPGMUpperInsertData.A4_surf_Mold,simPGMUpperInsertData.A6_surf_Mold,simPGMUpperInsertData.A8_surf_Mold,simPGMUpperInsertData.A10_surf_Mold,simPGMUpperInsertData.A12_surf_Mold,simPGMUpperInsertData.A14_surf_Mold,simPGMUpperInsertData.A16_surf_Mold,simPGMUpperInsertData.A18_surf_Mold,simPGMUpperInsertData.A20_surf_Mold);
        var relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData,'upper');
        relativeDataForUpperDie.forEach(function (individualObject) {
            if(typeof individualObject === "undefined")
                console.log("undefined")
        })
        var scalingFunc = new ScalingGangFunction();
        var width_HeightObj = scalingFunc.getHeightNwidthDivisorObj(SimPGMDataProviderService);
        var scalingFactor = scalingFunc.scalingWidthNHeight(drawWidthDiameter_D,drawwidthHeight_H,width_HeightObj.width,width_HeightObj.height);
        var diePolygonColor = d3.select('#upperMoldDieId')[0][0].style.fill;
        var mirrorDiePolygonColor = d3.select('#upperMoldDieMirrorId')[0][0].style.fill;
        d3.selectAll('#globalSVG .upperMoldDieClass').remove();
        configurationToDrawUpperDie(createUpperMoldComponents,SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties,simPGMUpperDieData, relativeDataForUpperDie, diePolygonColor, mirrorDiePolygonColor, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H,  eachPolygon, $scope, svgContainer, relativeDataForCircle, defineSVGdrawPropertiesObject, scalingFunc);
        if(callFromDrawMoldDirective){
            respondToUpperMoldInsert(SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curvePointsData, upperMoldDataC, simPGMUpperMoldProperties, curveUpperPointsData, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMUpperDieData, false , relativeDataForCircle, defineSVGdrawPropertiesObject);
        }

    }

    var configurationToDrawUpperDie = function (createUpperMoldComponents,SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties,simPGMUpperDieData, relativeDataForUpperDie, diePolygonColor, mirrorDiePolygonColor, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H,  eachPolygon, $scope, svgContainer, relativeDataForCircle, defineSVGdrawPropertiesObject, scalingFunc) {
        var totalDistancebetweenGroundtoUpperMold = scalingFactor * (SimPGMDataProviderService.getLowerMoldDieObject().H_Mold + relativeDataForCircle[0].radius*2 + .001);
        var remainingSpaceforUpperMold = defineSVGdrawPropertiesObject.getViewBoxHeight() - totalDistancebetweenGroundtoUpperMold;
        var afterScalingFactorRelativeDataForUpperDie = new ScalingGangFunction().multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');

        var simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
        var relativeDataForUpperCurve = createUpperMoldComponents.createCurve(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,simPGMUpperInsertData);
        var relativeDataForUpperInsert = createUpperMoldComponents.createInsert(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperInsertData,'upper');
        var combinationofRelativeDataUpperForCurveNInsert = relativeDataForUpperCurve.concat(relativeDataForUpperInsert);
        var afterScalingFactorRelativeDataForUpperInsertNCurve = scalingFunc.multiplyingEachUpperPointWithScalingFactor(combinationofRelativeDataUpperForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var maximumDieYpoint = Math.max.apply(Math, afterScalingFactorRelativeDataForUpperDie.map(function (currentObj) {
            return currentObj.y;
        }))
        var maximumInsertYpoint = Math.max.apply(Math, afterScalingFactorRelativeDataForUpperInsertNCurve.map(function (currentObj) {
            return currentObj.y;
        }))
        var maxbetweenDieNInsertplusCurve = (maximumInsertYpoint > maximumDieYpoint) ? maximumInsertYpoint : maximumDieYpoint;
        console.log(maximumDieYpoint, maximumInsertYpoint, maxbetweenDieNInsertplusCurve);
        var adjustRatioForUpperWithRest = remainingSpaceforUpperMold - Math.max.apply(Math, afterScalingFactorRelativeDataForUpperDie.map(function (currentObj) {
            return currentObj.y;
        }))
        var afterAdjustHeightScalingFactorRelativeDataForUpperDie = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForUpperDie, adjustRatioForUpperWithRest);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',afterScalingFactorRelativeDataForUpperDie,null,null,simPGMUpperDieData,diePolygonColor, $scope);
        // eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',afterAdjustHeightScalingFactorRelativeDataForUpperDie,null,null,simPGMUpperDieData,diePolygonColor, $scope);
        var afterScalingFactorRelativeDataForMirrorUpperDie = new ScalingGangFunction().multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForMirrorUpperDie, adjustRatioForUpperWithRest);
        // eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieMirrorId','upperMoldDieMirrorPolygon',afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie,null,null,simPGMUpperDieData,mirrorDiePolygonColor,$scope);
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieMirrorId','upperMoldDieMirrorPolygon',afterScalingFactorRelativeDataForMirrorUpperDie,null,null,simPGMUpperDieData,mirrorDiePolygonColor,$scope);

    }

    var respondToUpperMoldInsert = function (SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curvePointsData, upperMoldDataC, simPGMUpperMoldProperties, curveUpperPointsData, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMUpperDieData, callFromDrawMoldDirective, relativeDataForCircle, defineSVGdrawPropertiesObject) {
        var simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
        for(var key in simPGMUpperInsertData){
            if(typeof (simPGMUpperInsertData[key]) === "string"){
                var stringValue = simPGMUpperInsertData[key];
                if((stringValue[stringValue.length - 1] !== "."))
                    simPGMUpperInsertData[key] = parseFloat(simPGMUpperInsertData[key])
            }
        }
        simPGMUpperMoldProperties.setD_Insert(simPGMUpperInsertData.D_Insert);
        simPGMUpperMoldProperties.setH_Insert(simPGMUpperInsertData.H_Insert);
        simPGMUpperMoldProperties.setH_1_Insert(simPGMUpperInsertData.H_1_Insert);
        simPGMUpperMoldProperties.setD_1_Insert(simPGMUpperInsertData.D_1_Insert);
        simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
        SimPGMDataProviderService.setUpperMoldDieObject(simPGMUpperInsertData.D_Insert,simPGMUpperDieData.D_Mold,simPGMUpperDieData.H_Mold,simPGMUpperDieData.H_1_Sleeve_1,simPGMUpperInsertData.H_1_Insert,simPGMUpperInsertData.D_1_Insert);
        var relativeDataForUpperCurve = createUpperMoldComponents.createCurve(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,simPGMUpperInsertData);
        var relativeDataForUpperInsert = createUpperMoldComponents.createInsert(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperInsertData,'upper');
        var combinationofRelativeDataUpperForCurveNInsert = relativeDataForUpperCurve.concat(relativeDataForUpperInsert);
        for (var objNumber in combinationofRelativeDataUpperForCurveNInsert){
            var objectVal = SimPGMDataProviderService.getChangePropertyName();
            if(typeof combinationofRelativeDataUpperForCurveNInsert[objNumber] === "undefined"){
                $('#'+ objectVal +'_U_Label').css({'color':'red'});
                $('#'+objectVal +'_U_id').css({'border-color': 'red'});
                disableOtherInputs(simPGMUpperInsertData,objectVal);
                break;
            }else{
                $('#'+ objectVal +'_U_Label').css({'color':'black'});
                $('#'+ objectVal +'_U_id').css({'border-color': ''});
                enableOtherInputs(simPGMUpperInsertData)
            }
        }
        var scalingFunc = new ScalingGangFunction();
        var width_HeightObj = scalingFunc.getHeightNwidthDivisorObj(SimPGMDataProviderService);
        var scalingFactor = scalingFunc.scalingWidthNHeight(drawWidthDiameter_D,drawwidthHeight_H,width_HeightObj.width,width_HeightObj.height);
        scalingFunc.multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var insertPolygonColor = d3.select('#upperMoldInsertId')[0][0].style.fill;
        var mirrorInsertPolygonColor = d3.select('#upperMoldInsertMirrorId')[0][0].style.fill;
        d3.selectAll('#globalSVG .upperMoldInsertClass').remove();
        configurationToDrawUpperInsert(combinationofRelativeDataUpperForCurveNInsert, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMUpperInsertData, insertPolygonColor, mirrorInsertPolygonColor, simPGMUpperDieData, relativeDataForCircle, defineSVGdrawPropertiesObject, SimPGMDataProviderService, scalingFunc);
        console.log(simPGMUpperInsertData);
    }

    var configurationToDrawUpperInsert = function (combinationofRelativeDataUpperForCurveNInsert, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMUpperInsertData, insertPolygonColor, mirrorInsertPolygonColor, simPGMUpperDieData, relativeDataForCircle, defineSVGdrawPropertiesObject, SimPGMDataProviderService, scalingFunc) {
        var totalDistancebetweenGroundtoUpperMold = scalingFactor * (SimPGMDataProviderService.getLowerMoldDieObject().H_Mold + relativeDataForCircle[0].radius*2 + .001);
        var remainingSpaceforUpperMold = defineSVGdrawPropertiesObject.getViewBoxHeight() - totalDistancebetweenGroundtoUpperMold;
        var afterScalingFactorRelativeDataForUpperInsertNCurve = scalingFunc.multiplyingEachUpperPointWithScalingFactor(combinationofRelativeDataUpperForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertId','upperMoldInsertPolygon',afterScalingFactorRelativeDataForUpperInsertNCurve,null,null,simPGMUpperInsertData,insertPolygonColor, $scope);
        var afterScalingFactorRelativeDataForMirrorUpperInsertNCurve = scalingFunc.multiplyingEachUpperPointWithScalingFactor(combinationofRelativeDataUpperForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertMirrorId','upperMoldInsertMirrorPolygon',afterScalingFactorRelativeDataForMirrorUpperInsertNCurve,null,null,simPGMUpperInsertData,mirrorInsertPolygonColor,$scope);
    }
    var respondToUpperMoldCurve = function () {

    }


    var disableOtherInputs = function (typeOfData,objectVal) {
        var notDisabled = "#"+objectVal +'_U_id';
        for (var key in typeOfData){
            if(key !== 'changedTextBoxName'){
                var individualId = "#"+ key + "_U_id";
                if(individualId !== notDisabled){
                    if($(individualId).length !== 0){
                        $(individualId).attr("disabled",true);
                    }
                }
            }
        }
    }

    var enableOtherInputs = function(typeOfData,objectVal){
        var notDisabled = "#"+objectVal +'_U_id';
        for (var key in typeOfData){
            if(key !== 'changedTextBoxName'){
                var individualId = "#"+ key + "_U_id";
                if(individualId !== notDisabled){
                    if($(individualId).length !== 0){
                        $(individualId).attr("disabled",false);
                    }
                }
            }
        }
    }

    return{
        respondToUpperMoldDie: respondToUpperMoldDie,
        respondToUpperMoldInsert: respondToUpperMoldInsert,
        respondToUpperMoldCurve: respondToUpperMoldCurve
    }
}
