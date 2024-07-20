var wms_layers = [];

var format_Manchaurbana_0 = new ol.format.GeoJSON();
var features_Manchaurbana_0 = format_Manchaurbana_0.readFeatures(json_Manchaurbana_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manchaurbana_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manchaurbana_0.addFeatures(features_Manchaurbana_0);
var lyr_Manchaurbana_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manchaurbana_0, 
                style: style_Manchaurbana_0,
                popuplayertitle: "Mancha urbana",
                interactive: true,
                title: '<img src="styles/legend/Manchaurbana_0.png" /> Mancha urbana'
            });
var format_Curvasdenvel_1 = new ol.format.GeoJSON();
var features_Curvasdenvel_1 = format_Curvasdenvel_1.readFeatures(json_Curvasdenvel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvasdenvel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvasdenvel_1.addFeatures(features_Curvasdenvel_1);
var lyr_Curvasdenvel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvasdenvel_1, 
                style: style_Curvasdenvel_1,
                popuplayertitle: "Curvas de nível",
                interactive: true,
                title: '<img src="styles/legend/Curvasdenvel_1.png" /> Curvas de nível'
            });
var format_Ruas_2 = new ol.format.GeoJSON();
var features_Ruas_2 = format_Ruas_2.readFeatures(json_Ruas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruas_2.addFeatures(features_Ruas_2);
var lyr_Ruas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruas_2, 
                style: style_Ruas_2,
                popuplayertitle: "Ruas",
                interactive: true,
                title: '<img src="styles/legend/Ruas_2.png" /> Ruas'
            });
var format_Rio_3 = new ol.format.GeoJSON();
var features_Rio_3 = format_Rio_3.readFeatures(json_Rio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rio_3.addFeatures(features_Rio_3);
var lyr_Rio_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rio_3, 
                style: style_Rio_3,
                popuplayertitle: "Rio",
                interactive: true,
                title: '<img src="styles/legend/Rio_3.png" /> Rio'
            });
var format_Locaisdeinteresse_4 = new ol.format.GeoJSON();
var features_Locaisdeinteresse_4 = format_Locaisdeinteresse_4.readFeatures(json_Locaisdeinteresse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locaisdeinteresse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locaisdeinteresse_4.addFeatures(features_Locaisdeinteresse_4);
var lyr_Locaisdeinteresse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Locaisdeinteresse_4, 
                style: style_Locaisdeinteresse_4,
                popuplayertitle: "Locais de interesse",
                interactive: true,
                title: '<img src="styles/legend/Locaisdeinteresse_4.png" /> Locais de interesse'
            });

lyr_Manchaurbana_0.setVisible(true);lyr_Curvasdenvel_1.setVisible(true);lyr_Ruas_2.setVisible(true);lyr_Rio_3.setVisible(true);lyr_Locaisdeinteresse_4.setVisible(true);
var layersList = [lyr_Manchaurbana_0,lyr_Curvasdenvel_1,lyr_Ruas_2,lyr_Rio_3,lyr_Locaisdeinteresse_4];
lyr_Manchaurbana_0.set('fieldAliases', {'id': 'id', });
lyr_Curvasdenvel_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Ruas_2.set('fieldAliases', {'id': 'id', });
lyr_Rio_3.set('fieldAliases', {'id': 'id', });
lyr_Locaisdeinteresse_4.set('fieldAliases', {'id': 'id', });
lyr_Manchaurbana_0.set('fieldImages', {'id': 'TextEdit', });
lyr_Curvasdenvel_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_Ruas_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Rio_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Locaisdeinteresse_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Manchaurbana_0.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Curvasdenvel_1.set('fieldLabels', {'fid': 'inline label - always visible', 'ID': 'inline label - always visible', 'ELEV': 'inline label - always visible', });
lyr_Ruas_2.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Rio_3.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Locaisdeinteresse_4.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Locaisdeinteresse_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});