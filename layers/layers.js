var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_hidrografia_1 = new ol.format.GeoJSON();
var features_hidrografia_1 = format_hidrografia_1.readFeatures(json_hidrografia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrografia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_1.addFeatures(features_hidrografia_1);
var lyr_hidrografia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrografia_1, 
                style: style_hidrografia_1,
                popuplayertitle: 'hidrografia',
                interactive: true,
                title: '<img src="styles/legend/hidrografia_1.png" /> hidrografia'
            });
var format_LIMITE__2 = new ol.format.GeoJSON();
var features_LIMITE__2 = format_LIMITE__2.readFeatures(json_LIMITE__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITE__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITE__2.addFeatures(features_LIMITE__2);
var lyr_LIMITE__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITE__2, 
                style: style_LIMITE__2,
                popuplayertitle: 'LIMITE_',
                interactive: true,
                title: '<img src="styles/legend/LIMITE__2.png" /> LIMITE_'
            });
var format_parcelas_3 = new ol.format.GeoJSON();
var features_parcelas_3 = format_parcelas_3.readFeatures(json_parcelas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelas_3.addFeatures(features_parcelas_3);
var lyr_parcelas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelas_3, 
                style: style_parcelas_3,
                popuplayertitle: 'parcelas',
                interactive: true,
    title: 'parcelas<br />\
    <img src="styles/legend/parcelas_3_0.png" /> Área Verde<br />\
    <img src="styles/legend/parcelas_3_1.png" /> Comercial<br />\
    <img src="styles/legend/parcelas_3_2.png" /> Educación<br />\
    <img src="styles/legend/parcelas_3_3.png" /> Residencial<br />\
    <img src="styles/legend/parcelas_3_4.png" /> Salud<br />\
    <img src="styles/legend/parcelas_3_5.png" /> Vacante<br />' });
var format_areas_verdes_4 = new ol.format.GeoJSON();
var features_areas_verdes_4 = format_areas_verdes_4.readFeatures(json_areas_verdes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areas_verdes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_verdes_4.addFeatures(features_areas_verdes_4);
var lyr_areas_verdes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areas_verdes_4, 
                style: style_areas_verdes_4,
                popuplayertitle: 'areas_verdes',
                interactive: true,
                title: '<img src="styles/legend/areas_verdes_4.png" /> areas_verdes'
            });
var format_lotes_urbanos_5 = new ol.format.GeoJSON();
var features_lotes_urbanos_5 = format_lotes_urbanos_5.readFeatures(json_lotes_urbanos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotes_urbanos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotes_urbanos_5.addFeatures(features_lotes_urbanos_5);
var lyr_lotes_urbanos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotes_urbanos_5, 
                style: style_lotes_urbanos_5,
                popuplayertitle: 'lotes_urbanos',
                interactive: true,
    title: 'lotes_urbanos<br />\
    <img src="styles/legend/lotes_urbanos_5_0.png" /> Área Verde<br />\
    <img src="styles/legend/lotes_urbanos_5_1.png" /> Comercial<br />\
    <img src="styles/legend/lotes_urbanos_5_2.png" /> Equipamiento<br />\
    <img src="styles/legend/lotes_urbanos_5_3.png" /> Residencial<br />\
    <img src="styles/legend/lotes_urbanos_5_4.png" /> Vacante<br />' });
var format_red_vial_6 = new ol.format.GeoJSON();
var features_red_vial_6 = format_red_vial_6.readFeatures(json_red_vial_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_vial_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_vial_6.addFeatures(features_red_vial_6);
var lyr_red_vial_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_vial_6, 
                style: style_red_vial_6,
                popuplayertitle: 'red_vial',
                interactive: true,
                title: '<img src="styles/legend/red_vial_6.png" /> red_vial'
            });
