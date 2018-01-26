/**
 * Created by khanhafizurrahman on 1/26/18.
 */
var shiftingPoints = function () {
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
    return {
        shiftingUpperMold : shiftingUpperMold
    }
}