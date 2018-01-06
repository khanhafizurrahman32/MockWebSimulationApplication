/**
 * Created by khanhafizurrahman on 10/16/17.
 */

var generatingCoordinates = function () {
    var x_RF_surf_fin_Mold,y_RF_surf_fin_Mold = 0;
    var funcTempxVal50PointsArray = [];
    var funcTempyVal50PointsArray = [];
    var funcTempArrayforFiftyPoints = [];
    function generatingYPoint(x,R,K,A2,A4, A6, A8, A10, A12, A14, A16, A18, A20) {
        return (Math.pow(x,2)/(R*(1+(Math.sqrt(1-(1+K)*((Math.pow(x,2))/(Math.pow(R,2)))))))
        + A2*(Math.pow(x,2)) + A4*(Math.pow(x,4)) + A6*(Math.pow(x,6)) + A8*(Math.pow(x,8))
        + A10*(Math.pow(x,10)) + A12*(Math.pow(x,12)) + A14*(Math.pow(x,14))
        + A16*(Math.pow(x,16)) + A18*(Math.pow(x,18)) + A20*(Math.pow(x,20)));
    }

    var gettingCurvePoints = function (D_surf_Mold, R_surf_Mold, K_surf_Mold, A2_surf_Mold, A4_surf_Mold, A6_surf_Mold,
                                       A8_surf_Mold, A10_surf_Mold, A12_surf_Mold, A14_surf_Mold, A16_surf_Mold,
                                       A18_surf_Mold,  A20_surf_Mold, N_surf_Mold ) {
        this.funcTempxVal50PointsArray = [];
        this.funcTempyVal50PointsArray = [];
        this.funcTempArrayforFiftyPoints = [];
        for (i =0; i< N_surf_Mold; i++){
            x_surf_1_Mold = i*((D_surf_Mold/2)/N_surf_Mold);
            y_surf_1_Mold = generatingYPoint(x_surf_1_Mold,R_surf_Mold,K_surf_Mold,
                A2_surf_Mold,A4_surf_Mold,A6_surf_Mold,
                A8_surf_Mold,A10_surf_Mold,A12_surf_Mold,
                A14_surf_Mold,A16_surf_Mold,A18_surf_Mold,
                A20_surf_Mold);

            if(i == (N_surf_Mold-1)) {
                var x_RF_surf_Mold = (i + 1) * ((D_surf_Mold / 2) / N_surf_Mold);
                var y_RF_surf_Mold = generatingYPoint(x_RF_surf_Mold, R_surf_Mold, K_surf_Mold,
                    A2_surf_Mold, A4_surf_Mold, A6_surf_Mold,
                    A8_surf_Mold, A10_surf_Mold, A12_surf_Mold,
                    A14_surf_Mold, A16_surf_Mold, A18_surf_Mold,
                    A20_surf_Mold);
                this.x_RF_surf_fin_Mold = (x_RF_surf_Mold) * 1e-3;
                this.y_RF_surf_fin_Mold = y_RF_surf_Mold * 1e-3;
                this.funcTempxVal50PointsArray.push(this.x_RF_surf_fin_Mold);
                this.funcTempyVal50PointsArray.push(this.y_RF_surf_fin_Mold);
            }
            var individualobject = {"x": x_surf_1_Mold*1e-3, "y": y_surf_1_Mold*1e-3};
            this.funcTempxVal50PointsArray.push(x_surf_1_Mold*1e-3);
            this.funcTempyVal50PointsArray.push(y_surf_1_Mold*1e-3);
            this.funcTempArrayforFiftyPoints.push(individualobject);

        }
    }

    return {
        gettingCurvePoints : gettingCurvePoints
    }
}

