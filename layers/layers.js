var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TelanganaState_2 = new ol.format.GeoJSON();
var features_TelanganaState_2 = format_TelanganaState_2.readFeatures(json_TelanganaState_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TelanganaState_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TelanganaState_2.addFeatures(features_TelanganaState_2);
var lyr_TelanganaState_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TelanganaState_2, 
                style: style_TelanganaState_2,
                popuplayertitle: ' Telangana State',
                interactive: true,
                title: '<img src="styles/legend/TelanganaState_2.png" />  Telangana State'
            });
var format_ExclusionofGPs_3 = new ol.format.GeoJSON();
var features_ExclusionofGPs_3 = format_ExclusionofGPs_3.readFeatures(json_ExclusionofGPs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExclusionofGPs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExclusionofGPs_3.addFeatures(features_ExclusionofGPs_3);
var lyr_ExclusionofGPs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExclusionofGPs_3, 
                style: style_ExclusionofGPs_3,
                popuplayertitle: 'Exclusion of GPs',
                interactive: true,
                title: '<img src="styles/legend/ExclusionofGPs_3.png" /> Exclusion of GPs'
            });
var format_UpgradationGreaterCorporation_4 = new ol.format.GeoJSON();
var features_UpgradationGreaterCorporation_4 = format_UpgradationGreaterCorporation_4.readFeatures(json_UpgradationGreaterCorporation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UpgradationGreaterCorporation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpgradationGreaterCorporation_4.addFeatures(features_UpgradationGreaterCorporation_4);
var lyr_UpgradationGreaterCorporation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UpgradationGreaterCorporation_4, 
                style: style_UpgradationGreaterCorporation_4,
                popuplayertitle: 'Upgradation-Greater Corporation',
                interactive: true,
                title: '<img src="styles/legend/UpgradationGreaterCorporation_4.png" /> Upgradation-Greater Corporation'
            });
var format_UpgradationMunicipalCorporation_5 = new ol.format.GeoJSON();
var features_UpgradationMunicipalCorporation_5 = format_UpgradationMunicipalCorporation_5.readFeatures(json_UpgradationMunicipalCorporation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UpgradationMunicipalCorporation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpgradationMunicipalCorporation_5.addFeatures(features_UpgradationMunicipalCorporation_5);
var lyr_UpgradationMunicipalCorporation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UpgradationMunicipalCorporation_5, 
                style: style_UpgradationMunicipalCorporation_5,
                popuplayertitle: 'Upgradation-Municipal Corporation',
                interactive: true,
                title: '<img src="styles/legend/UpgradationMunicipalCorporation_5.png" /> Upgradation-Municipal Corporation'
            });
var format_InclusionofGPs_6 = new ol.format.GeoJSON();
var features_InclusionofGPs_6 = format_InclusionofGPs_6.readFeatures(json_InclusionofGPs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InclusionofGPs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InclusionofGPs_6.addFeatures(features_InclusionofGPs_6);
var lyr_InclusionofGPs_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InclusionofGPs_6, 
                style: style_InclusionofGPs_6,
                popuplayertitle: 'Inclusion of GPs',
                interactive: true,
                title: '<img src="styles/legend/InclusionofGPs_6.png" /> Inclusion of GPs'
            });
var format_NewULBs_7 = new ol.format.GeoJSON();
var features_NewULBs_7 = format_NewULBs_7.readFeatures(json_NewULBs_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewULBs_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewULBs_7.addFeatures(features_NewULBs_7);
var lyr_NewULBs_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewULBs_7, 
                style: style_NewULBs_7,
                popuplayertitle: 'New ULBs',
                interactive: true,
                title: '<img src="styles/legend/NewULBs_7.png" /> New ULBs'
            });
