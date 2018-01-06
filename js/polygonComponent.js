/**
 * Created by khanhafizurrahman on 10/22/17.
 */
var polygonDefinition = function () {
    var svgContainer,className, idName, polygonClassName, clickClassId, clickClassPolygonName, clickClassIdName , dataForDrawing, scaleXPointsFunction, scaleYPointsFunction, counter, dataTobShownInHTML, color;
    var polyComponent = function (objectToDraw,$scope) {
        if(objectToDraw.color != null){
            // this.color = "red";
            this.color = objectToDraw.color;
        }
        else
            this.color = selectColor(objectToDraw.idName);
        this.svgContainer = objectToDraw.svgContainer;
        this.className = objectToDraw.className;
        this.idName = objectToDraw.idName;
        this.polygonClassName = objectToDraw.polygonClassName;
        this.clickClassId = objectToDraw.clickClassId;
        this.clickClassPolygonName = objectToDraw.clickClassPolygonName;
        this.clickClassIdName = objectToDraw.clickClassIdName;
        this.dataForDrawing = objectToDraw.dataForDrawing;
        this.scaleXPointsFunction = objectToDraw.scaleXPointsFunction;
        this.scaleYPointsFunction = objectToDraw.scaleYPointsFunction;
        this.counter = objectToDraw.counter;
        this.dataTobShownInHTML = objectToDraw.dataTobShownInHTML;
        var drawCurrentPart = new drawingIndividualComponent();
        (this.idName.includes('circle') ? drawCurrentPart.circlePartsDrawing(this.svgContainer,this.className,this.dataForDrawing,this.idName,this.scaleXPointsFunction,this.scaleYPointsFunction)
                                        : drawCurrentPart.currentPartsDrawing(this.svgContainer,this.className,this.dataForDrawing,this.idName,this.polygonClassName,this.scaleXPointsFunction,this.scaleYPointsFunction));

        //this.color = selectColor(this.idName);
        polyFillComponent(this.idName,this.color);
        if(!this.idName.includes('circle'))
            defineClickOfEachComponent(this.idName,$scope,this.polygonClassName,this.dataTobShownInHTML);
    }

    var selectColor = function (idOfPolygon) {
        var color = '';
        if(idOfPolygon.includes('Die'))
            (idOfPolygon.includes('Mirror'))? color = "url(#mirrorAshGradient)": color = "url(#ashGradient)";
        if((idOfPolygon.includes('Insert')) || (idOfPolygon.includes('Curve')))
            (idOfPolygon.includes('Mirror'))? color = "url(#mirrorPalegradient)": color = "url(#palegradient)";
        if (idOfPolygon.includes('circle'))
            color = "url(#palegradient)";
        return color;
    }

    var polyFillComponent = function (currentid,color) {
        var currentid = '#'+currentid;
            d3.select(currentid)[0][0].style.fill = color;
    }

    var defineClickOfEachComponent = function (componentId,$scope,componentClass,componentData) {
        new clickEventsToPolygon().clickToIndividualPolygon(componentId,$scope,componentClass,componentData);
    }

    return {
        polyComponent : polyComponent
    }
}