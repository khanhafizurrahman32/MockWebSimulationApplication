/**
 * Created by khanhafizurrahman on 10/15/17.
 */
var defineSVGProperties = function() {
    var viewBoxMinXpoint = 0;
    var viewBoxMinYpoint = 0;
    var viewBoxWidth = 580;
    var viewBoxHeight = 707;

    return {

        getViewBoxMinXpoint: function () {
            return viewBoxMinXpoint;
        },

        getViewBoxMinYpoint: function () {
            return viewBoxMinYpoint;
        },
        getViewBoxWidth:function () {
            return viewBoxWidth;
        },
        getViewBoxHeight:function () {
            return viewBoxHeight;
        }


    }
}