var format_ExistingULBBoundary_8 = new ol.format.GeoJSON();
var features_ExistingULBBoundary_8 = format_ExistingULBBoundary_8.readFeatures(json_ExistingULBBoundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingULBBoundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingULBBoundary_8.addFeatures(features_ExistingULBBoundary_8);
var lyr_ExistingULBBoundary_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingULBBoundary_8, 
                style: style_ExistingULBBoundary_8,
                popuplayertitle: 'Existing ULB Boundary',
                interactive: true,
                title: '<img src="styles/legend/ExistingULBBoundary_8.png" /> Existing ULB Boundary'
            });
var format_ExistingULBs_9 = new ol.format.GeoJSON();
var features_ExistingULBs_9 = format_ExistingULBs_9.readFeatures(json_ExistingULBs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingULBs_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingULBs_9.addFeatures(features_ExistingULBs_9);
var lyr_ExistingULBs_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingULBs_9, 
                style: style_ExistingULBs_9,
                popuplayertitle: 'Existing ULBs',
                interactive: true,
                title: '<img src="styles/legend/ExistingULBs_9.png" /> Existing ULBs'
            });
var format_ImageAttachment_10 = new ol.format.GeoJSON();
var features_ImageAttachment_10 = format_ImageAttachment_10.readFeatures(json_ImageAttachment_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImageAttachment_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImageAttachment_10.addFeatures(features_ImageAttachment_10);
var lyr_ImageAttachment_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImageAttachment_10, 
                style: style_ImageAttachment_10,
                popuplayertitle: 'Image(Attachment)',
                interactive: true,
                title: '<img src="styles/legend/ImageAttachment_10.png" /> Image(Attachment)'
            });