var format_equipamientos_7 = new ol.format.GeoJSON();
var features_equipamientos_7 = format_equipamientos_7.readFeatures(json_equipamientos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_equipamientos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_equipamientos_7.addFeatures(features_equipamientos_7);
var lyr_equipamientos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_equipamientos_7, 
                style: style_equipamientos_7,
                popuplayertitle: 'equipamientos',
                interactive: true,
    title: 'equipamientos<br />\
    <img src="styles/legend/equipamientos_7_0.png" /> Educacion<br />\
    <img src="styles/legend/equipamientos_7_1.png" /> Salud<br />' });
var format_buffer_salud_8 = new ol.format.GeoJSON();
var features_buffer_salud_8 = format_buffer_salud_8.readFeatures(json_buffer_salud_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_salud_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_salud_8.addFeatures(features_buffer_salud_8);
var lyr_buffer_salud_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_salud_8, 
                style: style_buffer_salud_8,
                popuplayertitle: 'buffer_salud',
                interactive: true,
                title: '<img src="styles/legend/buffer_salud_8.png" /> buffer_salud'
            });
var format_buffer_educacin_9 = new ol.format.GeoJSON();
var features_buffer_educacin_9 = format_buffer_educacin_9.readFeatures(json_buffer_educacin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_educacin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_educacin_9.addFeatures(features_buffer_educacin_9);
var lyr_buffer_educacin_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_educacin_9, 
                style: style_buffer_educacin_9,
                popuplayertitle: 'buffer_educación',
                interactive: true,
                title: '<img src="styles/legend/buffer_educacin_9.png" /> buffer_educación'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_hidrografia_1.setVisible(true);lyr_LIMITE__2.setVisible(true);lyr_parcelas_3.setVisible(true);lyr_areas_verdes_4.setVisible(true);lyr_lotes_urbanos_5.setVisible(true);lyr_red_vial_6.setVisible(true);lyr_equipamientos_7.setVisible(true);lyr_buffer_salud_8.setVisible(true);lyr_buffer_educacin_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_hidrografia_1,lyr_LIMITE__2,lyr_parcelas_3,lyr_areas_verdes_4,lyr_lotes_urbanos_5,lyr_red_vial_6,lyr_equipamientos_7,lyr_buffer_salud_8,lyr_buffer_educacin_9];
