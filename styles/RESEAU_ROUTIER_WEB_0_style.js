var size = 0;
var placement = 'point';
function categories_RESEAU_ROUTIER_WEB_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Bitume':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(217,29,101,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Non bitumée':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(135,135,135,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_RESEAU_ROUTIER_WEB_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("ETAT_1");
    var labelText = "";
    size = 0;
    var labelFont = "9.75px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_RESEAU_ROUTIER_WEB_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
