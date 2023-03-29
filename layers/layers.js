var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_RESEAU_ROUTIER_WEB_0 = new ol.format.GeoJSON();
var features_RESEAU_ROUTIER_WEB_0 = format_RESEAU_ROUTIER_WEB_0.readFeatures(json_RESEAU_ROUTIER_WEB_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESEAU_ROUTIER_WEB_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RESEAU_ROUTIER_WEB_0.addFeatures(features_RESEAU_ROUTIER_WEB_0);var lyr_RESEAU_ROUTIER_WEB_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RESEAU_ROUTIER_WEB_0, 
                style: style_RESEAU_ROUTIER_WEB_0,
    title: 'RESEAU_ROUTIER_WEB<br />\
    <img src="styles/legend/RESEAU_ROUTIER_WEB_0_0.png" /> Bitume<br />\
    <img src="styles/legend/RESEAU_ROUTIER_WEB_0_1.png" /> Non bitumée<br />'
        });var format_Mission4_Entretien_classique_1 = new ol.format.GeoJSON();
var features_Mission4_Entretien_classique_1 = format_Mission4_Entretien_classique_1.readFeatures(json_Mission4_Entretien_classique_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mission4_Entretien_classique_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mission4_Entretien_classique_1.addFeatures(features_Mission4_Entretien_classique_1);var lyr_Mission4_Entretien_classique_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mission4_Entretien_classique_1, 
                style: style_Mission4_Entretien_classique_1,
                title: '<img src="styles/legend/Mission4_Entretien_classique_1.png" /> Mission4_Entretien_classique'
            });

lyr_RESEAU_ROUTIER_WEB_0.setVisible(true);lyr_Mission4_Entretien_classique_1.setVisible(true);
var layersList = [baseLayer,lyr_RESEAU_ROUTIER_WEB_0,lyr_Mission4_Entretien_classique_1];
lyr_RESEAU_ROUTIER_WEB_0.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'NOM': 'NOM', 'NATURE': 'NATURE', 'ETAT_1': 'ETAT_1', 'PAYS': 'PAYS', 'AUTEUR': 'AUTEUR', 'DATE_DE_CR': 'DATE_DE_CR', });
lyr_Mission4_Entretien_classique_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'regions': 'regions', 'DEBUT': 'DEBUT', 'FIN_1': 'FIN_1', 'Departemen': 'Departemen', 'DISTRICT': 'DISTRICT', 'OBSERVATIO': 'OBSERVATIO', 'Shape_Leng': 'Shape_Leng', 'longueur': 'longueur', 'x': 'x', 'y': 'y', 'x_fin': 'x_fin', 'y_fin': 'y_fin', });
lyr_RESEAU_ROUTIER_WEB_0.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'NOM': 'TextEdit', 'NATURE': 'TextEdit', 'ETAT_1': 'TextEdit', 'PAYS': 'TextEdit', 'AUTEUR': 'TextEdit', 'DATE_DE_CR': 'TextEdit', });
lyr_Mission4_Entretien_classique_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'regions': 'TextEdit', 'DEBUT': 'TextEdit', 'FIN_1': 'TextEdit', 'Departemen': 'TextEdit', 'DISTRICT': 'TextEdit', 'OBSERVATIO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'longueur': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'x_fin': 'TextEdit', 'y_fin': 'TextEdit', });
lyr_RESEAU_ROUTIER_WEB_0.set('fieldLabels', {'FNODE_': 'inline label', 'TNODE_': 'inline label', 'LPOLY_': 'inline label', 'RPOLY_': 'inline label', 'LENGTH': 'inline label', 'NOM': 'inline label', 'NATURE': 'inline label', 'ETAT_1': 'inline label', 'PAYS': 'inline label', 'AUTEUR': 'inline label', 'DATE_DE_CR': 'inline label', });
lyr_Mission4_Entretien_classique_1.set('fieldLabels', {'OBJECTID': 'no label', 'regions': 'no label', 'DEBUT': 'no label', 'FIN_1': 'no label', 'Departemen': 'no label', 'DISTRICT': 'no label', 'OBSERVATIO': 'no label', 'Shape_Leng': 'no label', 'longueur': 'no label', 'x': 'no label', 'y': 'no label', 'x_fin': 'no label', 'y_fin': 'no label', });
lyr_Mission4_Entretien_classique_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});