/**
 * Created by khanhafizurrahman on 11/4/17.
 */

var drawPolygons = function(){
    var drawEachPolygon =  function (svgContainer,classname,idName,polygonClassName,  componentData,scaleXFunction,scaleYFunction,dataTobShownInHTML,color,$scope) {
        var moldComponent = new polygonDefinition();
        var moldComponentProperties = {svgContainer : svgContainer, className : classname ,idName : idName, polygonClassName : polygonClassName,clickClassId : null, clickClassPolygonName : null, clickClassIdName: null, dataForDrawing: componentData, scaleXPointsFunction: scaleXFunction,scaleYPointsFunction : scaleYFunction,counter : 0, dataTobShownInHTML : dataTobShownInHTML, color : color}
        moldComponent.polyComponent(moldComponentProperties,$scope);
    }

    return {
        drawEachPolygon : drawEachPolygon
    }
}
