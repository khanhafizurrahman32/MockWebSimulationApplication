/**
 * Created by khanhafizurrahman on 10/16/17.
 */
//*** Parameters for Upper Mold Design (mm) ***
var moldPropertiesDef = function () {
    //*** Parameters for Upper Mold Design (mm) ***
    var D_Insert		=	35	*1e-3;   //#a
    var D_1_Insert		=	32	*1e-3;   //#f
    var H_Insert		=	15	*1e-3;
    var H_1_Insert		=	8	*1e-3;     //#e
    var RF_surf_Mold    =   0;

    // Following are for the die values
    var D_Sleeve_1      =   32      *1e-3;
    var H_Sleeve_1      =   15      *1e-3 ;
    var H_1_Sleeve_1    =   4       *1e-3;   //#d
    var D_Mold		    =	64	*1e-3;   //#b
    var H_Mold		    =	15	*1e-3;   //#c
    var RF_surf_Mold    =   0;

    var getPropertiesForInsert = function () {
        return {D_Insert : D_Insert,D_1_Insert : D_1_Insert,H_Insert : H_Insert,H_1_Insert: H_1_Insert,RF_surf_Mold: RF_surf_Mold};
    }

    var getPropertiesForDie = function () {
        return {D_Sleeve_1 :D_Sleeve_1,H_Sleeve_1 : H_Sleeve_1,H_1_Sleeve_1 : H_1_Sleeve_1,D_Mold :D_Mold,H_Mold :H_Mold,RF_surf_Mold: RF_surf_Mold,H_Insert : H_Insert};
    }


    return {
        getPropertiesForInsert : getPropertiesForInsert,
        getPropertiesForDie : getPropertiesForDie,
    }
}