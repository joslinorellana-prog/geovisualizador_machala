ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32717").setExtent([613165.210731, 9639900.214565, 616808.183860, 9641815.592190]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HIDROGRAFIA_1 = new ol.format.GeoJSON();
var features_HIDROGRAFIA_1 = format_HIDROGRAFIA_1.readFeatures(json_HIDROGRAFIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_HIDROGRAFIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIDROGRAFIA_1.addFeatures(features_HIDROGRAFIA_1);
var lyr_HIDROGRAFIA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HIDROGRAFIA_1, 
                style: style_HIDROGRAFIA_1,
                popuplayertitle: 'HIDROGRAFIA',
                interactive: true,
                title: '<img src="styles/legend/HIDROGRAFIA_1.png" /> HIDROGRAFIA'
            });
var format_LOTES_URBANOS_2 = new ol.format.GeoJSON();
var features_LOTES_URBANOS_2 = format_LOTES_URBANOS_2.readFeatures(json_LOTES_URBANOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_LOTES_URBANOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTES_URBANOS_2.addFeatures(features_LOTES_URBANOS_2);
var lyr_LOTES_URBANOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTES_URBANOS_2, 
                style: style_LOTES_URBANOS_2,
                popuplayertitle: 'LOTES_URBANOS',
                interactive: true,
    title: 'LOTES_URBANOS<br />\
    <img src="styles/legend/LOTES_URBANOS_2_0.png" /> 7 de Julio<br />\
    <img src="styles/legend/LOTES_URBANOS_2_1.png" /> Urseza<br />\
    <img src="styles/legend/LOTES_URBANOS_2_2.png" /> Jose Astudillo<br />\
    <img src="styles/legend/LOTES_URBANOS_2_3.png" /> Granja 9 de Octubre<br />\
    <img src="styles/legend/LOTES_URBANOS_2_4.png" /> LOS OLIVOS<br />\
    <img src="styles/legend/LOTES_URBANOS_2_5.png" /> Fanny Esthela<br />\
    <img src="styles/legend/LOTES_URBANOS_2_6.png" /> Urbanización Eloy Alfaro<br />\
    <img src="styles/legend/LOTES_URBANOS_2_7.png" /> 19 de Noviembre<br />\
    <img src="styles/legend/LOTES_URBANOS_2_8.png" /> Lote San Estuardo<br />\
    <img src="styles/legend/LOTES_URBANOS_2_9.png" /> Buenos Aires<br />\
    <img src="styles/legend/LOTES_URBANOS_2_10.png" /> Miraflores<br />\
    <img src="styles/legend/LOTES_URBANOS_2_11.png" /> 18 De Octubre<br />\
    <img src="styles/legend/LOTES_URBANOS_2_12.png" /> 24 de Mayo<br />\
    <img src="styles/legend/LOTES_URBANOS_2_13.png" /> Independiente<br />\
    <img src="styles/legend/LOTES_URBANOS_2_14.png" /> Lago de Caipera<br />\
    <img src="styles/legend/LOTES_URBANOS_2_15.png" /> Venecia<br />' });
var format_EQUIPAMIENTO_3 = new ol.format.GeoJSON();
var features_EQUIPAMIENTO_3 = format_EQUIPAMIENTO_3.readFeatures(json_EQUIPAMIENTO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_EQUIPAMIENTO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EQUIPAMIENTO_3.addFeatures(features_EQUIPAMIENTO_3);
var lyr_EQUIPAMIENTO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EQUIPAMIENTO_3, 
                style: style_EQUIPAMIENTO_3,
                popuplayertitle: 'EQUIPAMIENTO',
                interactive: true,
    title: 'EQUIPAMIENTO<br />\
    <img src="styles/legend/EQUIPAMIENTO_3_0.png" /> EDUCACION<br />\
    <img src="styles/legend/EQUIPAMIENTO_3_1.png" /> SALUD<br />' });
var format_PARCELAS_4 = new ol.format.GeoJSON();
var features_PARCELAS_4 = format_PARCELAS_4.readFeatures(json_PARCELAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_PARCELAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARCELAS_4.addFeatures(features_PARCELAS_4);
var lyr_PARCELAS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARCELAS_4, 
                style: style_PARCELAS_4,
                popuplayertitle: 'PARCELAS',
                interactive: true,
    title: 'PARCELAS<br />\
    <img src="styles/legend/PARCELAS_4_0.png" /> COMERCIAL<br />\
    <img src="styles/legend/PARCELAS_4_1.png" /> RESIDENCIAL<br />\
    <img src="styles/legend/PARCELAS_4_2.png" /> VACANTE<br />' });
