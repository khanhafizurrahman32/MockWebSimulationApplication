/**
 * Created by khanhafizurrahman on 10/15/17.
 */
var defineScaleComponent = function  () {
    var scaleXRangeMinValue;
    var scaleXRangeMaxValue;
    var scaleYRangeMinValue;
    var scaleYRangeMaxValue;//310
    var mirrorScaleXRangeMinValue;
    var mirrorScaleXRangeMaxValue;
    var mirrorScaleYRangeMinValue;//400
    var mirrorScaleYRangeMaxValue;//658
    var circleScaleYMinValue;
    var circleScaleYMaxValue;
    var scaleXFunction, scaleYFunction, mirrorScaleXFunction, mirrorScaleYFunction, circleScaleY;

    var setScalarFunction = function(width,height){
        setScaleXRangeMinValue(width/2);
        setScaleXRangeMaxValue(.9*width);
        setScaleYRangeMinValue(.07*height);
        setScaleYRangeMaxValue(.44*height);
        setMirrorScaleXRangeMinValue(.1*width);
        setMirrorScaleXRangeMaxValue(width/2);
        setMirrorScaleYRangeMinValue(.57*height);
        setMirrorScaleYRangeMaxValue(.929*height);
        setCircleScaleYMinValue(.157*height);
        setCircleScaleYMaxValue(.545*height);//.57
    }

    var setScaleXRangeMinValue = function (value) {
        scaleXRangeMinValue = value;
    }

    var getScaleXRangeMinValue = function(){
        return scaleXRangeMinValue;
    }

    var setScaleXRangeMaxValue = function (value) {
        scaleXRangeMaxValue = value;
    }

    var getScaleXRangeMaxValue = function () {
        return scaleXRangeMaxValue;
    }

    var setScaleYRangeMinValue = function (value) {
        scaleYRangeMinValue = value;
    }

    var getScaleYRangeMinValue = function () {
        return scaleYRangeMinValue;
    }

    var setScaleYRangeMaxValue = function (value) {
        scaleYRangeMaxValue = value;
    }

    var getScaleYRangeMaxValue = function () {
        return scaleYRangeMaxValue;
    }

    var setMirrorScaleXRangeMinValue = function (value) {
        mirrorScaleXRangeMinValue = value;
    }

    var getMirrorScaleXRangeMinValue = function () {
        return mirrorScaleXRangeMinValue;
    }

    var setMirrorScaleXRangeMaxValue = function (value) {
        mirrorScaleXRangeMaxValue = value;
    }

    var getMirrorScaleXRangeMaxValue = function () {
        return mirrorScaleXRangeMaxValue;
    }

    var setMirrorScaleYRangeMinValue = function (value) {
        mirrorScaleYRangeMinValue = value;
    }

    var getMirrorScaleYRangeMinValue = function () {
        return mirrorScaleYRangeMinValue;
    }

    var setMirrorScaleYRangeMaxValue = function (value) {
        mirrorScaleYRangeMaxValue = value;
    }

    var getMirrorScaleYRangeMaxValue = function () {
        return mirrorScaleYRangeMaxValue;
    }

    var setCircleScaleYMinValue = function (value) {
        circleScaleYMinValue = value;
    }

    var getCircleScaleYMinValue = function () {
        return circleScaleYMinValue;
    }

    var setCircleScaleYMaxValue = function (value) {
        circleScaleYMaxValue = value;
    }

    var getCircleScaleYMaxValue = function () {
        return circleScaleYMaxValue;
    }


    var setScaleX = function (xVal50PointsArray) {
        // console.log('setScaleX 112', xVal50PointsArray,[Math.min.apply(null,xVal50PointsArray),Math.max.apply(null,xVal50PointsArray)],[getScaleXRangeMinValue() ,getScaleXRangeMaxValue() ]);

        scaleXFunction = d3.scale.linear()
            .domain([Math.min.apply(null,xVal50PointsArray),Math.max.apply(null,xVal50PointsArray)])
            .range([getScaleXRangeMinValue() ,getScaleXRangeMaxValue() ]);
    }

    var getScaleX = function () {
        return scaleXFunction;
    }

    var setScaleY = function (yVal50PointsArray) {
        // console.log('setScaleX 124', yVal50PointsArray,[Math.min.apply(null,yVal50PointsArray),Math.max.apply(null,yVal50PointsArray)],[getScaleYRangeMinValue() ,getScaleYRangeMaxValue() ]);
        scaleYFunction = d3.scale.linear()
            .domain([Math.min.apply(null,yVal50PointsArray),Math.max.apply(null,yVal50PointsArray)])
            .range([getScaleYRangeMaxValue(),getScaleYRangeMinValue()]);
    }

    var getScaleY = function () {
        return scaleYFunction;
    }

    var setMirrorScaleX = function (xVal50PointsArray) {
        mirrorScaleXFunction = d3.scale.linear()
            .domain([Math.min.apply(null,xVal50PointsArray),Math.max.apply(null,xVal50PointsArray)])
            .range([getMirrorScaleXRangeMaxValue(),getMirrorScaleXRangeMinValue()]);
    }

    var getMirrorScaleX = function () {
        return mirrorScaleXFunction;
    }

    var setMirrorScaleY = function (yVal50PointsArray) {
        mirrorScaleYFunction = d3.scale.linear()
            .domain([Math.min.apply(null,yVal50PointsArray),Math.max.apply(null,yVal50PointsArray)])
            .range([getMirrorScaleYRangeMinValue() ,getMirrorScaleYRangeMaxValue()]);
    }

    var getMirrorScaleY = function () {
        return mirrorScaleYFunction;
    }

    var setCircleScaleY = function (yVal50PointsArray) {
        circleScaleY = d3.scale.linear()
            .domain([Math.min.apply(null,yVal50PointsArray),Math.max.apply(null,yVal50PointsArray)])
            .range([getCircleScaleYMaxValue(),getCircleScaleYMinValue()]);
    }

    var getCircleScaleY = function (){
        return circleScaleY;
    }

    var reScaleHeightAfterInputValue = function (fixedHeightValue, InputCalculatedHeightValue, pointValues) {
        var afterScalingObj = [] ;
        for(var obj in pointValues){
            console.log(pointValues[obj]);
            pointValues[obj].y = (fixedHeightValue/InputCalculatedHeightValue) * pointValues[obj].y;
            console.log(pointValues[obj].y);
            afterScalingObj[afterScalingObj.length] = {x:pointValues[obj].x,y:pointValues[obj].y};
        }
        return afterScalingObj;
    }

    return {
        setScalarFunction : setScalarFunction,
        setScaleYRangeMaxValue : setScaleYRangeMaxValue,
        getScaleYRangeMaxValue : getScaleYRangeMaxValue,
        setScaleX : setScaleX,
        getScaleX : getScaleX,
        setScaleY : setScaleY,
        getScaleY : getScaleY,
        setMirrorScaleX : setMirrorScaleX,
        getMirrorScaleX : getMirrorScaleX,
        setMirrorScaleY : setMirrorScaleY,
        getMirrorScaleY : getMirrorScaleY,
        setCircleScaleY : setCircleScaleY,
        getCircleScaleY : getCircleScaleY,
        getMirrorScaleYRangeMinValue : getMirrorScaleYRangeMinValue,
        reScaleHeightAfterInputValue : reScaleHeightAfterInputValue
    }
}