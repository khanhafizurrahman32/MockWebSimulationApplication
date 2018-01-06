/**
 * Created by khanhafizurrahman on 10/27/17.
 */

var drawingIndividualComponent = function () {
    var currentPartsDrawing = function (svgContainer,className, relativeData,idName,polygonClassName,scaleX, scaleY) {
        svgContainer.append("g")
            .attr("class", className)
            .selectAll("polygon")
            .data([relativeData])
            .enter()
            .append('polyline')
            .attr('id',idName)
            .attr('class',polygonClassName)
            .attr('points',function (d) {
                return d.map(function (d) {
                    // return [scaleX(d.x),scaleY(d.y)].join(",");
                    return [(d.x),(d.y)].join(",");
                }).join(" ");
            })
            .attr("stroke","black")
            .attr("stroke-width",2);

    };

    var circlePartsDrawing = function (svgContainer,className,relativeData,idName,scaleX, circleScaleY) {
        svgContainer
            .attr("class",className)
            .selectAll("circle")
            .data(relativeData)
            .enter()
            .append("circle")
            .attr("id", idName)
            // .attr("cx", function(d) {return scaleX(d.x_axis);})
            .attr("cx", function(d) {return d.x_axis;})
            // .attr("cy", function(d) {return circleScaleY(d.y_axis);})
            .attr("cy", function(d) {return d.y_axis;})
            .attr("r", function(d) {return d.radius;});
    };

    return {
        currentPartsDrawing : currentPartsDrawing,
        circlePartsDrawing : circlePartsDrawing
    }
}