var format_AREAS_VERDES_5 = new ol.format.GeoJSON();
var features_AREAS_VERDES_5 = format_AREAS_VERDES_5.readFeatures(json_AREAS_VERDES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_AREAS_VERDES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAS_VERDES_5.addFeatures(features_AREAS_VERDES_5);
var lyr_AREAS_VERDES_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAS_VERDES_5, 
                style: style_AREAS_VERDES_5,
                popuplayertitle: 'AREAS_VERDES',
                interactive: true,
    title: 'AREAS_VERDES<br />\
    <img src="styles/legend/AREAS_VERDES_5_0.png" /> AREA DEPORTIVA<br />\
    <img src="styles/legend/AREAS_VERDES_5_1.png" /> PARQUE<br />' });
var format_RED_VIAL_6 = new ol.format.GeoJSON();
var features_RED_VIAL_6 = format_RED_VIAL_6.readFeatures(json_RED_VIAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_RED_VIAL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RED_VIAL_6.addFeatures(features_RED_VIAL_6);
var lyr_RED_VIAL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RED_VIAL_6, 
                style: style_RED_VIAL_6,
                popuplayertitle: 'RED_VIAL',
                interactive: true,
    title: 'RED_VIAL<br />\
    <img src="styles/legend/RED_VIAL_6_0.png" /> arterial<br />\
    <img src="styles/legend/RED_VIAL_6_1.png" /> colectora<br />\
    <img src="styles/legend/RED_VIAL_6_2.png" /> local<br />' });
var format_EQUIPAMIENTOS_7 = new ol.format.GeoJSON();
var features_EQUIPAMIENTOS_7 = format_EQUIPAMIENTOS_7.readFeatures(json_EQUIPAMIENTOS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_EQUIPAMIENTOS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EQUIPAMIENTOS_7.addFeatures(features_EQUIPAMIENTOS_7);
var lyr_EQUIPAMIENTOS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EQUIPAMIENTOS_7, 
                style: style_EQUIPAMIENTOS_7,
                popuplayertitle: 'EQUIPAMIENTOS',
                interactive: true,
    title: 'EQUIPAMIENTOS<br />\
    <img src="styles/legend/EQUIPAMIENTOS_7_0.png" /> EDUCACION<br />\
    <img src="styles/legend/EQUIPAMIENTOS_7_1.png" /> SALUD<br />' });
var format_CoberturaEducacion_8 = new ol.format.GeoJSON();
var features_CoberturaEducacion_8 = format_CoberturaEducacion_8.readFeatures(json_CoberturaEducacion_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_CoberturaEducacion_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoberturaEducacion_8.addFeatures(features_CoberturaEducacion_8);
var lyr_CoberturaEducacion_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoberturaEducacion_8, 
                style: style_CoberturaEducacion_8,
                popuplayertitle: 'Cobertura Educacion',
                interactive: true,
                title: '<img src="styles/legend/CoberturaEducacion_8.png" /> Cobertura Educacion'
            });
var format_Zonariesgoinundacin_9 = new ol.format.GeoJSON();
var features_Zonariesgoinundacin_9 = format_Zonariesgoinundacin_9.readFeatures(json_Zonariesgoinundacin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Zonariesgoinundacin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonariesgoinundacin_9.addFeatures(features_Zonariesgoinundacin_9);
var lyr_Zonariesgoinundacin_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonariesgoinundacin_9, 
                style: style_Zonariesgoinundacin_9,
                popuplayertitle: 'Zona riesgo inundación',
                interactive: true,
                title: '<img src="styles/legend/Zonariesgoinundacin_9.png" /> Zona riesgo inundación'
            });
var format_Coberturasalud_10 = new ol.format.GeoJSON();
var features_Coberturasalud_10 = format_Coberturasalud_10.readFeatures(json_Coberturasalud_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Coberturasalud_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coberturasalud_10.addFeatures(features_Coberturasalud_10);
var lyr_Coberturasalud_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coberturasalud_10, 
                style: style_Coberturasalud_10,
                popuplayertitle: 'Cobertura salud',
                interactive: true,
                title: '<img src="styles/legend/Coberturasalud_10.png" /> Cobertura salud'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_HIDROGRAFIA_1.setVisible(true);lyr_LOTES_URBANOS_2.setVisible(true);lyr_EQUIPAMIENTO_3.setVisible(true);lyr_PARCELAS_4.setVisible(true);lyr_AREAS_VERDES_5.setVisible(true);lyr_RED_VIAL_6.setVisible(true);lyr_EQUIPAMIENTOS_7.setVisible(true);lyr_CoberturaEducacion_8.setVisible(true);lyr_Zonariesgoinundacin_9.setVisible(true);lyr_Coberturasalud_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_HIDROGRAFIA_1,lyr_LOTES_URBANOS_2,lyr_EQUIPAMIENTO_3,lyr_PARCELAS_4,lyr_AREAS_VERDES_5,lyr_RED_VIAL_6,lyr_EQUIPAMIENTOS_7,lyr_CoberturaEducacion_8,lyr_Zonariesgoinundacin_9,lyr_Coberturasalud_10];
