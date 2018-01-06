/**
 * Created by khanhafizurrahman on 10/21/17.
 */
var moldDataCreation = function (){

    var definingInsertPoints = function (tempArrayForFiftyPoints,x_RF_surf_Mold,y_RF_surf_Mold,RF_surf_Mold,D_1_Insert,H_Mold,H_Insert,H_1_Insert,D_Insert,D_mold,upperMoldDataStructure) {
        var point1 = {"x":x_RF_surf_Mold, "y": (y_RF_surf_Mold-RF_surf_Mold)};
        var point2 = {"x":D_1_Insert/2, "y": (y_RF_surf_Mold-RF_surf_Mold)};
        var point3 = {"x":D_1_Insert/2, "y": y_RF_surf_Mold-RF_surf_Mold-(H_Mold-H_Insert)};
        var point10 = {"x":D_1_Insert/2, "y": ((y_RF_surf_Mold-RF_surf_Mold+H_Insert)-H_1_Insert)};
        var point9 = {"x":D_Insert/2, "y": ((y_RF_surf_Mold-RF_surf_Mold+H_Insert)-H_1_Insert)};
        var point8 = {"x":D_Insert/2, "y": (y_RF_surf_Mold-RF_surf_Mold+H_Insert)};
        var point6 = {"x":0, "y": (y_RF_surf_Mold-RF_surf_Mold+H_Insert)};
        upperMoldDataStructure.clearObjectArray();
        //console.log('16',upperMoldDataStructure.gettempArrayforFiftyPoints())
        //upperMoldDataStructure.setObjectArray(tempArrayForFiftyPoints);
        //console.log('18',upperMoldDataStructure.gettempArrayforFiftyPoints())
        //upperMoldDataStructure.setObjectArray([point1,point2,point3,point10,point9,point8,point6])
        //console.log('20',upperMoldDataStructure.gettempArrayforFiftyPoints())
        upperMoldDataStructure.setObjectArray([upperMoldDataStructure.gettempArrayforFiftyPoints()[49],point1,point2,point3,point10,point9,point8,point6,upperMoldDataStructure.gettempArrayforFiftyPoints()[0]])
    }
    
    var definingDiePoints = function (D_Insert,D_Mold,H_Mold,H_1_Sleeve_1,H_1_Insert,D_1_Insert,y_RF_surf_Mold,RF_surf_Mold,H_Insert,upperMoldDataStructure) {
        var point3 = {"x":D_1_Insert/2, "y": y_RF_surf_Mold-RF_surf_Mold-(H_Mold-H_Insert)};
        var point4 = {"x":D_Mold/2, "y": y_RF_surf_Mold-RF_surf_Mold-(H_Mold-H_Insert)};
        var point5 = {"x":D_Mold/2, "y": (y_RF_surf_Mold-RF_surf_Mold+H_Insert)};
        var point8 = {"x":D_Insert/2, "y": (y_RF_surf_Mold-RF_surf_Mold+H_Insert)};
        var point9 = {"x":D_Insert/2, "y": ((y_RF_surf_Mold-RF_surf_Mold+H_Insert)-H_1_Insert)};
        var point10 = {"x":D_1_Insert/2, "y": ((y_RF_surf_Mold-RF_surf_Mold+H_Insert)-H_1_Insert)};
        upperMoldDataStructure.clearObjectArray2();
        upperMoldDataStructure.setObjectArray2([point3,point4,point5,point8,point9,point10]);
    }

    return {
        definingInsertPoints : definingInsertPoints,
        definingDiePoints : definingDiePoints
    }
}