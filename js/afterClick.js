/**
 * Created by khanhafizurrahman on 10/22/17.
 */

var clickEventsToPolygon = function () {
    var showHideInputShow = function(nameOfPartsForShowHideInputShow,$scope){
        var inputShow = '';
        if(nameOfPartsForShowHideInputShow.includes('Mirror'))
            nameOfPartsForShowHideInputShow = nameOfPartsForShowHideInputShow.replace('Mirror','');
        switch(nameOfPartsForShowHideInputShow){
            case "upperMoldDie" :
                $scope.upperMoldDieInputShow = !$scope.upperMoldDieInputShow;
                inputShow = $scope.upperMoldDieInputShow;
                break;
            case "upperMoldInsert" :
                $scope.upperMoldInsertInputShow = !$scope.upperMoldInsertInputShow;
                inputShow = $scope.upperMoldInsertInputShow;
                break;
            case "upperMoldCurve" :
                $scope.upperMoldCurveShow = !$scope.upperMoldCurveShow;
                inputShow = $scope.upperMoldCurveShow;
                break;
            case "lowerMoldDie" :
                $scope.lowerMoldDieInputShow = !$scope.lowerMoldDieInputShow;
                inputShow = $scope.lowerMoldDieInputShow;
                break;
            case "lowerMoldInsert" :
                $scope.lowerMoldInsertInputShow = !$scope.lowerMoldInsertInputShow;
                inputShow = $scope.lowerMoldInsertInputShow;
                break;
            case "lowerMoldCurve" :
                $scope.lowerMoldCurveShow = !$scope.lowerMoldCurveShow;
                inputShow = $scope.lowerMoldCurveShow;
                break;
        }
        return inputShow;
    }

    var clickToIndividualPolygon = function(clickId,$scope,clickPolygon,data){
        clickId = '#'+clickId;
        var clickPolygonClass = '.'+clickPolygon;
        var correspondingPolygon = '';
        (clickPolygonClass.includes('Mirror'))?correspondingPolygon = clickPolygon.replace('Mirror','')
            :correspondingPolygon = [clickPolygon.slice(0,(clickPolygon.length-7)),"Mirror",clickPolygon.slice((clickPolygon.length-7),clickPolygon.length)].join('');
        var correspondingPolygonClass = '.' + correspondingPolygon;
        if(clickPolygon.includes('Mirror'))
            clickPolygon = clickPolygon.replace('Mirror','');
        d3.select(clickId).on('click',function(){
            var showInputForm = showHideInputShow(clickId.slice(1,(clickId.length-2)),$scope);
            //dont delete this line : $scope.$apply()
            $scope.$apply(function () {
                if(clickPolygon.includes('upperMoldDiePolygon'))
                    $scope.upperMoldDieDataC = data;
                if(clickPolygon.includes('upperMoldInsertPolygon'))
                    $scope.upperMoldInsertDataC = data;
                if(clickPolygon.includes('upperMoldCurvePolygon'))
                    $scope.upperMoldCurveDataC = data;
                if(clickPolygon.includes('lowerMoldDiePolygon'))
                    $scope.lowerMoldDieDataC = data;
                if(clickPolygon.includes('lowerMoldInsertPolygon'))
                    $scope.lowerMoldInsertDataC = data;
                if(clickPolygon.includes('lowerMoldCurvePolygon'))
                    $scope.lowerMoldCurveDataC = data;

            });
            d3.selectAll(clickPolygonClass).style("fill",fillAfterClickEvents(showInputForm,clickPolygon));
            d3.selectAll(correspondingPolygonClass).style("fill",fillAfterClickEvents(showInputForm,correspondingPolygon));

        })

    }

    var fillAfterClickEvents = function (showOrNotInput,nameOfParts) {

        if(showOrNotInput){
            return "red"
        }else{
            if(nameOfParts.includes("Die"))
                if (nameOfParts.includes('Mirror'))
                    return "url(#mirrorAshGradient)"
                else
                    return "url(#ashGradient)"
            if(nameOfParts.includes("Insert"))
                if(nameOfParts.includes('Mirror'))
                    return "url(#mirrorPalegradient)"
                else
                    return "url(#palegradient)";
            if(nameOfParts.includes("Curve"))
                if(nameOfParts.includes('Mirror'))
                    return "url(#mirrorPalegradient)"
                else
                    return "url(#palegradient)";
        }
    }

    var clickToCircle = function (circleId, $scope, data) {
        circleId = '#'+circleId;
        d3.select(circleId).on('click',function(){
            $scope.circleInputShow = !$scope.circleInputShow;
            $scope.$apply(function () {
                $scope.circleDataC = data;
            });
            ($scope.circleInputShow) ? 	d3.selectAll(circleId).style("fill","red") :
                                        d3.selectAll(circleId).style("fill","#99d8c9");
        })
    }

    return {
        clickToIndividualPolygon : clickToIndividualPolygon,
        clickToCircle : clickToCircle
    }
}