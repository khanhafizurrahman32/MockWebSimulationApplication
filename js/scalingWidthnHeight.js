/**
 * Created by khanhafizurrahman on 12/5/17.
 */

var ScalingGangFunction = function () {

    var scalingWidthNHeight = function (drawWidthDiameter_D,drawwidthHeight_H) {
        var aspectRatioWidth = drawWidthDiameter_D / 0.064;
        var aspectRatioHeight = drawwidthHeight_H / 0.035;
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
            return currentObj.y + HeightFromGround;
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
            return (scalingFactor * currentObject.y) + drawwidthHeight_H;
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
        newObjectArray[0].y_axis = scalingFactor * currentObjectArray[0].y_axis;
        newObjectArray[0].radius = scalingFactor * currentObjectArray[0].radius;
        return newObjectArray;
    }


    return {
        scalingWidthNHeight : scalingWidthNHeight,
        multiplyingEachUpperPointWithScalingFactor : multiplyingEachUpperPointWithScalingFactor,
        multiplyingEachCirclePointWithScalingFactor : multiplyingEachCirclePointWithScalingFactor,
        multiplyingEachLowerPointWithScalingFactor : multiplyingEachLowerPointWithScalingFactor,
        adjustHeightAfterScaling : adjustHeightAfterScaling
    }
}

