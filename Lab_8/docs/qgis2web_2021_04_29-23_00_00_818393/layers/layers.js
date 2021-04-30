var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_CT_data_PB_1 = new ol.format.GeoJSON();
var features_CT_data_PB_1 = format_CT_data_PB_1.readFeatures(json_CT_data_PB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CT_data_PB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CT_data_PB_1.addFeatures(features_CT_data_PB_1);
var lyr_CT_data_PB_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CT_data_PB_1, 
                style: style_CT_data_PB_1,
                interactive: true,
    title: 'CT_data_PB<br />\
    <img src="styles/legend/CT_data_PB_1_0.png" /> 1-1<br />\
    <img src="styles/legend/CT_data_PB_1_1.png" /> 1-2<br />\
    <img src="styles/legend/CT_data_PB_1_2.png" /> 1-3<br />\
    <img src="styles/legend/CT_data_PB_1_3.png" /> 2-1<br />\
    <img src="styles/legend/CT_data_PB_1_4.png" /> 2-2<br />\
    <img src="styles/legend/CT_data_PB_1_5.png" /> 2-3<br />\
    <img src="styles/legend/CT_data_PB_1_6.png" /> 3-1<br />\
    <img src="styles/legend/CT_data_PB_1_7.png" /> 3-2<br />\
    <img src="styles/legend/CT_data_PB_1_8.png" /> 3-3<br />\
    <img src="styles/legend/CT_data_PB_1_9.png" /> <br />'
        });

lyr_CartoLight_0.setVisible(true);lyr_CT_data_PB_1.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_CT_data_PB_1];
lyr_CT_data_PB_1.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'Name', 'total_raceE': 'total_raceE', 'total_raceM': 'total_raceM', 'white_nhE': 'white_nhE', 'white_nhM': 'white_nhM', 'black_nhE': 'black_nhE', 'black_nhM': 'black_nhM', 'Med_IncomeE': 'Median Income', 'Med_IncomeM': 'Med_IncomeM', 'Perc_black': 'Percent Black Population', 'bi_class': 'bi_class', 'PB_Class': 'PB_Class', 'MI_Class': 'MI_Class', });
lyr_CT_data_PB_1.set('fieldImages', {'GEOID': 'Hidden', 'NAME': 'TextEdit', 'total_raceE': 'Hidden', 'total_raceM': 'Hidden', 'white_nhE': 'Hidden', 'white_nhM': 'Hidden', 'black_nhE': 'Hidden', 'black_nhM': 'Hidden', 'Med_IncomeE': 'TextEdit', 'Med_IncomeM': 'Hidden', 'Perc_black': 'TextEdit', 'bi_class': 'TextEdit', 'PB_Class': 'Hidden', 'MI_Class': 'Hidden', });
lyr_CT_data_PB_1.set('fieldLabels', {'NAME': 'header label', 'Med_IncomeE': 'header label', 'Perc_black': 'header label', 'bi_class': 'no label', });
lyr_CT_data_PB_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});