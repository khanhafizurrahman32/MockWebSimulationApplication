/**
 * Created by khanhafizurrahman on 1/6/18.
 */

var respondToUpperMold = function(){
    var respondToUpperMoldDie = function(simPGMUpperDieData,SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, curvePointsData, upperMoldDataC, simPGMUpperMoldProperties, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMUpperInsertData, callFromDrawMoldDirective, lastObjectToDrawEverything, scalingFunc, defineSVGdrawPropertiesObject, relativeDataForCircle){
        simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
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

        var width_HeightObj = scalingFunc.getHeightNwidthDivisorObj(SimPGMDataProviderService);
        var scalingFactor = scalingFunc.scalingWidthNHeight(drawWidthDiameter_D,drawwidthHeight_H,width_HeightObj.width,width_HeightObj.height);
        configurationToDrawUpperDie(createUpperMoldComponents,SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties,simPGMUpperDieData, relativeDataForUpperDie, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H,  eachPolygon, $scope, svgContainer, lastObjectToDrawEverything, scalingFunc, defineSVGdrawPropertiesObject, relativeDataForCircle);

    }

    var configurationToDrawUpperDie = function (createUpperMoldComponents,SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties,simPGMUpperDieData, relativeDataForUpperDie, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H,  eachPolygon, $scope, svgContainer, lastObjectToDrawEverything, scalingFunc, defineSVGdrawPropertiesObject, relativeDataForCircle) {
        var remainingSpaceforUpperMold = calculateRemainingSpaceForUpperMold(scalingFactor,SimPGMDataProviderService,relativeDataForCircle,defineSVGdrawPropertiesObject);
        var afterScalingFactorRelativeDataForUpperDie = scalingFunc.multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var combinationofRelativeDataUpperForCurveNInsert = configureInsertData(SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties);
        var afterScalingFactorRelativeDataForUpperInsertNCurve = scalingFunc.multiplyingEachUpperPointWithScalingFactor(combinationofRelativeDataUpperForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var maxBetweenDie_N_Insert = findMaximumPointBetweenCurveNInsert(afterScalingFactorRelativeDataForUpperDie,afterScalingFactorRelativeDataForUpperInsertNCurve)
        var transformingDelta = maxBetweenDie_N_Insert - remainingSpaceforUpperMold;
        SimPGMDataProviderService.setTransformingDelta(transformingDelta);
        lastObjectToDrawEverything.settingUpperInsertDataBeforeFinalDraw(SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,transformingDelta)
        var afterAdjustHeightScalingFactorRelativeDataForUpperDie =scalingFunc.adjustHeightAfterScaling(afterScalingFactorRelativeDataForUpperDie, transformingDelta);
        SimPGMDataProviderService.setAfterScalingUpperDieData(afterAdjustHeightScalingFactorRelativeDataForUpperDie);
        var afterScalingFactorRelativeDataForMirrorUpperDie = scalingFunc.multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie = scalingFunc.adjustHeightAfterScaling(afterScalingFactorRelativeDataForMirrorUpperDie, transformingDelta);
        SimPGMDataProviderService.setAfterScalingMirrorUpperDieData(afterAdjustHeightScalingFactorRelativeDataForMirrorUpperDie);
        lastObjectToDrawEverything.drawEveryThingAfterScaling(SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject, scalingFunc, eachPolygon, $scope, svgContainer);
    }


    var respondToUpperMoldInsert = function (simPGMUpperInsertData, SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, curvePointsData, upperMoldDataC, simPGMUpperMoldProperties, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMUpperDieData, callFromDrawMoldDirective, lastObjectToDrawEverything, scalingFunc, defineSVGdrawPropertiesObject, relativeDataForCircle) {
        simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
        for(var key in simPGMUpperInsertData){
            if(typeof (simPGMUpperInsertData[key]) === "string"){
                var stringValue = simPGMUpperInsertData[key];
                var subStringValue = stringValue.split(".")[1];
                if((stringValue[stringValue.length - 1] !== ".") && (parseFloat(subStringValue) !== 0))
                    simPGMUpperInsertData[key] = parseFloat(simPGMUpperInsertData[key])
            }
        }
        simPGMUpperMoldProperties.setD_Insert(simPGMUpperInsertData.D_Insert);
        simPGMUpperMoldProperties.setH_Insert(simPGMUpperInsertData.H_Insert);
        simPGMUpperMoldProperties.setH_1_Insert(simPGMUpperInsertData.H_1_Insert);
        simPGMUpperMoldProperties.setD_1_Insert(simPGMUpperInsertData.D_1_Insert);
        simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
        SimPGMDataProviderService.setUpperMoldDieObject(simPGMUpperInsertData.D_Insert,simPGMUpperDieData.D_Mold,simPGMUpperDieData.H_Mold,simPGMUpperDieData.H_1_Sleeve_1,simPGMUpperInsertData.H_1_Insert,simPGMUpperInsertData.D_1_Insert);
        var combinationofRelativeDataUpperForCurveNInsert = configureInsertData(SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties);
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
        var width_HeightObj = scalingFunc.getHeightNwidthDivisorObj(SimPGMDataProviderService);
        var scalingFactor = scalingFunc.scalingWidthNHeight(drawWidthDiameter_D,drawwidthHeight_H,width_HeightObj.width,width_HeightObj.height);
        //scalingFunc.multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        configurationToDrawUpperInsert(combinationofRelativeDataUpperForCurveNInsert, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMUpperInsertData, SimPGMDataProviderService, lastObjectToDrawEverything, defineSVGdrawPropertiesObject, scalingFunc, simPGMUpperDieData, relativeDataForCircle, defineSVGdrawPropertiesObject, SimPGMDataProviderService, scalingFunc, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties);
    }

    var configurationToDrawUpperInsert = function (combinationofRelativeDataUpperForCurveNInsert, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMUpperInsertData, SimPGMDataProviderService, lastObjectToDrawEverything, defineSVGdrawPropertiesObject, scalingFunc, simPGMUpperDieData, relativeDataForCircle, defineSVGdrawPropertiesObject, SimPGMDataProviderService, scalingFunc, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties) {
        var remainingSpaceforUpperMold = calculateRemainingSpaceForUpperMold(scalingFactor,SimPGMDataProviderService,relativeDataForCircle,defineSVGdrawPropertiesObject)
        var afterScalingFactorRelativeDataForUpperInsertNCurve = scalingFunc.multiplyingEachUpperPointWithScalingFactor(combinationofRelativeDataUpperForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForUpperDie = configureDieData(SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H);
        var maxBetweenDie_N_Insert = findMaximumPointBetweenCurveNInsert(afterScalingFactorRelativeDataForUpperDie,afterScalingFactorRelativeDataForUpperInsertNCurve);
        var transformingDelta = maxBetweenDie_N_Insert - remainingSpaceforUpperMold;
        SimPGMDataProviderService.setTransformingDelta(transformingDelta);
        // configureDieData(SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,transformingDelta);
        lastObjectToDrawEverything.settingUpperDieDataBeforeFinalDraw(SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,transformingDelta)
        var afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForUpperInsertNCurve, transformingDelta);
        SimPGMDataProviderService.setAfterScalingUpperInsertData(afterAdjustHeightScalingFactorRelativeDataForUpperInsertNCurveTogether);
        var afterScalingFactorRelativeDataForMirrorUpperInsertNCurve = scalingFunc.multiplyingEachUpperPointWithScalingFactor(combinationofRelativeDataUpperForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        var afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether = new ScalingGangFunction().adjustHeightAfterScaling(afterScalingFactorRelativeDataForMirrorUpperInsertNCurve, transformingDelta);
        SimPGMDataProviderService.setAfterScalingMirrorUpperInsertData(afterAdjustHeightScalingFactorRelativeDataForMirrorUpperInsertNCurveTogether);
        lastObjectToDrawEverything.drawEveryThingAfterScaling(SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject, scalingFunc, eachPolygon, $scope, svgContainer)
    }
    var respondToUpperMoldCurve = function () {

    }

    var calculateRemainingSpaceForUpperMold = function (scalingFactor,SimPGMDataProviderService,relativeDataForCircle,defineSVGdrawPropertiesObject) {
        var totalDistancebetweenGroundtoUpperMold = scalingFactor * (SimPGMDataProviderService.getLowerMoldDieObject().H_Mold + relativeDataForCircle[0].radius*2 + .001);
        var remainingSpaceforUpperMold = defineSVGdrawPropertiesObject.getViewBoxHeight() - totalDistancebetweenGroundtoUpperMold;
        return remainingSpaceforUpperMold;
    }


    var configureInsertData = function (SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties) {
        var simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
        var relativeDataForUpperCurve = createUpperMoldComponents.createCurve(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,simPGMUpperInsertData);
        var relativeDataForUpperInsert = createUpperMoldComponents.createInsert(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperInsertData,'upper');
        var combinationofRelativeDataUpperForCurveNInsert = relativeDataForUpperCurve.concat(relativeDataForUpperInsert);
        return combinationofRelativeDataUpperForCurveNInsert;
    }

    var configureDieData = function (SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H) {
        var simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
        var relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData,'upper');
        var afterScalingFactorRelativeDataForUpperDie = scalingFunc.multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        return afterScalingFactorRelativeDataForUpperDie
    }

    var findMaximumPointBetweenCurveNInsert = function(afterScalingFactorRelativeDataForUpperDie,afterScalingFactorRelativeDataForUpperInsertNCurve){
        var maxBetweenDie_N_Insert = -9999;
        var maxPointOfAfterScalingFactorRelativeDataForUpperDie = Math.max.apply(Math, afterScalingFactorRelativeDataForUpperDie.map(function (currentObj) {
            return currentObj.y;
        }))
        var maxPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve = Math.max.apply(Math, afterScalingFactorRelativeDataForUpperInsertNCurve.map(function (currentObj) {
            return currentObj.y;
        }))
        if(maxPointOfAfterScalingFactorRelativeDataForUpperDie >= maxPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve){
            maxBetweenDie_N_Insert = maxPointOfAfterScalingFactorRelativeDataForUpperDie;
        }else{
            maxBetweenDie_N_Insert = maxPointOfAfterScalingFactorRelativeDataForUpperInsertNCurve;
        }
        return maxBetweenDie_N_Insert;
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
