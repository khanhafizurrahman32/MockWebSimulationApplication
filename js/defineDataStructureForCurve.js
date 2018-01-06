/**
 * Created by khanhafizurrahman on 10/16/17.
 * changed this to ''
 */
var defDataStr = function () {
    xVal50PointsArray = [];
    tempxVal50PointsArray = [];
    yVal50PointsArray = [];
    tempyVal50PointsArray = [];
    objectArray = [];
    objectArray2 = [];
    tempArrayforFiftyPoints = [];
//}// prototype use korle ei block ekhane ses

    var clearXVal50PointsArray = function () {
        xVal50PointsArray.length = 0;
    }

    var setXVal50PointsArray = function (a) {
        if (xVal50PointsArray.length == 0)
            xVal50PointsArray = a;
        else
            xVal50PointsArray.push.apply(xVal50PointsArray, a);
    }

    var getXVal50PointsArray = function () {
        return xVal50PointsArray;
    }

    var clearTempxVal50PointsArray = function () {
        tempxVal50PointsArray.length = 0;
    }

    var setTempxVal50PointsArray = function (a) {
        if (tempxVal50PointsArray.length == 0)
            tempxVal50PointsArray = a;
        else
            tempxVal50PointsArray.push.apply(tempxVal50PointsArray, a);
    }

    var getTempxVal50PointsArray = function () {
        return tempxVal50PointsArray;
    }

    var clearYVal50PointsArray = function () {
        yVal50PointsArray.length = 0;
    }

    var setYVal50PointsArray = function (a) {
        if (yVal50PointsArray.length == 0)
            yVal50PointsArray = a;
        else
            yVal50PointsArray.push.apply(yVal50PointsArray, a)
    }

    var getYVal50PointsArray = function () {
        return yVal50PointsArray;
    }

    var clearTempyVal50PointsArray = function () {
        tempyVal50PointsArray.length = 0;
    }

    var setTempyVal50PointsArray = function (a) {
        if (tempyVal50PointsArray.length == 0)
            tempyVal50PointsArray = a;
        else
            tempyVal50PointsArray.push.apply(tempyVal50PointsArray, a);
    }

    var getTempyVal50PointsArray = function () {
        return tempyVal50PointsArray;
    }

    var clearObjectArray = function () {
        objectArray.length = 0;
    }

    var setObjectArray = function (a) {
        if (objectArray.length == 0)
            objectArray = a;
        else
            objectArray.push.apply(objectArray, a);
    }

    var getObjectArray = function () {
        return objectArray;
    }

    var clearObjectArray2 = function () {
        objectArray2.length = 0;
    }

    var setObjectArray2 = function (a) {
        if (objectArray2.length == 0)
            objectArray2 = a;
        else
            objectArray2.push.apply(objectArray2, a);
    }

    var getObjectArray2 = function () {
        return objectArray2;
    }

    var cleartempArrayforFiftyPoints = function () {
        tempArrayforFiftyPoints.length = 0;
    }

    var settempArrayforFiftyPoints = function (a) {
        if (tempArrayforFiftyPoints.length == 0)
            tempArrayforFiftyPoints = a;
        else
            tempArrayforFiftyPoints.push.apply(tempArrayforFiftyPoints, a);
    }

    var gettempArrayforFiftyPoints = function () {
        return tempArrayforFiftyPoints;
    }

    return {
        clearXVal50PointsArray : clearXVal50PointsArray,
        setXVal50PointsArray : setXVal50PointsArray,
        getXVal50PointsArray : getXVal50PointsArray,
        clearTempxVal50PointsArray : clearTempxVal50PointsArray,
        setTempxVal50PointsArray : setTempxVal50PointsArray,
        getTempxVal50PointsArray : getTempxVal50PointsArray,
        clearYVal50PointsArray : clearYVal50PointsArray,
        setYVal50PointsArray : setYVal50PointsArray,
        getYVal50PointsArray : getYVal50PointsArray,
        clearTempyVal50PointsArray : clearTempyVal50PointsArray,
        setTempyVal50PointsArray : setTempyVal50PointsArray,
        getTempyVal50PointsArray : getTempyVal50PointsArray,
        clearObjectArray : clearObjectArray,
        setObjectArray : setObjectArray,
        getObjectArray : getObjectArray,
        clearObjectArray2 : clearObjectArray2,
        setObjectArray2 : setObjectArray2,
        getObjectArray2 : getObjectArray2,
        cleartempArrayforFiftyPoints : cleartempArrayforFiftyPoints,
        settempArrayforFiftyPoints : settempArrayforFiftyPoints,
        gettempArrayforFiftyPoints : gettempArrayforFiftyPoints
    }
}
    //defDataStr.prototype = {
    // clearXVal50PointsArray : function () {
    //     xVal50PointsArray.length = 0;
    // },
    // setXVal50PointsArray : function (a) {
    //     if(xVal50PointsArray.length == 0)
    //         xVal50PointsArray = a;
    //     else
    //         xVal50PointsArray.push.apply(xVal50PointsArray,a);
    // },
    // getXVal50PointsArray : function () {
    //     return xVal50PointsArray;
    // },
    // clearTempxVal50PointsArray : function () {
    //     tempxVal50PointsArray.length = 0;
    // },
    // setTempxVal50PointsArray : function (a) {
    //     if(tempxVal50PointsArray.length == 0)
    //         tempxVal50PointsArray = a;
    //     else
    //         tempxVal50PointsArray.push.apply(tempxVal50PointsArray,a);
    // },
    // getTempxVal50PointsArray : function () {
    //     return tempxVal50PointsArray;
    // },
    // clearYVal50PointsArray : function () {
    //     yVal50PointsArray.length = 0;
    // },
    // setYVal50PointsArray : function (a) {
    //    if(yVal50PointsArray.length == 0)
    //         yVal50PointsArray = a;
    //    else
    //        yVal50PointsArray.push.apply(yVal50PointsArray,a)
    // },
    // getYVal50PointsArray : function () {
    //     return yVal50PointsArray;
    // },
    // clearTempyVal50PointsArray : function () {
    //     tempyVal50PointsArray.length = 0;
    // },
    // setTempyVal50PointsArray: function (a) {
    //     if(tempyVal50PointsArray.length == 0)
    //         tempyVal50PointsArray = a;
    //     else
    //         tempyVal50PointsArray.push.apply(tempyVal50PointsArray,a);
    // },
    // getTempyVal50PointsArray: function () {
    //     return tempyVal50PointsArray;
    // },
    // clearObjectArray : function () {
    //     objectArray.length = 0;
    // },
    // setObjectArray: function (a) {
    //     if(objectArray.length == 0)
    //         objectArray = a;
    //     else
    //         objectArray.push.apply(objectArray,a);
    // },
    // getObjectArray: function () {
    //     return objectArray;
    // },
    // clearObjectArray2: function () {
    //     objectArray2.length = 0;
    // },
    // setObjectArray2: function (a) {
    //     if(objectArray2.length == 0)
    //         objectArray2 = a;
    //     else
    //         objectArray2.push.apply(objectArray2,a);
    // },
    // getObjectArray2: function () {
    //     return objectArray2;
    // },
    // cleartempArrayforFiftyPoints : function () {
    //     tempArrayforFiftyPoints.length = 0;
    // },
    // settempArrayforFiftyPoints: function (a) {
    //     if(tempArrayforFiftyPoints.length == 0)
    //         tempArrayforFiftyPoints = a;
    //     else
    //         tempArrayforFiftyPoints.push.apply(tempArrayforFiftyPoints,a);
    // },
    // gettempArrayforFiftyPoints: function () {
    //     return tempArrayforFiftyPoints;
    // }

//}

