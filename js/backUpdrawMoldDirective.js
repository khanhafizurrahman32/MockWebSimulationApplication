/**
 *
 */

myModule.directive('drawCompleteMold',function (SimPGMDataProviderService){
    var link = function ($scope, $element, attrs){
        var defineSVGdrawPropertiesObject = defineSVGProperties();
        // .attr(width) or .attr(height) dile responsive thake na
        var svgContainer = d3.select($element[0]).append("svg")
            .attr("preserveAspectRatio","xMidYMid meet")
            .attr("viewBox",defineSVGdrawPropertiesObject.getViewBoxMinXpoint() + " " +
                defineSVGdrawPropertiesObject.getViewBoxMinYpoint() + " " +
                defineSVGdrawPropertiesObject.getViewBoxWidth() + " " +
                defineSVGdrawPropertiesObject.getViewBoxHeight())
            .classed("svg-content-responsive",true).attr("id","globalSVG")
            .style("border", "1px solid black");

        defineGradientColorsforEachPart(svgContainer);

        var eachPolygon = new drawPolygons();
        var upperMoldDataC = new moldDataCreation();
        var upperMoldDataStructure = new defDataStr();
        var curvePointsData = new generatingCoordinates();
        var simPGMUpperMoldProperties = new moldPropertiesDef();
        var createUpperMoldComponents = new createIndividualMold();
        var allPolygonHandleBroadcast = new afterAngularBroadcast ();

        SimPGMDataProviderService.setUpperMoldCurveObject(32,-100,0,0,0,0,0,0,0,0,0,0,0);
        var simPGMUpperCurveData = SimPGMDataProviderService.getUpperMoldCurveObject();
        SimPGMDataProviderService.setUpperMoldInsertObject(0.044,0.064,0.015,0.04,0.015,0.004,0.036);
        var simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
        SimPGMDataProviderService.setUpperMoldDieObject(0.044,0.064,0.015,0.04,0.004,0.036);
        var simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
        var relativeDataForUpperCurve = createUpperMoldComponents.createCurve(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,simPGMUpperCurveData);
        var relativeDataForUpperInsert = createUpperMoldComponents.createInsert(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperInsertData);
        var relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData);

        var scalingFactor = new ScalingGangFunction().scalingWidthNHeight();
        var afterScalingFactorRelativeDataForUpperCurve = new ScalingGangFunction().multiplyingEachPointWithScalingFactor(relativeDataForUpperCurve,scalingFactor);
        var afterScalingFactorRelativeDataForUpperInsert = new ScalingGangFunction().multiplyingEachPointWithScalingFactor(relativeDataForUpperInsert,scalingFactor);
        var afterScalingFactorRelativeDataForUpperDie = new ScalingGangFunction().multiplyingEachPointWithScalingFactor(relativeDataForUpperDie,scalingFactor);

        // scaling part is started
        var scalingUpperComponents = new defineScaleComponent();
        scalingUpperComponents.setScalarFunction(defineSVGdrawPropertiesObject.getViewBoxWidth(),defineSVGdrawPropertiesObject.getViewBoxHeight());
        scalingUpperComponents.setScaleX(upperMoldDataStructure.getXVal50PointsArray());
        var scaleXUpperFunction = scalingUpperComponents.getScaleX();
        scalingUpperComponents.setMirrorScaleX(upperMoldDataStructure.getXVal50PointsArray());
        var mirrorScaleXUpperFunction = scalingUpperComponents.getMirrorScaleX();
        scalingUpperComponents.setScaleY(upperMoldDataStructure.getYVal50PointsArray());
        var scaleYUpperFunction = scalingUpperComponents.getScaleY();
        scalingUpperComponents.setCircleScaleY(upperMoldDataStructure.getYVal50PointsArray());
        var circleScaleY = scalingUpperComponents.getCircleScaleY();
        scalingUpperComponents.setMirrorScaleY(upperMoldDataStructure.getYVal50PointsArray());
        var mirrorScaleYUpperFunction = scalingUpperComponents.getMirrorScaleY();

        eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',relativeDataForUpperDie,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperDieData,null,$scope);
        var lowerMoldDataC = new moldDataCreation();
        var lowerMoldDataStructure = new defDataStr();
        var curveLowerPointsData = new generatingCoordinates();
        var simPGMLowerMoldProperties = new moldPropertiesDef();
        var createLowerMoldComponents = new createIndividualMold();

        SimPGMDataProviderService.setLowerMoldCurveObject(32,-100,0,0,0,0,0,0,0,0,0,0,0);
        var simPGMLowerCurveData = SimPGMDataProviderService.getLowerMoldCurveObject();
        SimPGMDataProviderService.setLowerMoldInsertObject(0.044,0.064,0.015,0.04,0.015,0.004,0.036);
        var simPGMLowerInsertData = SimPGMDataProviderService.getLowerMoldInsertObject();
        SimPGMDataProviderService.setLowerMoldDieObject(0.044,0.064,0.015,0.04,0.004,0.036);
        var simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();

        var relativeDataForLowerCurve = createLowerMoldComponents.createCurve(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,simPGMLowerCurveData);
        var relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData);
        var relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData);

        var scalingLowerComponents = new defineScaleComponent();
        scalingLowerComponents.setScalarFunction(defineSVGdrawPropertiesObject.getViewBoxWidth(),defineSVGdrawPropertiesObject.getViewBoxHeight());
        scalingLowerComponents.setScaleX(lowerMoldDataStructure.getXVal50PointsArray());
        var scaleXLowerFunction = scalingLowerComponents.getScaleX();
        scalingLowerComponents.setMirrorScaleX(lowerMoldDataStructure.getXVal50PointsArray());
        var mirrorScaleXLowerFunction = scalingLowerComponents.getMirrorScaleX();
        scalingLowerComponents.setScaleY(lowerMoldDataStructure.getYVal50PointsArray());
        var scaleYLowerFunction = scalingLowerComponents.getScaleY();
        scalingLowerComponents.setMirrorScaleY(lowerMoldDataStructure.getYVal50PointsArray())
        var mirrorScaleYLowerFunction = scalingLowerComponents.getMirrorScaleY();


        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieId','lowerMoldDiePolygon',relativeDataForLowerDie,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerDieData,null,$scope);
        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieMirrorId','lowerMoldDieMirrorPolygon',relativeDataForLowerDie,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerDieData,null,$scope);
        $scope.$on('handleLowerMoldDieDataBroadcast',function () {
            simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
            relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData);
            var diePolygonColor = d3.select('#lowerMoldDieId')[0][0].style.fill;
            var mirrorDiePolygonColor = d3.select('#lowerMoldDieMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldDieClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieId','lowerMoldDiePolygon',relativeDataForLowerDie,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerDieData,diePolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieMirrorId','lowerMoldDieMirrorPolygon',relativeDataForLowerDie,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerDieData,mirrorDiePolygonColor,$scope);
        })
        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertId','lowerMoldInsertPolygon',relativeDataForLowerInsert,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,null,$scope);
        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertMirrorId','lowerMoldInsertMirrorPolygon',relativeDataForLowerInsert,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,null,$scope);
        $scope.$on('handleLowerMoldInsertDataBroadcast',function () {
            simPGMLowerInsertData = SimPGMDataProviderService.getLowerMoldInsertObject();
            relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData);
            var insertPolygonColor = d3.select('#lowerMoldInsertId')[0][0].style.fill;
            var mirrorInsertPolygonColor = d3.select('#lowerMoldInsertMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldInsertClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertId','lowerMoldInsertPolygon',relativeDataForLowerInsert,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,insertPolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertMirrorId','lowerMoldInsertMirrorPolygon',relativeDataForLowerInsert,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,mirrorInsertPolygonColor,$scope);
            var curvePolygonColor = d3.select('#lowerMoldCurveId')[0][0].style.fill;
            var mirrorCurvePolygonColor = d3.select('#lowerMoldCurveMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldCurveClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveId','lowerMoldCurvePolygon',relativeDataForLowerCurve,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,curvePolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveMirrorId','lowerMoldCurveMirrorPolygon',relativeDataForLowerCurve,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,mirrorCurvePolygonColor,$scope);
        })

        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveId','lowerMoldCurvePolygon',relativeDataForLowerCurve,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,null,$scope);
        // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveMirrorId','lowerMoldCurveMirrorPolygon',relativeDataForLowerCurve,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,null,$scope);
        $scope.$on ('handleLowerMoldCurveDataBroadcast',function (){
            simPGMLowerCurveData = SimPGMDataProviderService.getLowerMoldCurveObject();
            relativeDataForLowerCurve = createLowerMoldComponents.createCurve(SimPGMDataProviderService,lowerMoldDataStructure,curveLowerPointsData,simPGMLowerCurveData);
            simPGMLowerInsertData = SimPGMDataProviderService.getLowerMoldInsertObject();
            relativeDataForLowerInsert = createLowerMoldComponents.createInsert(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerInsertData);
            simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
            relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData);
            var diePolygonColor = d3.select('#lowerMoldDieId')[0][0].style.fill;
            var mirrorDiePolygonColor = d3.select('#lowerMoldDieMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldDieClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieId','lowerMoldDiePolygon',relativeDataForLowerDie,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerDieData,diePolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieMirrorId','lowerMoldDieMirrorPolygon',relativeDataForLowerDie,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerDieData,mirrorDiePolygonColor,$scope);

            var insertPolygonColor = d3.select('#lowerMoldInsertId')[0][0].style.fill;
            var mirrorInsertPolygonColor = d3.select('#lowerMoldInsertMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldInsertClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertId','lowerMoldInsertPolygon',relativeDataForLowerInsert,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,insertPolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldInsertClass','lowerMoldInsertMirrorId','lowerMoldInsertMirrorPolygon',relativeDataForLowerInsert,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerInsertData,mirrorInsertPolygonColor,$scope);

            var curvePolygonColor = d3.select('#lowerMoldCurveId')[0][0].style.fill;
            var mirrorCurvePolygonColor = d3.select('#lowerMoldCurveMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .lowerMoldCurveClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveId','lowerMoldCurvePolygon',relativeDataForLowerCurve,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,curvePolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldCurveClass','lowerMoldCurveMirrorId','lowerMoldCurveMirrorPolygon',relativeDataForLowerCurve,mirrorScaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerCurveData,mirrorCurvePolygonColor,$scope);
        })
        var maxYValueInRelativeDataForLowerCurve = Math.max.apply(Math,relativeDataForLowerCurve.map(function (currentObject) {
            return currentObject.y;
        }));
        var circleYPoint = mirrorScaleYLowerFunction.invert((mirrorScaleYLowerFunction(maxYValueInRelativeDataForLowerCurve))-60)
        SimPGMDataProviderService.setCircleData(0.00001,circleYPoint,.006);//0.00000001
        var relativeDataForCircle = SimPGMDataProviderService.circleData();
        // var circleComponent = new polygonDefinition();
        // var circleComponentProperties = {svgContainer : svgContainer,className : 'circleClass', idName : 'circleDrawid',polygonClassName : null,clickClassId : null, clickClassPolygonName : null, clickClassIdName: null, dataForDrawing: relativeDataForCircle, scaleXPointsFunction: scaleXUpperFunction,scaleYPointsFunction : mirrorScaleYLowerFunction,counter : 0}
        // circleComponent.polyComponent(circleComponentProperties);
        // var circleComponentClick = new clickEventsToPolygon();
         circleComponentClick.clickToCircle(circleComponentProperties.idName,$scope,circleScaleY);
        $scope.$on('handlecircleDataBroadcast',function () {
            relativeDataForCircle = SimPGMDataProviderService.circleData();
            var circleColor = d3.select('#circleDrawid')[0][0].style.fill;
            d3.selectAll('#globalSVG #circleDrawid').remove();
            if(relativeDataForCircle[0].radius > .065){
                // simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
                // simPGMLowerDieData = SimPGMDataProviderService.getLowerMoldDieObject();
                // var initialCircleHeight = (2*60*.015)/270.51;
                // var initialTotalInputHeight = .015 + initialCircleHeight + .001 + .015;
                // var initialTotalInputHeightInView = 270.51+120+18.034+253.814;
                // var circleHeightAfterNewRadius = (2*relativeDataForCircle[0].radius*.015)/270.51;
                // var changeTotalInputHeight = initialTotalInputHeight + (circleHeightAfterNewRadius - initialCircleHeight);
                // var changeUpperMoldHeight = (initialTotalInputHeight/changeTotalInputHeight) *.015;
                // var changeCircleHeight = (initialTotalInputHeight/changeTotalInputHeight) *circleHeightAfterNewRadius;
                // var changeCircleRadius = 60*circleHeightAfterNewRadius/initialTotalInputHeight;
                // var changeLowerMoldHeight = (initialTotalInputHeight/changeTotalInputHeight) *.015;
                // relativeDataForCircle[0].radius = (changeCircleRadius/2);
                // var differenceInCircularRadius = relativeDataForCircle[0].radius - SimPGMDataProviderService.getPreviousCircle()[0].radius
                // relativeDataForCircle[0].y_axis = circleScaleY.invert(circleScaleY(relativeDataForCircle[0].y_axis) - differenceInCircularRadius);
                // simPGMUpperDieData.H_Mold = changeUpperMoldHeight;
                // relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData);
                // relativeDataForCircle[0].y_axis = circleScaleY.invert(circleScaleY(relativeDataForCircle[0].y_axis) - differenceInCircularRadius);
                // d3.selectAll('#globalSVG .upperMoldDieClass').remove();
                // eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',relativeDataForUpperDie,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperDieData,null,$scope);
                // d3.selectAll('#globalSVG .upperMoldInsertClass').remove();
                // d3.selectAll('#globalSVG .upperMoldCurveClass').remove();
                // // eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',relativeDataForUpperDie,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperDieData,null,$scope);
                // circleComponentProperties = {svgContainer : svgContainer,className : 'circleClass', idName : 'circleDrawid',polygonClassName : null,clickClassId : null, clickClassPolygonName : null, clickClassIdName: null, dataForDrawing: relativeDataForCircle, scaleXPointsFunction: scaleXUpperFunction,scaleYPointsFunction : mirrorScaleYLowerFunction,counter : 0, color : circleColor}
                // circleComponent.polyComponent(circleComponentProperties);
                // circleComponentClick.clickToCircle(circleComponentProperties.idName,$scope,circleScaleY);
                // simPGMLowerDieData.H_Mold = changeLowerMoldHeight;
                // relativeDataForLowerDie = createLowerMoldComponents.createDie(SimPGMDataProviderService,lowerMoldDataStructure,curvePointsData,lowerMoldDataC,simPGMLowerMoldProperties,simPGMLowerDieData);
                // d3.selectAll('#globalSVG .lowerMoldDieClass').remove();
                // eachPolygon.drawEachPolygon(svgContainer,'lowerMoldDieClass','lowerMoldDieId','lowerMoldDiePolygon',relativeDataForLowerDie,scaleXLowerFunction,mirrorScaleYLowerFunction,simPGMLowerDieData,null,$scope);
                // d3.selectAll('#globalSVG .lowerMoldInsertClass').remove();
                // d3.selectAll('#globalSVG .lowerMoldCurveClass').remove();

                var scaleOperator = new ScalingGangFunction().scalingWidthNHeight();
                // console.log('186',scaleOperator);
                // var example = [5,10,15,20];
                // example = example.map(function (x) {
                //     return x/100;
                // })
                // console.log(example);
            }
            else{
                var maxYValueInRelativeDataForLowerCurve = Math.max.apply(Math,relativeDataForLowerCurve.map(function (currentObject) {
                    return currentObject.y;
                }));
                var circleYPoint = mirrorScaleYLowerFunction.invert((mirrorScaleYLowerFunction(maxYValueInRelativeDataForLowerCurve))-(relativeDataForCircle[0].radius*10000));
                SimPGMDataProviderService.setCircleData(0.00001,circleYPoint,relativeDataForCircle[0].radius);//0.00000001
                var relativeDataForCircle = SimPGMDataProviderService.circleData();
                circleComponent = new polygonDefinition();
                circleComponentProperties = {svgContainer : svgContainer,className : 'circleClass', idName : 'circleDrawid',polygonClassName : null,clickClassId : null, clickClassPolygonName : null, clickClassIdName: null, dataForDrawing: relativeDataForCircle, scaleXPointsFunction: scaleXUpperFunction,scaleYPointsFunction : mirrorScaleYLowerFunction,counter : 0,color: circleColor}
                circleComponent.polyComponent(circleComponentProperties);
                circleComponentClick.clickToCircle(circleComponentProperties.idName,$scope,circleScaleY);
            }
        })
        var differenceInLengthBetweenTwoMolds = scalingLowerComponents.getMirrorScaleYRangeMinValue() - relativeDataForCircle[0].radius;
        var remainSpaceBetweenMoldAndCircle = 17.43;
        var totalSpaceInCalc = differenceInLengthBetweenTwoMolds - remainSpaceBetweenMoldAndCircle;
        scalingUpperComponents.setScaleYRangeMaxValue(320);
        scalingUpperComponents.setScaleY(upperMoldDataStructure.getYVal50PointsArray());
        scaleYUpperFunction = scalingUpperComponents.getScaleY();
        // var upperMoldDieComponent = eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',relativeDataForUpperDie,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperDieData,null,$scope);
        // eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieMirrorId','upperMoldDieMirrorPolygon',relativeDataForUpperDie,mirrorScaleXUpperFunction,scaleYUpperFunction,simPGMUpperDieData,null,$scope);

        $scope.$on('handleUpperMoldDieDataBroadcast',function () {
            simPGMUpperDieData = SimPGMDataProviderService.getUpperMoldDieObject();
            relativeDataForUpperDie = createUpperMoldComponents.createDie(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperDieData);
            var diePolygonColor = d3.select('#upperMoldDieId')[0][0].style.fill;
            var mirrorDiePolygonColor =d3.select('#upperMoldDieMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .upperMoldDieClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieId','upperMoldDiePolygon',relativeDataForUpperDie,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperDieData,diePolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'upperMoldDieClass','upperMoldDieMirrorId','upperMoldDieMirrorPolygon',relativeDataForUpperDie,mirrorScaleXUpperFunction,scaleYUpperFunction,simPGMUpperDieData,mirrorDiePolygonColor,$scope);
        })
        // eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertId','upperMoldInsertPolygon',relativeDataForUpperInsert,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperInsertData,null,$scope);
        // eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertMirrorId','upperMoldInsertMirrorPolygon',relativeDataForUpperInsert,mirrorScaleXUpperFunction,scaleYUpperFunction,simPGMUpperInsertData,null,$scope);
        $scope.$on('handleUpperMoldInsertDataBroadcast',function () {
            var simPGMUpperInsertData = SimPGMDataProviderService.getUpperMoldInsertObject();
            for(var key in simPGMUpperInsertData){
                if(typeof (simPGMUpperInsertData[key])){
                    simPGMUpperInsertData[key] = parseFloat(simPGMUpperInsertData[key]);
                }
            }
            relativeDataForUpperInsert = createUpperMoldComponents.createInsert(SimPGMDataProviderService,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,simPGMUpperInsertData);
            var insertPolygonColor = d3.select('#upperMoldInsertId')[0][0].style.fill;
            var mirrorInsertPolygonColor = d3.select('#upperMoldInsertMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .upperMoldInsertClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertId','upperMoldInsertPolygon',relativeDataForUpperInsert,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperInsertData,insertPolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'upperMoldInsertClass','upperMoldInsertMirrorId','upperMoldInsertMirrorPolygon',relativeDataForUpperInsert,mirrorScaleXUpperFunction,scaleYUpperFunction,simPGMUpperInsertData,mirrorInsertPolygonColor,$scope);
            var curvePolygonColor = d3.select('#upperMoldCurveId')[0][0].style.fill;
            var mirrorCurvePolygonColor = d3.select('#upperMoldCurveMirrorId')[0][0].style.fill;
            d3.selectAll('#globalSVG .upperMoldCurveClass').remove();
            // eachPolygon.drawEachPolygon(svgContainer,'upperMoldCurveClass','upperMoldCurveId','upperMoldCurvePolygon',relativeDataForUpperCurve,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperCurveData,curvePolygonColor,$scope);
            // eachPolygon.drawEachPolygon(svgContainer,'upperMoldCurveClass','upperMoldCurveMirrorId','upperMoldCurveMirrorPolygon',relativeDataForUpperCurve,mirrorScaleXUpperFunction,scaleYUpperFunction,simPGMUpperCurveData,mirrorCurvePolygonColor,$scope);
        })
        // eachPolygon.drawEachPolygon(svgContainer,'upperMoldCurveClass','upperMoldCurveId','upperMoldCurvePolygon',relativeDataForUpperCurve,scaleXUpperFunction,scaleYUpperFunction,simPGMUpperCurveData,null,$scope);
        // eachPolygon.drawEachPolygon(svgContainer,'upperMoldCurveClass','upperMoldCurveMirrorId','upperMoldCurveMirrorPolygon',relativeDataForUpperCurve,mirrorScaleXUpperFunction,scaleYUpperFunction,simPGMUpperCurveData,null,$scope);

        $scope.$on ('handleUpperMoldCurveDataBroadcast',function (){
            allPolygonHandleBroadcast.upperCurveDataBroadcast($scope,SimPGMDataProviderService,createUpperMoldComponents,eachPolygon,upperMoldDataStructure,curvePointsData,upperMoldDataC,simPGMUpperMoldProperties,scaleXUpperFunction,scaleYUpperFunction,mirrorScaleXUpperFunction,svgContainer);
        })

    }
    return {
        link : link
    }
})

/**
 * Created by khanhafizurrahman on 12/7/17.
 */
