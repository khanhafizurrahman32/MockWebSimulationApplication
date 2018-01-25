/**
 * Created by khanhafizurrahman on 1/6/18.
 */

var respondToLowerMold = function(){
    var respondToLowerMoldDie = function(simPGMLowerDieData, SimPGMDataProviderService, createLowerMoldComponents, lowerMoldDataStructure, curveLowerPointsData, curvePointsData, lowerMoldDataC, simPGMLowerMoldProperties, drawWidthDiameter_D, drawwidthHeight_H,  eachPolygon, $scope, svgContainer, simPGMLowerInsertData, callFromDrawMoldDirective, lastObjectToDrawEverything, scalingFunc, defineSVGdrawPropertiesObject, createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties){
        simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
        for (var key in simPGMLowerDieData){
            if(typeof (simPGMLowerDieData[key]) === "string"){
                if(parseFloat(simPGMLowerDieData[key]) !== 0)
                    simPGMLowerDieData[key] = parseFloat(simPGMLowerDieData[key])
            }
        }
        simPGMLowerMoldProperties.setD_Mold(simPGMLowerDieData.D_Mold);
        simPGMLowerMoldProperties.setH_Mold(simPGMLowerDieData.H_Mold);
        simPGMLowerMoldProperties.setH_Sleeve_1(simPGMLowerDieData.H_1_Sleeve_1);
        simPGMLowerInsertData = SimPGMDataProviderService.getLowerMoldInsertObject();
       // not sure about the below line
        SimPGMDataProviderService.setLowerMoldInsertObject(simPGMLowerInsertData.D_Insert,simPGMLowerDieData.D_Mold,simPGMLowerDieData.H_Mold,simPGMLowerInsertData.H_1_Sleeve_1,simPGMLowerInsertData.H_Insert,simPGMLowerInsertData.H_1_Insert,simPGMLowerInsertData.D_1_Insert,simPGMLowerInsertData.D_surf_Mold,simPGMLowerInsertData.R_surf_Mold,simPGMLowerInsertData.K_surf_Mold,simPGMLowerInsertData.A2_surf_Mold,simPGMLowerInsertData.A4_surf_Mold,simPGMLowerInsertData.A6_surf_Mold,simPGMLowerInsertData.A8_surf_Mold,simPGMLowerInsertData.A10_surf_Mold,simPGMLowerInsertData.A12_surf_Mold,simPGMLowerInsertData.A14_surf_Mold,simPGMLowerInsertData.A16_surf_Mold,simPGMLowerInsertData.A18_surf_Mold,simPGMLowerInsertData.A20_surf_Mold);
        var relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData,'lower');
        relativeDataForLowerDie.forEach(function (individualObject) {
            if(typeof individualObject === "undefined")
                console.log("undefined")
        })
        var width_HeightObj = scalingFunc.getHeightNwidthDivisorObj(SimPGMDataProviderService);
        var scalingFactor = scalingFunc.scalingWidthNHeight(drawWidthDiameter_D,drawwidthHeight_H,width_HeightObj.width,width_HeightObj.height);
        lastObjectToDrawEverything.settingLowerInsertDataBeforeFinalDraw(simPGMLowerInsertData, SimPGMDataProviderService, createLowerMoldComponents, lowerMoldDataStructure, curveLowerPointsData, lowerMoldDataC, simPGMLowerMoldProperties, scalingFunc, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H);
        //lastObjectToDrawEverything.settingUpperDieDataBeforeFinalDraw(SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,SimPGMDataProviderService.getTransformingDelta());
        //lastObjectToDrawEverything.settingUpperInsertDataBeforeFinalDraw(SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,SimPGMDataProviderService.getTransformingDelta());
        configurationToDrawLowerDie(createLowerMoldComponents,SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData, lowerMoldDataC, simPGMLowerMoldProperties,simPGMLowerDieData, relativeDataForLowerDie, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H,  eachPolygon, $scope, svgContainer, lastObjectToDrawEverything, scalingFunc, defineSVGdrawPropertiesObject);
    }


    // var configurationToDrawLowerDie = function (createLowerMoldComponents,SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData, lowerMoldDataC, simPGMLowerMoldProperties,simPGMLowerDieData, relativeDataForLowerDie, diePolygonColor, mirrorDiePolygonColor, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H,  eachPolygon, $scope, svgContainer, lastObjectToDrawEverything, scalingFunc, defineSVGdrawPropertiesObject) {
    var configurationToDrawLowerDie = function (createLowerMoldComponents,SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData, lowerMoldDataC, simPGMLowerMoldProperties,simPGMLowerDieData, relativeDataForLowerDie, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H,  eachPolygon, $scope, svgContainer, lastObjectToDrawEverything, scalingFunc, defineSVGdrawPropertiesObject) {

        var afterScalingFactorRelativeDataForLowerDie = scalingFunc.multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerDie = scalingFunc.multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        SimPGMDataProviderService.setAfterScalingLowerDieData(afterScalingFactorRelativeDataForLowerDie);
        SimPGMDataProviderService.setAfterScalingMirrorLowerDieData(afterScalingFactorRelativeDataForMirrorLowerDie);
        lastObjectToDrawEverything.drawEveryThingAfterScaling(SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject, scalingFunc, eachPolygon, $scope, svgContainer);
    }

    var respondToLowerMoldInsert = function (simPGMLowerInsertData, SimPGMDataProviderService, createLowerMoldComponents, lowerMoldDataStructure, curveLowerPointsData, curvePointsData, lowerMoldDataC, simPGMLowerMoldProperties, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMLowerDieData, callFromDrawMoldDirective, lastObjectToDrawEverything, scalingFunc, defineSVGdrawPropertiesObject, createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties ) {
        simPGMLowerInsertData = SimPGMDataProviderService.getLowerMoldInsertObject();
        for (var key in simPGMLowerInsertData){
            if(typeof (simPGMLowerInsertData[key]) === "string"){
                // if(parseFloat(simPGMLowerInsertData[key]) !== 0)
                var stringValue = simPGMLowerInsertData[key];
                if((stringValue[stringValue.length - 1] !== "."))
                    simPGMLowerInsertData[key] = parseFloat(simPGMLowerInsertData[key])
            }
        }
        simPGMLowerMoldProperties.setD_Insert(simPGMLowerInsertData.D_Insert);
        simPGMLowerMoldProperties.setH_Insert(simPGMLowerInsertData.H_Insert);
        simPGMLowerMoldProperties.setH_1_Insert(simPGMLowerInsertData.H_1_Insert);
        simPGMLowerMoldProperties.setD_1_Insert(simPGMLowerInsertData.D_1_Insert);
        simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
        SimPGMDataProviderService.setLowerMoldDieObject(simPGMLowerInsertData.D_Insert,simPGMLowerDieData.D_Mold,simPGMLowerDieData.H_Mold,simPGMLowerDieData.H_1_Sleeve_1,simPGMLowerInsertData.H_1_Insert,simPGMLowerInsertData.D_1_Insert);
        var relativeDataForLowerCurve = createLowerMoldComponents.createCurve(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,simPGMLowerInsertData);
        var relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData,'lower');
        var combinationofRelativeDataLowerForCurveNInsert = relativeDataForLowerCurve.concat(relativeDataForLowerInsert);
        for (var objNumber in combinationofRelativeDataLowerForCurveNInsert){
            var objectVal = SimPGMDataProviderService.getChangePropertyName();
            if(typeof combinationofRelativeDataLowerForCurveNInsert[objNumber] === "undefined"){
                $('#'+ objectVal +'_L_Label').css({'color':'red'});
                    $('#'+objectVal +'_L_id').css({'border-color': 'red'});
                    disableOtherInputs(simPGMLowerInsertData,objectVal);
                    break;
                }else{
                    $('#'+ objectVal +'_L_Label').css({'color':'black'});
                    $('#'+ objectVal +'_L_id').css({'border-color': ''});
                    enableOtherInputs(simPGMLowerInsertData)
                }
        }
        var width_HeightObj = scalingFunc.getHeightNwidthDivisorObj(SimPGMDataProviderService);
        var scalingFactor = scalingFunc.scalingWidthNHeight(drawWidthDiameter_D,drawwidthHeight_H,width_HeightObj.width,width_HeightObj.height);
        // i dont know why but after comment out the bottom line it shows can not read property of null
        scalingFunc.multiplyingEachLowerPointWithScalingFactor(relativeDataForLowerInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        lastObjectToDrawEverything.settingLowerDieDataBeforeFinalDraw(simPGMLowerDieData,SimPGMDataProviderService,createLowerMoldComponents,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H);
        //lastObjectToDrawEverything.settingUpperDieDataBeforeFinalDraw(SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,SimPGMDataProviderService.getTransformingDelta());
        //lastObjectToDrawEverything.settingUpperInsertDataBeforeFinalDraw(SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,SimPGMDataProviderService.getTransformingDelta());
        configurationToDrawLowerInsert(combinationofRelativeDataLowerForCurveNInsert, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMLowerInsertData, SimPGMDataProviderService, lastObjectToDrawEverything, defineSVGdrawPropertiesObject, scalingFunc);
    }

    var configurationToDrawLowerInsert = function (combinationofRelativeDataLowerForCurveNInsert, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMLowerInsertData, SimPGMDataProviderService, lastObjectToDrawEverything, defineSVGdrawPropertiesObject, scalingFunc) {
        var afterScalingFactorRelativeDataForLowerInsertNCurveTogether = scalingFunc.multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether = scalingFunc.multiplyingEachLowerPointWithScalingFactor(combinationofRelativeDataLowerForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        SimPGMDataProviderService.setAfterScalingLowerInsertData(afterScalingFactorRelativeDataForLowerInsertNCurveTogether);
        SimPGMDataProviderService.setAfterScalingMirrorLowerInsertData(afterScalingFactorRelativeDataForMirrorLowerInsertNCurveTogether);
        lastObjectToDrawEverything.drawEveryThingAfterScaling(SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject, scalingFunc, eachPolygon, $scope, svgContainer)
    }




    var respondToLowerMoldCurve = function () {

    }

    var disableOtherInputs = function (typeOfData,objectVal) {
        var notDisabled = "#"+objectVal +'_L_id';
        for (var key in typeOfData){
            if(key !== 'changedTextBoxName'){
                var individualId = "#"+ key + "_L_id";
                if(individualId !== notDisabled){
                    if($(individualId).length !== 0){
                        $(individualId).attr("disabled",true);
                    }
                }
            }
        }
    }

    var enableOtherInputs = function(typeOfData,objectVal){
        var notDisabled = "#"+objectVal +'_L_id';
        for (var key in typeOfData){
            if(key !== 'changedTextBoxName'){
                var individualId = "#"+ key + "_L_id";
                if(individualId !== notDisabled){
                    if($(individualId).length !== 0){
                        $(individualId).attr("disabled",false);
                    }
                }
            }
        }
    }
    return{
        respondToLowerMoldDie: respondToLowerMoldDie,
        respondToLowerMoldInsert: respondToLowerMoldInsert,
        respondToLowerMoldCurve: respondToLowerMoldCurve
    }
}