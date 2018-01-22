/**
 * Created by khanhafizurrahman on 10/16/17.
 */
//*** Parameters for Upper Mold Design (mm) ***
var moldPropertiesDef = function () {
    //*** Parameters for Upper Mold Design (mm) ***
    var D_Insert		=	0;   //#a
    var D_1_Insert		=	0;   //#f
    var H_Insert		=	0;
    var H_1_Insert		=	0;     //#e
    var RF_surf_Mold    =   0;

    // Following are for the die values
    var D_Sleeve_1      =   0;
    var H_Sleeve_1      =   0 ;
    var H_1_Sleeve_1    =   0;   //#d
    var D_Mold		    =	0;   //#b
    var H_Mold		    =	0;   //#c


    var getPropertiesForInsert = function () {
        return {D_Insert : D_Insert,D_1_Insert : D_1_Insert,H_Insert : H_Insert,H_1_Insert: H_1_Insert,RF_surf_Mold: RF_surf_Mold};
    }

    var getPropertiesForDie = function () {
        return {D_Sleeve_1 :this.D_Sleeve_1,H_Sleeve_1 : this.H_Sleeve_1,H_1_Sleeve_1 : this.H_1_Sleeve_1,D_Mold :this.D_Mold,H_Mold :this.H_Mold,RF_surf_Mold: this.RF_surf_Mold,H_Insert : this.H_Insert};
    }

    var setD_Insert = function (D_Insert) {
        this.D_Insert = D_Insert;
    }

    var setD_1_Insert = function (D_1_Insert) {
        this.D_1_Insert = D_1_Insert;
    }

    var setH_Insert = function (H_Insert) {
        this.H_Insert = H_Insert;
    }

    var setH_1_Insert = function (H_1_Insert) {
        this.H_1_Insert = H_1_Insert;
    }

    var setRF_surf_Mold = function (RF_surf_Mold) {
        this.RF_surf_Mold = RF_surf_Mold;
    }

    var setD_Sleeve_1 = function (D_Sleeve_1) {
        this.D_Sleeve_1 = D_Sleeve_1;
    }

    var setH_Sleeve_1 = function (H_Sleeve_1) {
        this.H_Sleeve_1 = H_Sleeve_1;
    }

    var setH_1_Sleeve_1 = function (H_1_Sleeve_1) {
        this.H_1_Sleeve_1 = H_1_Sleeve_1;
    }

    var setD_Mold = function (D_Mold) {
        this.D_Mold = D_Mold;
    }

    var setH_Mold= function (H_Mold) {
        this.H_Mold = H_Mold;
    }

    var settingProp = function (D_Insert,D_1_Insert,H_Insert,H_1_Insert,RF_surf_Mold,D_Sleeve_1,H_Sleeve_1,H_1_Sleeve_1,D_Mold,H_Mold) {
        this.setD_Insert(D_Insert);
        this.setD_1_Insert(D_1_Insert);
        this.setH_Insert(H_Insert);
        this.setH_1_Insert(H_1_Insert);
        this.setRF_surf_Mold(RF_surf_Mold);
        this.setD_Sleeve_1(D_Sleeve_1);
        this.setH_Sleeve_1(H_Sleeve_1);
        this.setH_1_Sleeve_1(H_1_Sleeve_1);
        this.setD_Mold(D_Mold);
        this.setH_Mold(H_Mold);
    }

    return {
        getPropertiesForInsert : getPropertiesForInsert,
        getPropertiesForDie : getPropertiesForDie,
        setD_Insert: setD_Insert,
        setD_1_Insert: setD_1_Insert,
        setH_Insert: setH_Insert,
        setH_1_Insert: setH_1_Insert,
        setRF_surf_Mold: setRF_surf_Mold,
        setD_Sleeve_1: setD_Sleeve_1,
        setH_Sleeve_1: setH_Sleeve_1,
        setH_1_Sleeve_1: setH_1_Sleeve_1,
        setD_Mold: setD_Mold,
        setH_Mold: setH_Mold,
        settingProp: settingProp
    }
}