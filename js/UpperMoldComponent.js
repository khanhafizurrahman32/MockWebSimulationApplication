/**
 * Created by khanhafizurrahman on 10/24/17.
 */
var createIndividualMold = function () {
    var simPGMCurveData,simPGMInsertData,simPGMDieData;
    var createCurve = function (SimPGMDataProviderService,MoldDataStructure,curvePointsData,simPGMCurveData) {
        this.simPGMCurveData = simPGMCurveData;
        MoldDataStructure.clearTempxVal50PointsArray();
        MoldDataStructure.clearTempyVal50PointsArray();
        MoldDataStructure.cleartempArrayforFiftyPoints();
        curvePointsData.gettingCurvePoints(this.simPGMCurveData.D_surf_Mold,this.simPGMCurveData.R_surf_Mold,this.simPGMCurveData.K_surf_Mold, this.simPGMCurveData.A2_surf_Mold,this.simPGMCurveData.A4_surf_Mold,this.simPGMCurveData.A6_surf_Mold, this.simPGMCurveData.A8_surf_Mold,this.simPGMCurveData.A10_surf_Mold,this.simPGMCurveData.A12_surf_Mold,this.simPGMCurveData.A14_surf_Mold,this.simPGMCurveData.A16_surf_Mold,this.simPGMCurveData.A18_surf_Mold,this.simPGMCurveData.A20_surf_Mold,50);
        MoldDataStructure.setTempxVal50PointsArray(curvePointsData.funcTempxVal50PointsArray);
        MoldDataStructure.setTempyVal50PointsArray(curvePointsData.funcTempyVal50PointsArray);
        MoldDataStructure.settempArrayforFiftyPoints(curvePointsData.funcTempArrayforFiftyPoints);
        return MoldDataStructure.gettempArrayforFiftyPoints();
    };

    var createInsert = function (SimPGMDataProviderService,MoldDataStructure,curvePointsData,MoldDataC,simPGMUMoldProperties,simPGMInsertData,portion) {
        this.simPGMInsertData = simPGMInsertData;
        MoldDataStructure.clearXVal50PointsArray();
        MoldDataStructure.clearYVal50PointsArray();
        MoldDataStructure.setXVal50PointsArray(MoldDataStructure.getTempxVal50PointsArray());
        MoldDataStructure.setXVal50PointsArray([curvePointsData.x_RF_surf_fin_Mold,this.simPGMInsertData.D_1_Insert/2,this.simPGMInsertData.D_Mold/2,0]);
        MoldDataStructure.setYVal50PointsArray(MoldDataStructure.getTempyVal50PointsArray());
        MoldDataStructure.setYVal50PointsArray([(curvePointsData.y_RF_surf_fin_Mold-simPGMUMoldProperties.getPropertiesForInsert().RF_surf_Mold),
            (curvePointsData.y_RF_surf_fin_Mold-simPGMUMoldProperties.getPropertiesForInsert().RF_surf_Mold-(this.simPGMInsertData.H_Mold-this.simPGMInsertData.H_Insert)),
            (curvePointsData.y_RF_surf_fin_Mold-simPGMUMoldProperties.getPropertiesForInsert().RF_surf_Mold+this.simPGMInsertData.H_Insert)]);
        MoldDataC.definingInsertPoints(MoldDataStructure.gettempArrayforFiftyPoints(),curvePointsData.x_RF_surf_fin_Mold,curvePointsData.y_RF_surf_fin_Mold,simPGMUMoldProperties.getPropertiesForInsert().RF_surf_Mold,this.simPGMInsertData.D_1_Insert,this.simPGMInsertData.H_Mold,this.simPGMInsertData.H_Insert,this.simPGMInsertData.H_1_Insert,this.simPGMInsertData.D_Insert,this.simPGMInsertData.D_Mold,MoldDataStructure,portion);
        return MoldDataStructure.getObjectArray();
    };
    var createDie = function (SimPGMDataProviderService,MoldDataStructure,curvePointsData,MoldDataC,simPGMUMoldProperties,simPGMDieData,portion) {
        this.simPGMDieData =  simPGMDieData;
        MoldDataStructure.clearXVal50PointsArray();
        MoldDataStructure.clearYVal50PointsArray();
        MoldDataStructure.setXVal50PointsArray(MoldDataStructure.getTempxVal50PointsArray());
        MoldDataStructure.setXVal50PointsArray([curvePointsData.x_RF_surf_fin_Mold,this.simPGMDieData.D_1_Insert/2,this.simPGMDieData.D_Mold/2,0]);
        MoldDataStructure.setYVal50PointsArray(MoldDataStructure.getTempyVal50PointsArray());
        MoldDataStructure.setYVal50PointsArray([(curvePointsData.y_RF_surf_fin_Mold-simPGMUMoldProperties.getPropertiesForDie().RF_surf_Mold),
            (curvePointsData.y_RF_surf_fin_Mold-simPGMUMoldProperties.getPropertiesForDie().RF_surf_Mold-(this.simPGMDieData.H_Mold-simPGMUMoldProperties.getPropertiesForDie().H_Insert)),
            (curvePointsData.y_RF_surf_fin_Mold-simPGMUMoldProperties.getPropertiesForDie().RF_surf_Mold+simPGMUMoldProperties.getPropertiesForDie().H_Insert)]);
        console.log('comp ', curvePointsData.y_RF_surf_fin_Mold);
        //console.log(this.simPGMDieData.D_Insert,this.simPGMDieData.D_Mold,this.simPGMDieData.H_Mold,this.simPGMDieData.H_1_Sleeve_1,this.simPGMDieData.H_1_Insert,this.simPGMDieData.D_1_Insert,curvePointsData.y_RF_surf_fin_Mold,simPGMUMoldProperties.getPropertiesForDie().RF_surf_Mold,simPGMUMoldProperties.getPropertiesForDie().H_Insert,MoldDataStructure.gettempArrayforFiftyPoints());
        MoldDataC.definingDiePoints(this.simPGMDieData.D_Insert,this.simPGMDieData.D_Mold,this.simPGMDieData.H_Mold,this.simPGMDieData.H_1_Sleeve_1,this.simPGMDieData.H_1_Insert,this.simPGMDieData.D_1_Insert,curvePointsData.y_RF_surf_fin_Mold,simPGMUMoldProperties.getPropertiesForDie().RF_surf_Mold,simPGMUMoldProperties.getPropertiesForDie().H_Insert,MoldDataStructure,MoldDataStructure.gettempArrayforFiftyPoints(),portion);
        return MoldDataStructure.getObjectArray2()
    };
    return{
        createCurve : createCurve,
        createInsert: createInsert,
        createDie: createDie
    }
}