lyr_HIDROGRAFIA_1.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo ': 'tipo ', 'cota_msnm': 'cota_msnm', 'caudal_m3s': 'caudal_m3s', });
lyr_LOTES_URBANOS_2.set('fieldAliases', {'fid': 'fid', 'id_lote': 'id_lote', 'manzana': 'manzana', 'uso': 'uso', 'n_habitantes': 'n_habitantes', 'area_m2': 'area_m2', 'Nombre': 'Nombre', });
lyr_EQUIPAMIENTO_3.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'subtipo': 'subtipo', 'capacidad': 'capacidad', 'area_m2': 'area_m2', });
lyr_PARCELAS_4.set('fieldAliases', {'fid': 'fid', 'cod_predio': 'cod_predio', 'uso_suelo': 'uso_suelo', 'cota_msnm': 'cota_msnm', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', });
lyr_AREAS_VERDES_5.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'area_m2': 'area_m2', 'estado': 'estado', });
lyr_RED_VIAL_6.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo_via': 'tipo_via', 'ancho_m': 'ancho_m', 'sentido': 'sentido', });
lyr_EQUIPAMIENTOS_7.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'subtipo': 'subtipo', 'capacidad': 'capacidad', });
lyr_CoberturaEducacion_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Zonariesgoinundacin_9.set('fieldAliases', {'fid': 'fid', 'cod_predio': 'cod_predio', 'uso_suelo': 'uso_suelo', 'cota_msnm': 'cota_msnm', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', });
lyr_Coberturasalud_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_HIDROGRAFIA_1.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo ': 'TextEdit', 'cota_msnm': 'TextEdit', 'caudal_m3s': 'TextEdit', });
lyr_LOTES_URBANOS_2.set('fieldImages', {'fid': 'TextEdit', 'id_lote': 'TextEdit', 'manzana': 'TextEdit', 'uso': 'TextEdit', 'n_habitantes': 'Range', 'area_m2': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_EQUIPAMIENTO_3.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'subtipo': 'TextEdit', 'capacidad': 'Range', 'area_m2': '', });
lyr_PARCELAS_4.set('fieldImages', {'fid': 'TextEdit', 'cod_predio': 'TextEdit', 'uso_suelo': 'TextEdit', 'cota_msnm': 'TextEdit', 'area_m2': 'TextEdit', 'valor_m2': 'TextEdit', });
lyr_AREAS_VERDES_5.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'area_m2': 'TextEdit', 'estado': 'TextEdit', });
lyr_RED_VIAL_6.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo_via': 'TextEdit', 'ancho_m': 'TextEdit', 'sentido': 'TextEdit', });
lyr_EQUIPAMIENTOS_7.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'subtipo': 'TextEdit', 'capacidad': 'Range', });
lyr_CoberturaEducacion_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Zonariesgoinundacin_9.set('fieldImages', {'fid': '', 'cod_predio': '', 'uso_suelo': '', 'cota_msnm': '', 'area_m2': '', 'valor_m2': '', });
lyr_Coberturasalud_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_HIDROGRAFIA_1.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo ': 'inline label - always visible', 'cota_msnm': 'inline label - always visible', 'caudal_m3s': 'inline label - always visible', });
lyr_LOTES_URBANOS_2.set('fieldLabels', {'fid': 'no label', 'id_lote': 'inline label - always visible', 'manzana': 'inline label - always visible', 'uso': 'inline label - always visible', 'n_habitantes': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'Nombre': 'inline label - always visible', });
lyr_EQUIPAMIENTO_3.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'subtipo': 'inline label - always visible', 'capacidad': 'inline label - always visible', 'area_m2': 'inline label - always visible', });
lyr_PARCELAS_4.set('fieldLabels', {'fid': 'hidden field', 'cod_predio': 'inline label - always visible', 'uso_suelo': 'inline label - always visible', 'cota_msnm': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'valor_m2': 'inline label - always visible', });
lyr_AREAS_VERDES_5.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'estado': 'inline label - always visible', });
lyr_RED_VIAL_6.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo_via': 'inline label - always visible', 'ancho_m': 'inline label - always visible', 'sentido': 'inline label - always visible', });
lyr_EQUIPAMIENTOS_7.set('fieldLabels', {'fid': 'no label', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'subtipo': 'inline label - always visible', 'capacidad': 'inline label - always visible', });
lyr_CoberturaEducacion_8.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_Zonariesgoinundacin_9.set('fieldLabels', {'fid': 'hidden field', 'cod_predio': 'hidden field', 'uso_suelo': 'hidden field', 'cota_msnm': 'inline label - always visible', 'area_m2': 'hidden field', 'valor_m2': 'hidden field', });
lyr_Coberturasalud_10.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_Coberturasalud_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});