/**
 * Created by khanhafizurrahman on 10/21/17.
 */
var moldDataCreation = function (){

    var definingInsertPoints = function (tempArrayForFiftyPoints,x_RF_surf_Mold,y_RF_surf_Mold,RF_surf_Mold,D_1_Insert,H_Mold,H_Insert,H_1_Insert,D_Insert,D_mold,upperMoldDataStructure,portion) {
            // var point1 = {"x":x_RF_surf_Mold, "y": (y_RF_surf_Mold-RF_surf_Mold)};
            var point1 = {"x":x_RF_surf_Mold, "y": tempArrayForFiftyPoints[49].y};
            // var point2 = {"x":D_1_Insert/2, "y": (y_RF_surf_Mold-RF_surf_Mold)};
            var point2 = {"x":D_1_Insert/2, "y": tempArrayForFiftyPoints[49].y};
            var point3 = {"x":D_1_Insert/2, "y": y_RF_surf_Mold-RF_surf_Mold-(H_Mold-H_Insert)};
            var point10 = {"x":D_1_Insert/2, "y": ((y_RF_surf_Mold-RF_surf_Mold+H_Insert)-H_1_Insert)};
            var point9 = {"x":D_Insert/2, "y": ((y_RF_surf_Mold-RF_surf_Mold+H_Insert)-H_1_Insert)};
            var point8, point6;
            if(portion.includes('lower') && tempArrayForFiftyPoints[49].y< tempArrayForFiftyPoints[0].y) {
                point8 = {"x": D_Insert / 2, "y": (y_RF_surf_Mold - RF_surf_Mold + H_Insert)};
                point6 = {"x": 0, "y": (y_RF_surf_Mold - RF_surf_Mold + H_Insert)};
            }else if (portion.includes('lower') && tempArrayForFiftyPoints[49].y> tempArrayForFiftyPoints[0].y) {
                point8 = {"x": D_Insert / 2, "y": (y_RF_surf_Mold - RF_surf_Mold + (H_Insert-tempArrayForFiftyPoints[49].y))};
                point6 = {"x": 0, "y": (y_RF_surf_Mold - RF_surf_Mold + (H_Insert-tempArrayForFiftyPoints[49].y))};
            }
            if(portion.includes('upper') && tempArrayForFiftyPoints[49].y< tempArrayForFiftyPoints[0].y) {
                point8 = {"x": D_Insert / 2, "y": (y_RF_surf_Mold - RF_surf_Mold + H_Insert)};
                point6 = {"x": 0, "y": (y_RF_surf_Mold - RF_surf_Mold + H_Insert)};
            }else if (portion.includes('upper') && tempArrayForFiftyPoints[49].y> tempArrayForFiftyPoints[0].y) {
                point8 = {"x": D_Insert / 2, "y": (y_RF_surf_Mold - RF_surf_Mold + (H_Insert-tempArrayForFiftyPoints[49].y))};
                point6 = {"x": 0, "y": (y_RF_surf_Mold - RF_surf_Mold + (H_Insert-tempArrayForFiftyPoints[49].y))};
            }
            upperMoldDataStructure.clearObjectArray();
            upperMoldDataStructure.setObjectArray([upperMoldDataStructure.gettempArrayforFiftyPoints()[49],point1,point2,point3,point10,point9,point8,point6])

    }
    
    var definingDiePoints = function (D_Insert,D_Mold,H_Mold,H_1_Sleeve_1,H_1_Insert,D_1_Insert,y_RF_surf_Mold,RF_surf_Mold,H_Insert,upperMoldDataStructure,tempArrayForFiftyPoints,portion) {
        var point3 = {"x":D_1_Insert/2, "y": y_RF_surf_Mold-RF_surf_Mold-(H_Mold-H_Insert)};
        var point4 = {"x":D_Mold/2, "y": y_RF_surf_Mold-RF_surf_Mold-(H_Mold-H_Insert)};
        var point5,point8,point9,point10
        if(portion.includes('lower') && (tempArrayForFiftyPoints[49].y< tempArrayForFiftyPoints[0].y)) {
            point5 = {"x":D_Mold/2, "y": (y_RF_surf_Mold-RF_surf_Mold+H_Insert)};
            point8 = {"x":D_Insert/2, "y": (y_RF_surf_Mold-RF_surf_Mold+H_Insert)};
        }else if (portion.includes('lower') && (tempArrayForFiftyPoints[49].y> tempArrayForFiftyPoints[0].y)){
            point5 = {"x":D_Mold/2, "y": (y_RF_surf_Mold-RF_surf_Mold+(H_Insert-tempArrayForFiftyPoints[49].y))};
            point8 = {"x":D_Insert/2, "y": (y_RF_surf_Mold-RF_surf_Mold+(H_Insert-tempArrayForFiftyPoints[49].y))};
        }
        if(portion.includes('upper') && (tempArrayForFiftyPoints[49].y< tempArrayForFiftyPoints[0].y)) {
            point5 = {"x":D_Mold/2, "y": (y_RF_surf_Mold-RF_surf_Mold+H_Insert)};
            point8 = {"x":D_Insert/2, "y": (y_RF_surf_Mold-RF_surf_Mold+H_Insert)};
        }else if (portion.includes('upper') && (tempArrayForFiftyPoints[49].y> tempArrayForFiftyPoints[0].y)){
            point5 = {"x":D_Mold/2, "y": (y_RF_surf_Mold-RF_surf_Mold+(H_Insert-tempArrayForFiftyPoints[49].y))};
            point8 = {"x":D_Insert/2, "y": (y_RF_surf_Mold-RF_surf_Mold+(H_Insert-tempArrayForFiftyPoints[49].y))};
        }
        point9 = {"x":D_Insert/2, "y": ((y_RF_surf_Mold-RF_surf_Mold+H_Insert)-H_1_Insert)};
        point10 = {"x":D_1_Insert/2, "y": ((y_RF_surf_Mold-RF_surf_Mold+H_Insert)-H_1_Insert)};

        upperMoldDataStructure.clearObjectArray2();
        upperMoldDataStructure.setObjectArray2([point3,point4,point5,point8,point9,point10]);
    }

    return {
        definingInsertPoints : definingInsertPoints,
        definingDiePoints : definingDiePoints
    }
}