var group_ExistingULBs = new ol.layer.Group({
                                layers: [lyr_ExistingULBBoundary_8,lyr_ExistingULBs_9,lyr_ImageAttachment_10,],
                                fold: "open",
                                title: 'Existing ULBs'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_TelanganaState_2.setVisible(true);lyr_ExclusionofGPs_3.setVisible(true);lyr_UpgradationGreaterCorporation_4.setVisible(true);lyr_UpgradationMunicipalCorporation_5.setVisible(true);lyr_InclusionofGPs_6.setVisible(true);lyr_NewULBs_7.setVisible(true);lyr_ExistingULBBoundary_8.setVisible(true);lyr_ExistingULBs_9.setVisible(true);lyr_ImageAttachment_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_TelanganaState_2,lyr_ExclusionofGPs_3,lyr_UpgradationGreaterCorporation_4,lyr_UpgradationMunicipalCorporation_5,lyr_InclusionofGPs_6,lyr_NewULBs_7,group_ExistingULBs];
lyr_TelanganaState_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Area_SQ_KM': 'Area(SQ.KM)', 'Population': 'Population(2011)', 'Pop_Den': 'Population Density(P/Sq.Km)', 'No_ULBs': 'No of ULBs', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Urban_pop': 'Urban(ULBs Population)', 'Area': 'ULBs Area(SQ.KM)', 'ULB_P_Dens': 'ULBs PopDensity(P/SQ.KM)', });
lyr_ExclusionofGPs_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ulb_Name': 'Name of ULB', 'Present_Area': 'Present Area(SQ.KM)', 'Present_pop': 'Present Population(2021)', 'Present_Pop_Den': 'Present PopDensity(P/SQ.KM)', 'Proposed_Area': 'Proposed Area(SQ.KM)', 'Proposed_Pop': 'Proposed Population(2024)', 'Proposed_pop_Den': 'Proposed PopDensity(P/SQ.KM)', 'No_Vill_Exclusion': 'No of Village Exclusion', 'Name_Vill_Exclusion': 'Name of Village Exclusion', });
lyr_UpgradationGreaterCorporation_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ulb_Name': 'Name of ULB', 'Present_Area': 'Present_Area', 'Present_pop': 'Present Population(2021)', 'Present_Pop_Den': 'Present PopDensity(P/SQ.KM)', 'Proposed_Area': 'Proposed Area(SQ.KM)', 'Proposed_Pop': 'Proposed Population(2024)', 'Proposed_pop_Den': 'Proposed PopDensity(P/SQ.KM)', 'No_GPInclude': 'No of GP Included', 'Name_GP_Includ': 'Name of GP Included', 'Name_Muni': 'Name of Municipality Included', });
lyr_UpgradationMunicipalCorporation_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ulb_Name': 'Name of ULB', 'Present_Area': 'Present_Area', 'Present_pop': 'Present Population(2021)', 'Present_Pop_Den': 'Present PopDensity(P/SQ.KM)', 'Proposed_Area': 'Proposed Area(SQ.KM)', 'Proposed_Pop': 'Proposed Population(2024)', 'Proposed_pop_Den': 'Proposed PopDensity(P/SQ.KM)', 'No_GPInclude': 'No of GP Included', 'Name_GP_Includ': 'Name of GP Included', 'Name_Muni': 'Name of Municipality Included', });
lyr_InclusionofGPs_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ulb_Name': 'Name of ULB', 'Present_Area': 'Present_Area', 'Present_pop': 'Present Population(2021)', 'Present_Pop_Den': 'Present PopDensity(P/SQ.KM)', 'Proposed_Area': 'Proposed Area(SQ.KM)', 'Proposed_Pop': 'Proposed Population(2024)', 'Proposed_pop_Den': 'Proposed PopDensity(P/SQ.KM)', 'No_GPInclude': 'No of GP Included', 'Name_GP_Includ': 'Name of GP Included', });
lyr_NewULBs_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name of ULBs', 'Area': 'Area(SQ.KM)', 'No_Vill': 'No of Villages', 'Name_Vill': 'Name of Villages', 'Population': 'Population(2024)', 'Pop_Den': 'Population Density(P/SQ.KM)', 'Img_Link': 'Img_Link', });
lyr_ExistingULBBoundary_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'Name': 'Name of ULBs', 'Area': 'Area(SQ.KM)', 'Population': 'Population(2011)', 'Pop_Density': 'Population Density(P/Sq.Km)', });
lyr_ExistingULBs_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name of ULBs', 'Area': 'Area(SQ.KM)', 'Population': 'Population(2011)', 'Pop_Density': 'Population Density(P/Sq.Km)', 'ORIG_FID': 'ORIG_FID', });
lyr_ImageAttachment_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name of ULBs', 'Link': 'Link', });
lyr_TelanganaState_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Area_SQ_KM': 'TextEdit', 'Population': 'Range', 'Pop_Den': 'Range', 'No_ULBs': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Urban_pop': 'Range', 'Area': 'TextEdit', 'ULB_P_Dens': 'Range', });
lyr_ExclusionofGPs_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Present_Area': 'TextEdit', 'Present_pop': 'Range', 'Present_Pop_Den': 'Range', 'Proposed_Area': 'TextEdit', 'Proposed_Pop': 'Range', 'Proposed_pop_Den': 'Range', 'No_Vill_Exclusion': 'Range', 'Name_Vill_Exclusion': 'TextEdit', });
lyr_UpgradationGreaterCorporation_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Present_Area': 'TextEdit', 'Present_pop': 'Range', 'Present_Pop_Den': 'Range', 'Proposed_Area': 'TextEdit', 'Proposed_Pop': 'Range', 'Proposed_pop_Den': 'Range', 'No_GPInclude': 'Range', 'Name_GP_Includ': 'TextEdit', 'Name_Muni': 'TextEdit', });
lyr_UpgradationMunicipalCorporation_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Present_Area': 'TextEdit', 'Present_pop': 'Range', 'Present_Pop_Den': 'Range', 'Proposed_Area': 'TextEdit', 'Proposed_Pop': 'Range', 'Proposed_pop_Den': 'Range', 'No_GPInclude': 'Range', 'Name_GP_Includ': 'TextEdit', 'Name_Muni': 'TextEdit', });
lyr_InclusionofGPs_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Present_Area': 'TextEdit', 'Present_pop': 'Range', 'Present_Pop_Den': 'Range', 'Proposed_Area': 'TextEdit', 'Proposed_Pop': 'Range', 'Proposed_pop_Den': 'Range', 'No_GPInclude': 'Range', 'Name_GP_Includ': 'TextEdit', });
lyr_NewULBs_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'No_Vill': 'Range', 'Name_Vill': 'TextEdit', 'Population': 'Range', 'Pop_Den': 'Range', 'Img_Link': '', });
lyr_ExistingULBBoundary_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'Population': 'Range', 'Pop_Density': '', });
lyr_ExistingULBs_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'Population': 'Range', 'Pop_Density': 'Range', 'ORIG_FID': 'Range', });
lyr_ImageAttachment_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Link': 'ExternalResource', });
lyr_TelanganaState_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Area_SQ_KM': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_Den': 'inline label - visible with data', 'No_ULBs': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Urban_pop': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'ULB_P_Dens': 'inline label - visible with data', });
lyr_ExclusionofGPs_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Ulb_Name': 'inline label - visible with data', 'Present_Area': 'inline label - visible with data', 'Present_pop': 'inline label - visible with data', 'Present_Pop_Den': 'inline label - visible with data', 'Proposed_Area': 'inline label - visible with data', 'Proposed_Pop': 'inline label - visible with data', 'Proposed_pop_Den': 'inline label - visible with data', 'No_Vill_Exclusion': 'inline label - visible with data', 'Name_Vill_Exclusion': 'inline label - visible with data', });
lyr_UpgradationGreaterCorporation_4.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'Ulb_Name': 'inline label - visible with data', 'Present_Area': 'inline label - visible with data', 'Present_pop': 'inline label - visible with data', 'Present_Pop_Den': 'inline label - visible with data', 'Proposed_Area': 'inline label - visible with data', 'Proposed_Pop': 'inline label - visible with data', 'Proposed_pop_Den': 'inline label - visible with data', 'No_GPInclude': 'inline label - visible with data', 'Name_GP_Includ': 'inline label - visible with data', 'Name_Muni': 'inline label - visible with data', });
lyr_UpgradationMunicipalCorporation_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Ulb_Name': 'inline label - visible with data', 'Present_Area': 'inline label - visible with data', 'Present_pop': 'inline label - visible with data', 'Present_Pop_Den': 'inline label - visible with data', 'Proposed_Area': 'inline label - visible with data', 'Proposed_Pop': 'inline label - visible with data', 'Proposed_pop_Den': 'inline label - visible with data', 'No_GPInclude': 'inline label - visible with data', 'Name_GP_Includ': 'inline label - visible with data', 'Name_Muni': 'inline label - visible with data', });
lyr_InclusionofGPs_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'Ulb_Name': 'inline label - visible with data', 'Present_Area': 'inline label - visible with data', 'Present_pop': 'inline label - visible with data', 'Present_Pop_Den': 'inline label - visible with data', 'Proposed_Area': 'inline label - visible with data', 'Proposed_Pop': 'inline label - visible with data', 'Proposed_pop_Den': 'inline label - visible with data', 'No_GPInclude': 'inline label - visible with data', 'Name_GP_Includ': 'inline label - visible with data', });
lyr_NewULBs_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'No_Vill': 'inline label - visible with data', 'Name_Vill': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_Den': 'inline label - visible with data', 'Img_Link': 'hidden field', });
lyr_ExistingULBBoundary_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_Density': 'inline label - visible with data', });
lyr_ExistingULBs_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_Density': 'inline label - visible with data', 'ORIG_FID': 'hidden field', });
lyr_ImageAttachment_10.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'header label - visible with data', 'Link': 'header label - visible with data', });
lyr_ImageAttachment_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});