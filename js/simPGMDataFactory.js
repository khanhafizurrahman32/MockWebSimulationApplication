/**
 * Created by khanhafizurrahman on 10/16/17.
 * remove this
 */
myModule.factory('SimPGMDataProviderService',['$rootScope',function($rootScope){
    var upperMoldDieObject,upperMoldInsertObject,upperMoldCurveObject,circleDatas,previousCircle;
    var lowerMoldDieObject,lowerMoldCurveObject;
    var lowerMoldInsertObject = {} ;
    var upperMoldInsertObject = {};
    var changePropertyName;
    var scaleLowerMoldDieData;
    var scaleMirrorLowerMoldDieData;
    var scaleLowerMoldInsertData;
    var scaleMirrorLowerMoldInsertData;
    var scaleCircleData;
    var scaleUpperMoldDieData;
    var scaleMirrorUpperMoldDieData;
    var scaleUpperMoldInsertData;
    var scaleMirrorUpperMoldInsertData;
    var finalDrawLowerMoldDieData;
    var finalDrawMirrorLowerMoldDieData;
    var finalDrawLowerMoldInsertData;
    var finalDrawMirrorLowerMoldInsertData;
    var finalDrawUpperMoldDieData;
    var finalDrawMirrorUpperMoldDieData;
    var finalDrawUpperMoldInsertData;
    var finalDrawMirrorUpperMoldInsertData;

    var moldCounter = function () {
        var counter = {"MoldDieCounter" : 0,"MoldInsertCounter" : 0,"CurveDataCounter": 0, "circleCounter": 0};
        return counter;
    };

    var getUpperMoldDieObject = function () {
        return upperMoldDieObject;
    }

    var setUpperMoldDieObject = function (D_InsertValue,D_MoldValue,H_MoldValue,H_1_Sleeve_1Value,H_1_InsertValue,D_1_InsertValue) {
        upperMoldDieObject = {"D_Insert": D_InsertValue,  "D_Mold":D_MoldValue, "H_Mold":H_MoldValue, "H_1_Sleeve_1":H_1_Sleeve_1Value, "H_1_Insert":H_1_InsertValue,
            "D_1_Insert" : D_1_InsertValue}
    }

    var getUpperMoldInsertObject = function () {
        return upperMoldInsertObject;
    }

    var setUpperMoldInsertObject = function (D_InsertValue,D_MoldValue,H_MoldValue,H_1_Sleeve_1Value,H_Insert_Value,H_1_InsertValue,D_1_InsertValue,D_surf_MoldValue,R_surf_MoldValue,K_surf_MoldValue,A2_surf_MoldValue,A4_surf_MoldValue,A6_surf_MoldValue,A8_surf_MoldValue,A10_surf_MoldValue,A12_surf_MoldValue,A14_surf_MoldValue,A16_surf_MoldValue,A18_surf_MoldValue,A20_surf_MoldValue) {
        upperMoldInsertObject['D_Insert'] = D_InsertValue;
        upperMoldInsertObject['D_Mold'] = D_MoldValue;
        upperMoldInsertObject['H_Mold'] = H_MoldValue;
        upperMoldInsertObject['H_1_Sleeve_1'] = H_1_Sleeve_1Value;
        upperMoldInsertObject['H_Insert'] = H_Insert_Value;
        upperMoldInsertObject['H_1_Insert'] = H_1_InsertValue;
        upperMoldInsertObject['D_1_Insert'] = D_1_InsertValue;
        upperMoldInsertObject['D_surf_Mold'] = D_surf_MoldValue;
        upperMoldInsertObject['R_surf_Mold'] = R_surf_MoldValue;
        upperMoldInsertObject['K_surf_Mold'] = K_surf_MoldValue;
        upperMoldInsertObject['A2_surf_Mold'] = A2_surf_MoldValue;
        upperMoldInsertObject['A4_surf_Mold'] = A4_surf_MoldValue;
        upperMoldInsertObject['A6_surf_Mold'] = A6_surf_MoldValue;
        upperMoldInsertObject['A8_surf_Mold'] = A8_surf_MoldValue;
        upperMoldInsertObject['A10_surf_Mold'] = A10_surf_MoldValue;
        upperMoldInsertObject['A12_surf_Mold'] = A12_surf_MoldValue;
        upperMoldInsertObject['A14_surf_Mold'] = A14_surf_MoldValue;
        upperMoldInsertObject['A16_surf_Mold'] = A16_surf_MoldValue;
        upperMoldInsertObject['A18_surf_Mold'] = A18_surf_MoldValue;
        upperMoldInsertObject['A20_surf_Mold'] = A20_surf_MoldValue;
    }

    var getUpperMoldCurveObject = function () {
        return upperMoldCurveObject;
    }

    var setUpperMoldCurveObject = function (D_surf_MoldValue,R_surf_MoldValue,K_surf_MoldValue,A2_surf_MoldValue,A4_surf_MoldValue,A6_surf_MoldValue,A8_surf_MoldValue,A10_surf_MoldValue,A12_surf_MoldValue,A14_surf_MoldValue,A16_surf_MoldValue,A18_surf_MoldValue,A20_surf_MoldValue) {
        upperMoldCurveObject ={"D_surf_Mold": D_surf_MoldValue, "R_surf_Mold": R_surf_MoldValue, "K_surf_Mold":K_surf_MoldValue, "A2_surf_Mold": A2_surf_MoldValue,
            "A4_surf_Mold": A4_surf_MoldValue, "A6_surf_Mold": A6_surf_MoldValue, "A8_surf_Mold": A8_surf_MoldValue, "A10_surf_Mold": A10_surf_MoldValue,
            "A12_surf_Mold": A12_surf_MoldValue, "A14_surf_Mold": A14_surf_MoldValue, "A16_surf_Mold": A16_surf_MoldValue, "A18_surf_Mold":A18_surf_MoldValue, "A20_surf_Mold": A20_surf_MoldValue}
    }

    var getLowerMoldDieObject = function () {
        return lowerMoldDieObject;
    }

    var setLowerMoldDieObject = function (D_InsertValue,D_MoldValue,H_MoldValue,H_1_Sleeve_1Value,H_1_InsertValue,D_1_InsertValue) {
        lowerMoldDieObject = {"D_Insert": D_InsertValue,  "D_Mold":D_MoldValue, "H_Mold":H_MoldValue, "H_1_Sleeve_1":H_1_Sleeve_1Value, "H_1_Insert":H_1_InsertValue,
            "D_1_Insert" : D_1_InsertValue}
    }

    var getLowerMoldInsertObject = function () {
        return lowerMoldInsertObject;
    }

    var setLowerMoldInsertObject = function (D_InsertValue,D_MoldValue,H_MoldValue,H_1_Sleeve_1Value,H_Insert_Value,H_1_InsertValue,D_1_InsertValue,D_surf_MoldValue,R_surf_MoldValue,K_surf_MoldValue,A2_surf_MoldValue,A4_surf_MoldValue,A6_surf_MoldValue,A8_surf_MoldValue,A10_surf_MoldValue,A12_surf_MoldValue,A14_surf_MoldValue,A16_surf_MoldValue,A18_surf_MoldValue,A20_surf_MoldValue) {
        lowerMoldInsertObject['D_Insert'] = D_InsertValue;
        lowerMoldInsertObject['D_Mold'] = D_MoldValue;
        lowerMoldInsertObject['H_Mold'] = H_MoldValue;
        lowerMoldInsertObject['H_1_Sleeve_1'] = H_1_Sleeve_1Value;
        lowerMoldInsertObject['H_Insert'] = H_Insert_Value;
        lowerMoldInsertObject['H_1_Insert'] = H_1_InsertValue;
        lowerMoldInsertObject['D_1_Insert'] = D_1_InsertValue;
        lowerMoldInsertObject['D_surf_Mold'] = D_surf_MoldValue;
        lowerMoldInsertObject['R_surf_Mold'] = R_surf_MoldValue;
        lowerMoldInsertObject['K_surf_Mold'] = K_surf_MoldValue;
        lowerMoldInsertObject['A2_surf_Mold'] = A2_surf_MoldValue;
        lowerMoldInsertObject['A4_surf_Mold'] = A4_surf_MoldValue;
        lowerMoldInsertObject['A6_surf_Mold'] = A6_surf_MoldValue;
        lowerMoldInsertObject['A8_surf_Mold'] = A8_surf_MoldValue;
        lowerMoldInsertObject['A10_surf_Mold'] = A10_surf_MoldValue;
        lowerMoldInsertObject['A12_surf_Mold'] = A12_surf_MoldValue;
        lowerMoldInsertObject['A14_surf_Mold'] = A14_surf_MoldValue;
        lowerMoldInsertObject['A16_surf_Mold'] = A16_surf_MoldValue;
        lowerMoldInsertObject['A18_surf_Mold'] = A18_surf_MoldValue;
        lowerMoldInsertObject['A20_surf_Mold'] = A20_surf_MoldValue;
       // lowerMoldInsertObject['changedTextBoxName'] = changedTextBox;


        // lowerMoldInsertObject = {"D_Insert": D_InsertValue,  "D_Mold":D_MoldValue, "H_Mold":H_MoldValue, "H_1_Sleeve_1":H_1_Sleeve_1Value,"H_Insert": H_Insert_Value, "H_1_Insert":H_1_InsertValue,
        //     "D_1_Insert" : D_1_InsertValue, "D_surf_Mold": D_surf_MoldValue, "R_surf_Mold": R_surf_MoldValue, "K_surf_Mold":K_surf_MoldValue, "A2_surf_Mold": A2_surf_MoldValue,
        //     "A4_surf_Mold": A4_surf_MoldValue, "A6_surf_Mold": A6_surf_MoldValue, "A8_surf_Mold": A8_surf_MoldValue, "A10_surf_Mold": A10_surf_MoldValue,
        //     "A12_surf_Mold": A12_surf_MoldValue, "A14_surf_Mold": A14_surf_MoldValue, "A16_surf_Mold": A16_surf_MoldValue, "A18_surf_Mold":A18_surf_MoldValue, "A20_surf_Mold": A20_surf_MoldValue, "changedTextBoxName": changedTextBox};

    }

    var getLowerMoldCurveObject = function () {
        return  lowerMoldCurveObject;
    }
    var setLowerMoldCurveObject = function (D_surf_MoldValue,R_surf_MoldValue,K_surf_MoldValue,A2_surf_MoldValue,A4_surf_MoldValue,A6_surf_MoldValue,A8_surf_MoldValue,A10_surf_MoldValue,A12_surf_MoldValue,A14_surf_MoldValue,A16_surf_MoldValue,A18_surf_MoldValue,A20_surf_MoldValue) {
        lowerMoldCurveObject ={"D_surf_Mold": D_surf_MoldValue, "R_surf_Mold": R_surf_MoldValue, "K_surf_Mold":K_surf_MoldValue, "A2_surf_Mold": A2_surf_MoldValue,
            "A4_surf_Mold": A4_surf_MoldValue, "A6_surf_Mold": A6_surf_MoldValue, "A8_surf_Mold": A8_surf_MoldValue, "A10_surf_Mold": A10_surf_MoldValue,
            "A12_surf_Mold": A12_surf_MoldValue, "A14_surf_Mold": A14_surf_MoldValue, "A16_surf_Mold": A16_surf_MoldValue, "A18_surf_Mold":A18_surf_MoldValue, "A20_surf_Mold": A20_surf_MoldValue}
    }

    var circleData = function () {
        return circleDatas ;
    }

    var setCircleData = function (x_axis_value,y_axis_value,radius_value) {
        circleDatas = [{"x_axis": x_axis_value, "y_axis": y_axis_value , "radius": radius_value}];
    }

    var setPreviousCircleValue = function (oldCircle) {
        previousCircle = oldCircle;
    }

    var getPreviousCircle = function () {
        return previousCircle;
    }

    var setChangePropertyName = function (changePropertyValue) {
        changePropertyName = changePropertyValue;
    }

    var getChangePropertyName = function () {
        return changePropertyName;
    }

    var setAfterScalingLowerDieData = function (scaleLowerMoldDieData) {
        this.scaleLowerMoldDieData = scaleLowerMoldDieData;
    }

    var getAfterScalingLowerDieData = function () {
        return this.scaleLowerMoldDieData;
    }

    var setAfterScalingMirrorLowerDieData = function (scaleMirrorLowerMoldDieData) {
        this.scaleMirrorLowerMoldDieData = scaleMirrorLowerMoldDieData;
    }

    var getAfterScalingMirrorLowerDieData = function () {
        return this.scaleMirrorLowerMoldDieData;
    }

    var setAfterScalingLowerInsertData = function (scaleLowerMoldInsertData) {
        this.scaleLowerMoldInsertData = scaleLowerMoldInsertData;
    }

    var getAfterScalingLowerInsertData = function () {
        return this.scaleLowerMoldInsertData;
    }

    var setAfterScalingMirrorLowerInsertData = function (scaleMirrorLowerMoldInsertData) {
        this.scaleMirrorLowerMoldInsertData = scaleMirrorLowerMoldInsertData;
    }

    var getAfterScalingMirrorLowerInsertData = function () {
        return this.scaleMirrorLowerMoldInsertData;
    }

    var setScaleCircleData = function (scaleCircleData) {
        this.scaleCircleData = scaleCircleData;
    }

    var getScaleCircleData = function () {
        return this.scaleCircleData
    }
    var setAfterScalingUpperDieData = function (scaleUpperMoldDieData) {
        this.scaleUpperMoldDieData = scaleUpperMoldDieData;
    }

    var getAfterScalingUpperDieData = function () {
        return this.scaleUpperMoldDieData;
    }

    var setAfterScalingMirrorUpperDieData = function (scaleMirrorUpperMoldDieData) {
        this.scaleMirrorUpperMoldDieData = scaleMirrorUpperMoldDieData;
    }

    var getAfterScalingMirrorUpperDieData = function () {
        return this.scaleMirrorUpperMoldDieData;
    }

    var setAfterScalingUpperInsertData = function (scaleUpperMoldInsertData) {
        this.scaleUpperMoldInsertData = scaleUpperMoldInsertData;
    }

    var getAfterScalingUpperInsertData = function () {
        return this.scaleUpperMoldInsertData;
    }

    var setAfterScalingMirrorUpperInsertData = function (scaleMirrorUpperMoldInsertData) {
        this.scaleMirrorUpperMoldInsertData = scaleMirrorUpperMoldInsertData;
    }

    var getAfterScalingMirrorUpperInsertData = function () {
        return this.scaleMirrorUpperMoldInsertData;
    }

    var setFinalDrawLowerMoldDieData = function (finalDrawLowerMoldDieData) {
        this.finalDrawLowerMoldDieData = finalDrawLowerMoldDieData
    }

    var getFinalDrawLowerMoldDieData = function () {
        return this.finalDrawLowerMoldDieData;
    }

    var setFinalDrawLowerMoldInsertData = function (finalDrawLowerMoldInsertData) {
        this.finalDrawLowerMoldInsertData = finalDrawLowerMoldInsertData
    }

    var getFinalDrawLowerMoldInsertData = function () {
        return this.finalDrawLowerMoldInsertData;
    }

    var setFinalDrawUpperMoldDieData = function (finalDrawUpperMoldDieData) {
        this.finalDrawUpperMoldDieData = finalDrawUpperMoldDieData
    }

    var getFinalDrawUpperMoldDieData = function () {
        return this.finalDrawUpperMoldDieData;
    }

    var setFinalDrawUpperMoldInsertData = function (finalDrawUpperMoldInsertData) {
        this.finalDrawUpperMoldInsertData = finalDrawUpperMoldInsertData
    };

    var getFinalDrawUpperMoldInsertData = function () {
        return this.finalDrawUpperMoldInsertData;
    };


    var prepForMoldDataBroadcast = function (nameOfData, currentData, oldValue, portion) {

        switch(nameOfData){
            case "upperMoldDieData" :
                setUpperMoldDieObject(currentData.D_Insert,currentData.D_Mold,currentData.H_Mold,currentData.H_1_Sleeve_1,currentData.H_1_Insert,currentData.D_1_Insert);
                $rootScope.$broadcast('handleUpperMoldDieDataBroadcast'); break;

            case "upperMoldInsertData" :
                setUpperMoldInsertObject(currentData.D_Insert,currentData.D_Mold,currentData.H_Mold,currentData.H_1_Sleeve_1,currentData.H_Insert,currentData.H_1_Insert,currentData.D_1_Insert,currentData.D_surf_Mold,currentData.R_surf_Mold,currentData.K_surf_Mold,currentData.A2_surf_Mold,currentData.A4_surf_Mold,currentData.A6_surf_Mold,currentData.A8_surf_Mold,currentData.A10_surf_Mold,currentData.A12_surf_Mold,currentData.A14_surf_Mold,currentData.A16_surf_Mold,currentData.A18_surf_Mold,currentData.A20_surf_Mold);
                $rootScope.$broadcast('handleUpperMoldInsertDataBroadcast'); break;

            case "upperMoldCurveData" :
                setUpperMoldCurveObject(currentData.D_surf_Mold,currentData.R_surf_Mold,currentData.K_surf_Mold,currentData.A2_surf_Mold,currentData.A4_surf_Mold,currentData.A6_surf_Mold,currentData.A8_surf_Mold,currentData.A10_surf_Mold,currentData.A12_surf_Mold,currentData.A14_surf_Mold,currentData.A16_surf_Mold,currentData.A18_surf_Mold,currentData.A20_surf_Mold);
                $rootScope.$broadcast('handleUpperMoldCurveDataBroadcast'); break;

            case "lowerMoldDieData" :
                setLowerMoldDieObject(currentData.D_Insert,currentData.D_Mold,currentData.H_Mold,currentData.H_1_Sleeve_1,currentData.H_1_Insert,currentData.D_1_Insert);
                $rootScope.$broadcast('handleLowerMoldDieDataBroadcast'); break;

            case "lowerMoldInsertData" :
                setLowerMoldInsertObject(currentData.D_Insert,currentData.D_Mold,currentData.H_Mold,currentData.H_1_Sleeve_1,currentData.H_Insert,currentData.H_1_Insert,currentData.D_1_Insert,currentData.D_surf_Mold,currentData.R_surf_Mold,currentData.K_surf_Mold,currentData.A2_surf_Mold,currentData.A4_surf_Mold,currentData.A6_surf_Mold,currentData.A8_surf_Mold,currentData.A10_surf_Mold,currentData.A12_surf_Mold,currentData.A14_surf_Mold,currentData.A16_surf_Mold,currentData.A18_surf_Mold,currentData.A20_surf_Mold);
                $rootScope.$broadcast('handleLowerMoldInsertDataBroadcast'); break;

            case "lowerMoldCurveData" :
                setLowerMoldCurveObject(currentData.D_surf_Mold,currentData.R_surf_Mold,currentData.K_surf_Mold,currentData.A2_surf_Mold,currentData.A4_surf_Mold,currentData.A6_surf_Mold,currentData.A8_surf_Mold,currentData.A10_surf_Mold,currentData.A12_surf_Mold,currentData.A14_surf_Mold,currentData.A16_surf_Mold,currentData.A18_surf_Mold,currentData.A20_surf_Mold);
                $rootScope.$broadcast('handleLowerMoldCurveDataBroadcast');break;

            case "circleData" :
                setCircleData(currentData[0].x_axis,currentData[0].y_axis,currentData[0].radius);
                $rootScope.$broadcast('handlecircleDataBroadcast'); break;
        }
    }

    return {
        getUpperMoldDieObject : getUpperMoldDieObject,
        setUpperMoldDieObject : setUpperMoldDieObject,
        getUpperMoldInsertObject : getUpperMoldInsertObject,
        setUpperMoldInsertObject : setUpperMoldInsertObject,
        getUpperMoldCurveObject : getUpperMoldCurveObject,
        setUpperMoldCurveObject : setUpperMoldCurveObject,
        getLowerMoldDieObject : getLowerMoldDieObject,
        setLowerMoldDieObject : setLowerMoldDieObject,
        getLowerMoldInsertObject : getLowerMoldInsertObject,
        setLowerMoldInsertObject : setLowerMoldInsertObject,
        getLowerMoldCurveObject : getLowerMoldCurveObject,
        setLowerMoldCurveObject : setLowerMoldCurveObject,
        circleData : circleData,
        setCircleData : setCircleData,
        setPreviousCircleValue: setPreviousCircleValue,
        getPreviousCircle : getPreviousCircle,
        prepForMoldDataBroadcast : prepForMoldDataBroadcast,
        setChangePropertyName : setChangePropertyName,
        getChangePropertyName : getChangePropertyName,
        setAfterScalingLowerDieData : setAfterScalingLowerDieData,
        getAfterScalingLowerDieData : getAfterScalingLowerDieData,
        setAfterScalingMirrorLowerDieData : setAfterScalingMirrorLowerDieData,
        getAfterScalingMirrorLowerDieData : getAfterScalingMirrorLowerDieData,
        setAfterScalingLowerInsertData : setAfterScalingLowerInsertData,
        getAfterScalingLowerInsertData : getAfterScalingLowerInsertData,
        setAfterScalingMirrorLowerInsertData : setAfterScalingMirrorLowerInsertData,
        getAfterScalingMirrorLowerInsertData : getAfterScalingMirrorLowerInsertData,
        setScaleCircleData : setScaleCircleData,
        getScaleCircleData : getScaleCircleData,
        setAfterScalingUpperDieData : setAfterScalingUpperDieData,
        getAfterScalingUpperDieData : getAfterScalingUpperDieData,
        setAfterScalingMirrorUpperDieData : setAfterScalingMirrorUpperDieData,
        getAfterScalingMirrorUpperDieData : getAfterScalingMirrorUpperDieData,
        setAfterScalingUpperInsertData : setAfterScalingUpperInsertData,
        getAfterScalingUpperInsertData : getAfterScalingUpperInsertData,
        setAfterScalingMirrorUpperInsertData : setAfterScalingMirrorUpperInsertData,
        getAfterScalingMirrorUpperInsertData : getAfterScalingMirrorUpperInsertData,
        setFinalDrawLowerMoldDieData : setFinalDrawLowerMoldDieData,
        getFinalDrawLowerMoldDieData : getFinalDrawLowerMoldDieData,
        setFinalDrawLowerMoldInsertData : setFinalDrawLowerMoldInsertData,
        getFinalDrawLowerMoldInsertData : getFinalDrawLowerMoldInsertData,
        setFinalDrawUpperMoldDieData : setFinalDrawUpperMoldDieData,
        getFinalDrawUpperMoldDieData : getFinalDrawUpperMoldDieData,
        setFinalDrawUpperMoldInsertData : setFinalDrawUpperMoldInsertData,
        getFinalDrawUpperMoldInsertData : getFinalDrawUpperMoldInsertData
    }
}])