lyr_hidrografia_1.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'cota_msnm': 'cota_msnm', });
lyr_LIMITE__2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'AREA_km2': 'AREA_km2', });
lyr_parcelas_3.set('fieldAliases', {'fid': 'fid', 'area_m2': 'area_m2', 'uso_suelo': 'uso_suelo', 'valor_m2': 'valor_m2', 'cod_predios': 'cod_predios', 'n_habitantes': 'n_habitantes', 'cota_msnm': 'cota_msnm', });
lyr_areas_verdes_4.set('fieldAliases', {'fid': 'fid', 'area_m2': 'area_m2', 'estado': 'estado', 'tipo': 'tipo', 'nombre': 'nombre', });
lyr_lotes_urbanos_5.set('fieldAliases', {'fid': 'fid', 'area_m2': 'area_m2', 'uso_suelo': 'uso_suelo', 'valor_m2': 'valor_m2', 'cod_predios': 'cod_predios', 'n_habitantes': 'n_habitantes', 'cota_msnm': 'cota_msnm', 'id_lote': 'id_lote', 'manzana': 'manzana', });
lyr_red_vial_6.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'sentido': 'sentido', 'tipo': 'tipo', 'long_m': 'long_m', 'ancho_m': 'ancho_m', });
lyr_equipamientos_7.set('fieldAliases', {'fid': 'fid', 'tipo': 'tipo', 'nombre': 'nombre', 'capacidad': 'capacidad', 'subtipo': 'subtipo', });
lyr_buffer_salud_8.set('fieldAliases', {'fid': 'fid', 'tipo': 'tipo', 'nombre': 'nombre', 'capacidad': 'capacidad', 'subtipo': 'subtipo', });
lyr_buffer_educacin_9.set('fieldAliases', {'fid': 'fid', 'tipo': 'tipo', 'nombre': 'nombre', 'capacidad': 'capacidad', 'subtipo': 'subtipo', });
lyr_hidrografia_1.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'cota_msnm': 'TextEdit', });
lyr_LIMITE__2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'AREA_km2': 'TextEdit', });
lyr_parcelas_3.set('fieldImages', {'fid': 'TextEdit', 'area_m2': 'TextEdit', 'uso_suelo': 'TextEdit', 'valor_m2': 'TextEdit', 'cod_predios': 'TextEdit', 'n_habitantes': 'TextEdit', 'cota_msnm': 'TextEdit', });
lyr_areas_verdes_4.set('fieldImages', {'fid': 'TextEdit', 'area_m2': 'TextEdit', 'estado': 'TextEdit', 'tipo': 'TextEdit', 'nombre': 'TextEdit', });
lyr_lotes_urbanos_5.set('fieldImages', {'fid': 'TextEdit', 'area_m2': 'TextEdit', 'uso_suelo': 'TextEdit', 'valor_m2': 'TextEdit', 'cod_predios': 'TextEdit', 'n_habitantes': 'TextEdit', 'cota_msnm': 'TextEdit', 'id_lote': 'TextEdit', 'manzana': 'TextEdit', });
lyr_red_vial_6.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'sentido': 'TextEdit', 'tipo': 'TextEdit', 'long_m': 'TextEdit', 'ancho_m': 'TextEdit', });
lyr_equipamientos_7.set('fieldImages', {'fid': 'TextEdit', 'tipo': 'TextEdit', 'nombre': 'TextEdit', 'capacidad': 'TextEdit', 'subtipo': 'TextEdit', });
lyr_buffer_salud_8.set('fieldImages', {'fid': 'TextEdit', 'tipo': 'TextEdit', 'nombre': 'TextEdit', 'capacidad': 'TextEdit', 'subtipo': 'TextEdit', });
lyr_buffer_educacin_9.set('fieldImages', {'fid': 'TextEdit', 'tipo': 'TextEdit', 'nombre': 'TextEdit', 'capacidad': 'TextEdit', 'subtipo': 'TextEdit', });
lyr_hidrografia_1.set('fieldLabels', {'fid': 'no label', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'cota_msnm': 'inline label - visible with data', });
lyr_LIMITE__2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'AREA_km2': 'inline label - visible with data', });
lyr_parcelas_3.set('fieldLabels', {'fid': 'no label', 'area_m2': 'inline label - visible with data', 'uso_suelo': 'inline label - visible with data', 'valor_m2': 'inline label - visible with data', 'cod_predios': 'inline label - visible with data', 'n_habitantes': 'inline label - visible with data', 'cota_msnm': 'inline label - visible with data', });
lyr_areas_verdes_4.set('fieldLabels', {'fid': 'no label', 'area_m2': 'inline label - visible with data', 'estado': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'nombre': 'inline label - visible with data', });
lyr_lotes_urbanos_5.set('fieldLabels', {'fid': 'no label', 'area_m2': 'inline label - visible with data', 'uso_suelo': 'inline label - visible with data', 'valor_m2': 'inline label - visible with data', 'cod_predios': 'inline label - visible with data', 'n_habitantes': 'inline label - visible with data', 'cota_msnm': 'inline label - visible with data', 'id_lote': 'inline label - visible with data', 'manzana': 'inline label - visible with data', });
lyr_red_vial_6.set('fieldLabels', {'fid': 'no label', 'nombre': 'inline label - visible with data', 'sentido': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'long_m': 'inline label - visible with data', 'ancho_m': 'inline label - visible with data', });
lyr_equipamientos_7.set('fieldLabels', {'fid': 'no label', 'tipo': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'capacidad': 'inline label - visible with data', 'subtipo': 'inline label - visible with data', });
lyr_buffer_salud_8.set('fieldLabels', {'fid': 'no label', 'tipo': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'capacidad': 'inline label - visible with data', 'subtipo': 'inline label - visible with data', });
lyr_buffer_educacin_9.set('fieldLabels', {'fid': 'no label', 'tipo': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'capacidad': 'inline label - visible with data', 'subtipo': 'inline label - visible with data', });
lyr_buffer_educacin_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});