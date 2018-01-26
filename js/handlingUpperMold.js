/**
 * Created by khanhafizurrahman on 1/6/18.
 */

var respondToUpperMold = function(){
    var respondToUpperMoldDie = function(simPGMUpperDieData,SimPGMDataProviderService, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, curvePointsData, upperMoldDataC, simPGMUpperMoldProperties, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMUpperInsertData, callFromDrawMoldDirective, lastObjectToDrawEverything, scalingFunc, defineSVGdrawPropertiesObject, relativeDataForCircle){
        simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
        for (var key in simPGMUpperDieData){
            if(typeof (simPGMUpperDieData[key]) === "string"){
                var stringValue = simPGMUpperDieData[key];
                var subStringValue = stringValue.split(".")[1];
                if((stringValue[stringValue.length - 1] !== ".") && (parseFloat(subStringValue) !== 0))
                    simPGMUpperDieData[key] = parseFloat(simPGMUpperDieData[key])
            }
        }
        simPGMUpperMoldProperties.setD_Mold(simPGMUpperDieData.D_Mold);
        simPGMUpperMoldProperties.setH_Mold(simPGMUpperDieData.H_Mold);
        simPGMUpperMoldProperties.setH_1_Sleeve_1(simPGMUpperDieData.H_1_Sleeve_1);
        simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
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
        relativeDataForUpperDie = shiftingUpperMold(SimPGMDataProviderService,changingYPoints(relativeDataForUpperDie));
        var afterScalingFactorRelativeDataForUpperDie = scalingFunc.multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorUpperDie = scalingFunc.multiplyingEachUpperPointWithScalingFactor(relativeDataForUpperDie,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        lastObjectToDrawEverything.settingUpperInsertDataBeforeFinalDraw(SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,relativeDataForCircle,defineSVGdrawPropertiesObject);
        SimPGMDataProviderService.setAfterScalingUpperDieData(afterScalingFactorRelativeDataForUpperDie);
        SimPGMDataProviderService.setAfterScalingMirrorUpperDieData(afterScalingFactorRelativeDataForMirrorUpperDie);
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
        configurationToDrawUpperInsert(combinationofRelativeDataUpperForCurveNInsert, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMUpperInsertData, SimPGMDataProviderService, lastObjectToDrawEverything, defineSVGdrawPropertiesObject, scalingFunc, simPGMUpperDieData, relativeDataForCircle, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties);
    }

    var configurationToDrawUpperInsert = function (combinationofRelativeDataUpperForCurveNInsert, scalingFactor, drawWidthDiameter_D, drawwidthHeight_H, eachPolygon, $scope, svgContainer, simPGMUpperInsertData, SimPGMDataProviderService, lastObjectToDrawEverything, defineSVGdrawPropertiesObject, scalingFunc, simPGMUpperDieData, relativeDataForCircle, createUpperMoldComponents, upperMoldDataStructure, curveUpperPointsData, upperMoldDataC, simPGMUpperMoldProperties) {
        combinationofRelativeDataUpperForCurveNInsert = shiftingUpperMold(SimPGMDataProviderService,changingYPoints(combinationofRelativeDataUpperForCurveNInsert));
        var afterScalingFactorRelativeDataForUpperInsertNCurve = scalingFunc.multiplyingEachUpperPointWithScalingFactor(combinationofRelativeDataUpperForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Original');
        var afterScalingFactorRelativeDataForMirrorUpperInsertNCurve = scalingFunc.multiplyingEachUpperPointWithScalingFactor(combinationofRelativeDataUpperForCurveNInsert,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,'Mirror');
        console.log(curveUpperPointsData.y_RF_surf_fin_Mold);
        lastObjectToDrawEverything.settingUpperDieDataBeforeFinalDraw(SimPGMDataProviderService,createUpperMoldComponents,upperMoldDataStructure,curveUpperPointsData,upperMoldDataC,simPGMUpperMoldProperties,scalingFunc,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,relativeDataForCircle, defineSVGdrawPropertiesObject)
        SimPGMDataProviderService.setAfterScalingUpperInsertData(afterScalingFactorRelativeDataForUpperInsertNCurve);
        SimPGMDataProviderService.setAfterScalingMirrorUpperInsertData(afterScalingFactorRelativeDataForMirrorUpperInsertNCurve);
        lastObjectToDrawEverything.drawEveryThingAfterScaling(SimPGMDataProviderService,scalingFactor,defineSVGdrawPropertiesObject, scalingFunc, eachPolygon, $scope, svgContainer)
    }
    var respondToUpperMoldCurve = function () {

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

    var changingYPoints = function (currentObjectArray) {
        var newUpperMoldPoints = [];
        var changingYPositions = currentObjectArray.map(function (currentObject) {
            return -currentObject.y ;
        });

        for (var i in currentObjectArray){
            newUpperMoldPoints.push({x : currentObjectArray[i].x, y: changingYPositions[i]})
        }

        return newUpperMoldPoints;
    }

    var shiftingUpperMold = function (SimPGMDataProviderService,currentObjectArray) {
        var centrePoint = SimPGMDataProviderService.getCentrePoints();
        var circleDiameter = 2 * SimPGMDataProviderService.circleData()[0].radius;
        var shiftingPosition = centrePoint.y + circleDiameter + 0.001;
        var newUpperMoldPoints = [];
        var changingYPositions = currentObjectArray.map(function (currentObject) {
            return currentObject.y - shiftingPosition ;
        });

        for (var i in currentObjectArray){
            newUpperMoldPoints.push({x : currentObjectArray[i].x, y: changingYPositions[i]})
        }

        return newUpperMoldPoints;
    }

    return{
        respondToUpperMoldDie: respondToUpperMoldDie,
        respondToUpperMoldInsert: respondToUpperMoldInsert,
        respondToUpperMoldCurve: respondToUpperMoldCurve
    }
}
