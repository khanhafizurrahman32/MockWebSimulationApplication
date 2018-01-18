/**
 * Created by khanhafizurrahman on 12/5/17.
 */

var ScalingGangFunction = function () {

    var scalingWidthNHeight = function (drawWidthDiameter_D,drawwidthHeight_H, widthDivisor, heightDivisor) {
        var aspectRatioWidth = drawWidthDiameter_D / widthDivisor;
        var aspectRatioHeight = drawwidthHeight_H / heightDivisor;
        var scalingFactor = Math.min(aspectRatioWidth, aspectRatioHeight);
        return scalingFactor;
    }

    var multiplyingEachUpperPointWithScalingFactor = function (currentObjectArray,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,typeOfPolygon) {
        var relativeDataForUpper_X_mult_scalingNumber = currentObjectArray.map(function (currentObject) {
            return (scalingFactor * (currentObject.x)) + (drawWidthDiameter_D/2);
        });

        var relativeDataForMirrorUpper_X_mult_scalingNumber = currentObjectArray.map(function (currentObject) {
            return -(scalingFactor * currentObject.x) + (drawWidthDiameter_D/2);
        });

        var relativeDataForUpper_Y_mult_scalingNumber = currentObjectArray.map(function (currentObject) {
            return -(scalingFactor * currentObject.y) + drawwidthHeight_H/2;
        });

        var relativeDataForUpperAfterMult = [];
        if(typeOfPolygon == 'Mirror'){
            for (var i in relativeDataForMirrorUpper_X_mult_scalingNumber)
                relativeDataForUpperAfterMult.push({x: relativeDataForMirrorUpper_X_mult_scalingNumber[i], y: relativeDataForUpper_Y_mult_scalingNumber[i]});
        }else{
            for (var i in relativeDataForUpper_X_mult_scalingNumber)
                relativeDataForUpperAfterMult.push({x: relativeDataForUpper_X_mult_scalingNumber[i], y: relativeDataForUpper_Y_mult_scalingNumber[i]});
        }

        return relativeDataForUpperAfterMult;
    }

    var adjustHeightAfterScaling = function (currentArray, HeightFromGround) {

        var currentArray_M = currentArray.map(function (currentObj) {
            return (currentObj.y + HeightFromGround) -200 ; // all -200 just for better showing
        });

        var relativeDataForUpperAfterMult = [];
        for (var i in currentArray_M)
            relativeDataForUpperAfterMult.push({x: currentArray[i].x, y: currentArray_M[i]});
        return relativeDataForUpperAfterMult;
    }



    var multiplyingEachLowerPointWithScalingFactor = function (currentObjectArray,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H,typeOfPolygon) {
        var relativeDataForLower_X_mult_scalingNumber = currentObjectArray.map(function (currentObject) {
            return (scalingFactor * currentObject.x) + (drawWidthDiameter_D/2);
        });

        var relativeDataForMirrorLowerCurve_X_mult_scalingNumber = currentObjectArray.map(function (currentObject) {
            return -(scalingFactor * currentObject.x) + (drawWidthDiameter_D/2);
        });

        var relativeDataForLower_Y_mult_scalingNumber = currentObjectArray.map(function (currentObject) {
            return ((scalingFactor * currentObject.y) + drawwidthHeight_H) -200;
        });

        var relativeDataForLowerCurveAfterMult = [];
        if(typeOfPolygon == 'Mirror'){
            for (var i in relativeDataForMirrorLowerCurve_X_mult_scalingNumber)
                relativeDataForLowerCurveAfterMult.push({x: relativeDataForMirrorLowerCurve_X_mult_scalingNumber[i], y: relativeDataForLower_Y_mult_scalingNumber[i]});
        }else{
            for (var i in relativeDataForLower_X_mult_scalingNumber)
                relativeDataForLowerCurveAfterMult.push({x: relativeDataForLower_X_mult_scalingNumber[i], y: relativeDataForLower_Y_mult_scalingNumber[i]});
        }
        return relativeDataForLowerCurveAfterMult;
    }


    var multiplyingEachCirclePointWithScalingFactor = function (currentObjectArray,scalingFactor,drawWidthDiameter_D,drawwidthHeight_H) {
        var newObjectArray = [{"x_axis": 0, "y_axis": 0, "radius": 0}];
        newObjectArray[0].x_axis = scalingFactor * currentObjectArray[0].x_axis + (drawWidthDiameter_D/2);
        newObjectArray[0].y_axis = scalingFactor * currentObjectArray[0].y_axis -200;
        newObjectArray[0].radius = scalingFactor * currentObjectArray[0].radius;
        return newObjectArray;
    }

    var getHeightDivisor_2 = function (createLowerMoldComponents, SimPGMDataProviderService, lowerMoldDataStructure, curveLowerPointsData, simPGMLowerCurveData, lowerMoldDataC, simPGMLowerMoldProperties, simPGMLowerInsertData, simPGMLowerDieData,
                                     createUpperMoldComponents, upperMoldDataStructure, curvePointsData, simPGMUpperCurveData, upperMoldDataC, simPGMUpperMoldProperties, simPGMUpperInsertData, simPGMUpperDieData) {
        //var HeightDivisor;
        var relativeDataForLowerCurve = createLowerMoldComponents.createCurve(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,simPGMLowerCurveData);
        var relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData);
        var relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData);
        var combinationofRelativeDataLowerMold = relativeDataForLowerInsert.concat(relativeDataForLowerCurve).concat(relativeDataForLowerDie);
        var max_X_ofCombinationofRelativeDataLowerMold = Math.max.apply(Math,combinationofRelativeDataLowerMold.map(function (currentObject) {
            return currentObject.x;
        }));
        var max_Y_ofCombinationofRelativeDataLowerMold = Math.max.apply(Math,combinationofRelativeDataLowerMold.map(function (currentObject) {
            return currentObject.y;
        }));
        var relativeDataForUpperCurve = createUpperMoldComponents.createCurve(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,simPGMUpperCurveData);
        var relativeDataForUpperInsert = createUpperMoldComponents.createInsert(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperInsertData);
        var relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData);
        var combinationOfRelativeDataUpperMold = relativeDataForUpperCurve.concat(relativeDataForUpperInsert).concat(relativeDataForUpperDie);
        var max_X_ofCombinationOfRelativeDataUpperMold = Math.max.apply(Math, combinationOfRelativeDataUpperMold.map(function (currentObject) {
            return currentObject.x;
        }))
        var min_Y_ofCombinationOfRelativeDataUpperMold = Math.min.apply(Math, combinationOfRelativeDataUpperMold.map(function (currentObject) {
            return currentObject.y;
        }))
        var distancebetweenMolds = Math.sqrt(Math.pow(max_X_ofCombinationofRelativeDataLowerMold-max_X_ofCombinationOfRelativeDataUpperMold,2) + Math.pow(max_Y_ofCombinationofRelativeDataLowerMold-min_Y_ofCombinationOfRelativeDataUpperMold,2))
        console.log(distancebetweenMolds);
    }

    var getHeightNwidthDivisorObj = function (SimPGMDataProviderService) {
        var simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
        var simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
        var relativeDataForCircle = SimPGMDataProviderService.circleData();
        var widthDivisor = (simPGMUpperDieData.D_Mold > simPGMLowerDieData.D_Mold) ? simPGMUpperDieData.D_Mold : simPGMLowerDieData.D_Mold
        var heightDivisor = simPGMUpperDieData.H_Mold + 2*relativeDataForCircle[0].radius + .001 + simPGMLowerDieData.H_Mold;
        var width_n_HeightObject = {width: widthDivisor, height: heightDivisor}
        return width_n_HeightObject;
    }
    return {
        scalingWidthNHeight : scalingWidthNHeight,
        multiplyingEachUpperPointWithScalingFactor : multiplyingEachUpperPointWithScalingFactor,
        multiplyingEachCirclePointWithScalingFactor : multiplyingEachCirclePointWithScalingFactor,
        multiplyingEachLowerPointWithScalingFactor : multiplyingEachLowerPointWithScalingFactor,
        adjustHeightAfterScaling : adjustHeightAfterScaling,
        getHeightNwidthDivisorObj : getHeightNwidthDivisorObj,
        getHeightDivisor_2 : getHeightDivisor_2
    }
}

