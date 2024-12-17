ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([3357457.286457, -1965710.249332, 3366756.163456, -1960527.406415]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Final_Studentsaccomodationsurveydata_1 = new ol.format.GeoJSON();
var features_Final_Studentsaccomodationsurveydata_1 = format_Final_Studentsaccomodationsurveydata_1.readFeatures(json_Final_Studentsaccomodationsurveydata_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Final_Studentsaccomodationsurveydata_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Final_Studentsaccomodationsurveydata_1.addFeatures(features_Final_Studentsaccomodationsurveydata_1);
var lyr_Final_Studentsaccomodationsurveydata_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Final_Studentsaccomodationsurveydata_1, 
                style: style_Final_Studentsaccomodationsurveydata_1,
                popuplayertitle: "Final_Students accomodation survey data",
                interactive: true,
    title: 'Final_Students accomodation survey data<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_0.png" /> -17.394714199999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_1.png" /> -17.394644100000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_2.png" /> -17.394630899999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_3.png" /> -17.394502299999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_4.png" /> -17.394361499999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_5.png" /> -17.394159899999998<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_6.png" /> -17.393799699999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_7.png" /> -17.373339000000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_8.png" /> -17.372274900000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_9.png" /> -17.372091399999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_10.png" /> -17.371601099999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_11.png" /> -17.370871800000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_12.png" /> -17.370653699999998<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_13.png" /> -17.370528400000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_14.png" /> -17.370245000000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_15.png" /> -17.370204300000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_16.png" /> -17.369870500000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_17.png" /> -17.369389099999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_18.png" /> -17.369281900000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_19.png" /> -17.369128000000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_20.png" /> -17.368735300000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_21.png" /> -17.368527300000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_22.png" /> -17.368508299999998<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_23.png" /> -17.368416900000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_24.png" /> -17.367903500000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_25.png" /> -17.367823099999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_26.png" /> -17.367680300000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_27.png" /> -17.367515399999998<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_28.png" /> -17.367487300000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_29.png" /> -17.367353399999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_30.png" /> -17.367248900000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_31.png" /> -17.367220000000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_32.png" /> -17.366944900000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_33.png" /> -17.366730199999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_34.png" /> -17.366683900000002<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_35.png" /> -17.366567799999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_36.png" /> -17.366565399999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_37.png" /> -17.366529100000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_38.png" /> -17.366500200000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_39.png" /> -17.366468099999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_40.png" /> -17.366410999999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_41.png" /> -17.366284300000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_42.png" /> -17.366253000000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_43.png" /> -17.366250600000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_44.png" /> -17.366170199999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_45.png" /> -17.366009300000002<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_46.png" /> -17.365754299999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_47.png" /> -17.365476800000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_48.png" /> -17.365374700000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_49.png" /> -17.365366300000002<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_50.png" /> -17.365089200000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_51.png" /> -17.365067600000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_52.png" /> -17.365033600000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_53.png" /> -17.364965999999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_54.png" /> -17.364831100000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_55.png" /> -17.364687700000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_56.png" /> -17.364646300000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_57.png" /> -17.364427100000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_58.png" /> -17.364359400000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_59.png" /> -17.364075199999998<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_60.png" /> -17.363892600000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_61.png" /> -17.363836899999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_62.png" /> -17.363833100000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_63.png" /> -17.363787200000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_64.png" /> -17.363685000000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_65.png" /> -17.363550000000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_66.png" /> -17.363510699999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_67.png" /> -17.363489000000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_68.png" /> -17.363004300000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_69.png" /> -17.362990799999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_70.png" /> -17.362825399999998<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_71.png" /> -17.362793900000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_72.png" /> -17.362618600000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_73.png" /> -17.362575400000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_74.png" /> -17.362442999999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_75.png" /> -17.362261300000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_76.png" /> -17.362205800000002<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_77.png" /> -17.362048600000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_78.png" /> -17.361879900000002<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_79.png" /> -17.361835899999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_80.png" /> -17.361826199999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_81.png" /> -17.361410100000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_82.png" /> -17.361312200000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_83.png" /> -17.361166799999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_84.png" /> -17.361111999999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_85.png" /> -17.361039900000002<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_86.png" /> -17.361013799999998<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_87.png" /> -17.360919599999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_88.png" /> -17.359717199999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_89.png" /> -17.357798100000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_90.png" /> -17.357621699999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_91.png" /> -17.356942499999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_92.png" /> -17.356812200000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_93.png" /> -17.356392400000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_94.png" /> -17.355171400000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_95.png" /> -17.354816899999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_96.png" /> -17.354796300000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_97.png" /> -17.354708299999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_98.png" /> -17.354507800000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_99.png" /> -17.353945000000000<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_100.png" /> -17.353291800000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_101.png" /> -17.353270500000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_102.png" /> -17.352739700000001<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_103.png" /> -17.352355899999999<br />\
    <img src="styles/legend/Final_Studentsaccomodationsurveydata_1_104.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Final_Studentsaccomodationsurveydata_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Final_Studentsaccomodationsurveydata_1];
lyr_Final_Studentsaccomodationsurveydata_1.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Residence': 'Residence', 'Capacity': 'Capacity', 'Type ': 'Type ', 'Cost/month': 'Cost/month', 'Facilities': 'Facilities', 'Proximity': 'Proximity', });
lyr_Final_Studentsaccomodationsurveydata_1.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Residence': 'TextEdit', 'Capacity': 'TextEdit', 'Type ': 'TextEdit', 'Cost/month': 'TextEdit', 'Facilities': 'TextEdit', 'Proximity': 'TextEdit', });
lyr_Final_Studentsaccomodationsurveydata_1.set('fieldLabels', {'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Residence': 'inline label - visible with data', 'Capacity': 'inline label - visible with data', 'Type ': 'inline label - visible with data', 'Cost/month': 'inline label - visible with data', 'Facilities': 'inline label - visible with data', 'Proximity': 'inline label - visible with data', });
lyr_Final_Studentsaccomodationsurveydata_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});